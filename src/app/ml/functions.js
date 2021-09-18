import * as tf from '@tensorflow/tfjs';

// Input datasets
import trainingSet from "./trainingSet.json"
import testingSet from "./testingSet.json"

// Output tags
import { CLASSIFICATION_TAGS } from "../constants/constants"

export const getDataPromise = (num) => new Promise((resolve, reject) => {
    setTimeout(() => {
        (typeof num === 'number') ? resolve(num * 2) : reject('Input must be an number');
    }, 2000);
});

export const ConvolutionalNeuralNetwork = () => new Promise((resolve, reject) => {
    console.log("Neural Network calculating tags...")

    /**
     * Input: Training data
     */
    const trainingData = tf.tensor2d(
        trainingSet.map(item => [
            item.month,
            item.temperatureC,
            item.precipitation,
            item.evapotranspiration,
        ]))

    /**
     * Input: Testing data
     * */
    const testingData = tf.tensor2d(
        testingSet.map(item => [
            item.month,
            item.temperatureC,
            item.precipitation,
            item.evapotranspiration,
        ]))

    /**
     * Output: Probability for each tag
     * */
    const outputData = tf.tensor2d(
        trainingSet.map(item => [
            item.tag === "5" ? 1 : 0,
            item.tag === "4" ? 1 : 0,
            item.tag === "3" ? 1 : 0,
            item.tag === "2" ? 1 : 0,
            item.tag === "1" ? 1 : 0,
            item.tag === "0" ? 1 : 0,
            item.tag === "-1" ? 1 : 0,
            item.tag === "-2" ? 1 : 0,
            item.tag === "-3" ? 1 : 0,
            item.tag === "-4" ? 1 : 0,
            item.tag === "-5" ? 1 : 0
        ]))

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
        inputShape: [4],
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
        units: 11,
    }))
    model.add(tf.layers.dense({
        activation: "sigmoid",
        units: 11,
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
                "Classification: ", CLASSIFICATION_TAGS[max],
                " Fitness: ", values[max], "%")

            resolve({ selectedProbability: max, model: arr })
            /*setSelectedProbability(max)
            setModel(arr)*/

        })
        .catch((error) => {
            // Error
            reject('Something failed')
        })
});