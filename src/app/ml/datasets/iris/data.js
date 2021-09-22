import { amber, blue, blueGrey, brown, cyan, deepOrange, deepPurple, green, grey, indigo, lightBlue, lightGreen, lime, orange, pink, purple, red, teal, yellow } from '@material-ui/core/colors';
import trainingData from "./trainingData.json"


export const CLASSIFICATION_TAGS = [
    {
        name: "Iris Virginica",
        color: cyan[500],
        tag: "2"
    },
    {
        name: "Iris Versicolor",
        color: blue[500],
        tag: "1"
    }, 
    {
        name: "Iris Setosa",
        color: indigo[500],
        tag: "0"
    } 
];

export const COLUMNS = [
    {
        id: 'id',
        label: 'Id',
        minWidth: 30,
        type: "string",
        receiveInput: false,
    },
    {
        id: 'sepalLengthCm',
        label: 'Sepal Length Cm',
        minWidth: 70,
        align: 'right',
        format: (value) => value.toFixed(2),
        type: "number",
        receiveInput: true,
    },
    {
        id: 'sepalWidthCm',
        label: 'Sepal Width Cm',
        minWidth: 70,
        align: 'right',
        format: (value) => value.toFixed(2),
        type: "number",
        receiveInput: true,
    },
    {
        id: 'petalLengthCm',
        label: 'Petal Length Cm',
        minWidth: 70,
        align: 'right',
        format: (value) => value.toFixed(2),
        type: "number",
        receiveInput: true,
    },
    {
        id: 'petalWidthCm',
        label: 'Petal Width Cm',
        minWidth: 70,
        align: 'right',
        format: (value) => value.toFixed(2),
        type: "number",
        receiveInput: true,
    },
    {
        id: 'species',
        label: 'Species',
        minWidth: 70,
        type: "string",
        receiveInput: false,
    },
    {
        id: 'tag',
        label: 'Tag',
        minWidth: 70,
        align: 'right',
        type: "number",
        receiveInput: false,
    },
];

export const TRAINING_DATA = trainingData;

export const INPUT__TRAINING_DATA_MAP = trainingData.map(item => [
    item.sepalLengthCm,
    item.sepalWidthCm,
    item.petalLengthCm,
    item.petalWidthCm,
])

export function INPUT__TESTING_DATA_MAP(testingData) {
    return testingData.map(item => [
        item.sepalLengthCm,
        item.sepalWidthCm,
        item.petalLengthCm,
        item.petalWidthCm,
    ])
}

export const OUTPUT__TRAINING_DATA_MAP = trainingData.map(item => [
    item.tag === "2" ? 1 : 0,
    item.tag === "1" ? 1 : 0,
    item.tag === "0" ? 1 : 0,
])

export const DATA_STRUCTURE = {
    sepalLengthCm: 0,
    sepalWidthCm: 0,
    petalLengthCm: 0,
    petalWidthCm: 0,
}

export const IRIS_DATA = {
    name: "Iris",
    columns: COLUMNS,
    trainingData: TRAINING_DATA,
    classificationTags: CLASSIFICATION_TAGS,
    inputTrainingDataMap: INPUT__TRAINING_DATA_MAP,
    inputTestingDataMap: INPUT__TESTING_DATA_MAP,
    outputTrainingDataMap: OUTPUT__TRAINING_DATA_MAP,
    dataStructure: DATA_STRUCTURE,
}