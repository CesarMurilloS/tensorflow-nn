import { amber, blue, blueGrey, brown, cyan, deepOrange, deepPurple, green, grey, indigo, lightBlue, lightGreen, lime, orange, pink, purple, red, teal, yellow } from '@material-ui/core/colors';
import trainingData from "./trainingData.json"


export const CLASSIFICATION_TAGS = [
    {
        name: "Very wet",
        max: 3.99,
        min: 3,
        color: blue[500],
        tag: 4
    },
    {
        name: "Moderately wet",
        max: 2.99,
        min: 2,
        color: cyan[500],
        tag: 3
    },
    {
        name: "Slightly wet",
        max: 1.99,
        min: 1,
        color: green[900],
        tag: 2
    },
    {
        name: "Incipient wet spell",
        max: 0.99,
        min: 0.50,
        color: green[500],
        tag: 1
    },
    {
        name: "Near normal",
        max: 0.49,
        min: -0.49,
        color: yellow[500],
        tag: 0
    },
    {
        name: "Incipient drought",
        max: -0.50,
        min: -0.99,
        color: orange[500],
        tag: -1
    },
    {
        name: "Mild drought",
        max: 1,
        min: -1.99,
        color: red[500],
        tag: -2
    },
    {
        name: "Moderate drought",
        max: -2,
        min: -2.99,
        color: red[900],
        tag: -3
    },
    {
        name: "Severe drought",
        max: -3,
        min: -3.99,
        color: pink[500],
        tag: -4
    },
];

export const COLUMNS = [
    {
        id: 'month',
        label: 'Month',
        minWidth: 30,
        type: "number",
        receiveInput: true,
    },
    {
        id: 'temperatureC',
        label: 'Temperature °C',
        minWidth: 70,
        align: 'right',
        format: (value) => value.toFixed(2),
        type: "number",
        receiveInput: true,
    },
    {
        id: 'precipitation',
        label: 'Precipitation',
        minWidth: 70,
        align: 'right',
        format: (value) => value.toFixed(2),
        type: "number",
        receiveInput: true,
    },
    {
        id: 'evapotranspiration',
        label: 'Evapotranspiration',
        minWidth: 70,
        align: 'right',
        format: (value) => value.toFixed(2),
        type: "number",
        receiveInput: true,
    },
    {
        id: 'tag',
        label: 'Tag',
        minWidth: 30,
        align: 'right',
        type: "number",
        receiveInput: false,
    },
];

export const TRAINING_DATA = trainingData;

export const INPUT__TRAINING_DATA_MAP = trainingData.map(item => [
    item.month,
    item.temperatureC,
    item.precipitation,
    item.evapotranspiration,
])

export function INPUT__TESTING_DATA_MAP(testingData) {
    let map = testingData.map(item => [
        item.month,
        item.temperatureC,
        item.precipitation,
        item.evapotranspiration,
    ])
    console.log("INPUT__TESTING_DATA_MAP: ", map)
    return map;
}

export const OUTPUT__TRAINING_DATA_MAP = trainingData.map(item => [
    item.tag === "4" ? 1 : 0,
    item.tag === "3" ? 1 : 0,
    item.tag === "2" ? 1 : 0,
    item.tag === "1" ? 1 : 0,
    item.tag === "0" ? 1 : 0,
    item.tag === "-1" ? 1 : 0,
    item.tag === "-2" ? 1 : 0,
    item.tag === "-3" ? 1 : 0,
    item.tag === "-4" ? 1 : 0,
])

export const DATA_STRUCTURE = {
    month: 1,
    temperatureC: 0,
    precipitation: 0,
    evapotranspiration: 0,
}

export const WEATHER_DATA = {
    name: "Weather",
    columns: COLUMNS,
    trainingData: TRAINING_DATA,
    classificationTags: CLASSIFICATION_TAGS,
    inputTrainingDataMap: INPUT__TRAINING_DATA_MAP,
    inputTestingDataMap: INPUT__TESTING_DATA_MAP,
    outputTrainingDataMap: OUTPUT__TRAINING_DATA_MAP,
    dataStructure: DATA_STRUCTURE,
}