import * as tf from '@tensorflow/tfjs';

// Input datasets
import { CLASSIFICATION_TAGS } from './datasets/weather/data';
import { SELECT__POSITION } from '../services/datasetSlice';
import { DATASETS } from '../constants/constants';
import { useSelector } from 'react-redux';

// Output tags

export const getDataPromise = (num) => new Promise((resolve, reject) => {
    setTimeout(() => {
        (typeof num === 'number') ? resolve(num * 2) : reject('Input must be an number');
    }, 2000);
});

export const NeuralNetwork = (request) => new Promise((resolve, reject) => {
    console.log("Neural Network calculating tags...")
    
    let dataset = DATASETS[request.datasetPosition];

    /**
     * Input: Training data
     */
    const trainingData = tf.tensor2d(dataset.inputTrainingDataMap)
    console.log("Training Data: ", trainingData)

    /**
     * Input: Testing data
     * */
    console.log("Request.testingData: ", request.inputTestingDataMap)
    const testingData = tf.tensor2d(request.inputTestingDataMap)
    console.log("Testing Data: ", testingData)

    /**
     * Output: Probability for each tag
     * */
    const outputData = tf.tensor2d(dataset.outputTrainingDataMap)
    console.log("Output Data: ", outputData)

    /**
     * Build Neural Network
     * */
    const model = tf.sequential()

    /**
     * Layer up Neural Network
     * 
     * Sigmoid as an:
     * 1. Activation Function 
     * 2. Squashing Function 
     * in our Neural Network
     * 
     * References: 
     * 1. https://machinelearningmastery.com/a-gentle-introduction-to-sigmoid-function/
     */
    model.add(tf.layers.dense({
        inputShape: [testingData.strides[0]],
        activation: "sigmoid",
        units: 5,
    }))
    model.add(tf.layers.dense({
        inputShape: [5],
        activation: "sigmoid",
        units: 6,
    }))
    model.add(tf.layers.dense({
        inputShape: [6],
        activation: "sigmoid",
        units: outputData.strides[0],
    }))
    model.compile({
        loss: "meanSquaredError",
        optimizer: tf.train.adam(.06),
    })

    /**
     * Train Neural Network Fitness Function for model
     */
    const startTime = Date.now()
    model.fit(trainingData, outputData, { epochs: 100 })
        .then((history) => {
            console.log(history)
            var trainedModel = model.predict(testingData)
            console.log("trainedModel: ", trainedModel)

            // @ts-ignore
            const predictedValue = trainedModel.arraySync();
            console.log("predictedValue: ", predictedValue);

            /**
             * Predict the probability for each output
             */
            var arr = Array.from(predictedValue);
            console.log("predictedValue as Array: ", arr);
            var values = arr[0]
            console.log("Values: ", values)

            /**
             * Get position for item with the highest fitness
             */
            let max = 0
            for (let i = 0; i < values.length; i++) {
                if (values[i] >= values[max]) {
                    max = i;
                }
            }

            console.log(
                "Classification: ", dataset.classificationTags[max],
                " Fitness: ", values[max], "%")

            // Success in classification values
            resolve({ selectedProbability: max, model: arr })
        })
        .catch((error) => {
            // Error
            reject('Something failed')
        })
});