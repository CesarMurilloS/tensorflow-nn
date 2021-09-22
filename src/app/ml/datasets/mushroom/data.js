import { amber, blue, blueGrey, brown, cyan, deepOrange, deepPurple, green, grey, indigo, lightBlue, lightGreen, lime, orange, pink, purple, red, teal, yellow } from '@material-ui/core/colors';
import trainingData from "./trainingMushroomData.json"

export const CLASSIFICATION_TAGS = [
    {
        name: "Edible",
        color: cyan[500],
        tag: "0"
    },
    {
        name: "Poisonous",
        color: blue[500],
        tag: "1"
    }
];

export const COLUMNS = [
    {
        id: 'capShape',
        label: 'Cap Shape',
        minWidth: 20,
        align: 'center',
        type: "string",
        receiveInput: true,
        options: [
            { name: "bell", id: "b" },
            { name: "conical", id: "c" },
            { name: "convex", id: "x" },
            { name: "flat", id: "f" },
            { name: " knobbed", id: "k" },
            { name: "sunken", id: "s" }
        ],
    },
    {
        id: 'capSurface',
        label: 'Cap Surface',
        minWidth: 20,
        align: 'center',
        type: "string",
        receiveInput: true,
        options: [
            { name: "fibrous", id: "f" },
            { name: "grooves", id: "g" },
            { name: "scaly", id: "y" },
            { name: "smooth", id: "s" }
        ],
    },
    {
        id: 'capColor',
        label: 'Cap Color',
        minWidth: 20,
        align: 'center',
        type: "string",
        receiveInput: true,
        options: [
            { name: "brown", id: "n" },
            { name: "buff", id: "b" },
            { name: "cinnamon", id: "c" },
            { name: "gray", id: "g" },
            { name: "green", id: "r" },
            { name: "pink", id: "p" },
            { name: "purple", id: "u" },
            { name: "red", id: "e" },
            { name: "white", id: "w" },
            { name: "yellow", id: "y" }
        ],
    },
    {
        id: 'bruises',
        label: 'Bruises',
        minWidth: 20,
        align: 'center',
        type: "string",
        receiveInput: true,
        options: [
            { name: "bruises", id: "t" },
            { name: "no", id: "f" }
        ],
    },
    {
        id: 'odor',
        label: 'Odor',
        minWidth: 20,
        align: 'center',
        type: "string",
        receiveInput: true,
        options: [
            { name: "almond", id: "a" },
            { name: "anise", id: "l" },
            { name: "creosote", id: "c" },
            { name: "fishy", id: "y" },
            { name: "foul", id: "f" },
            { name: "musty", id: "m" },
            { name: "none", id: "n" },
            { name: "pungent", id: "p" },
            { name: "spicy", id: "s" }
        ],
    },
    {
        id: 'gillAttachment',
        label: 'Gill Attachment',
        minWidth: 20,
        align: 'center',
        type: "string",
        receiveInput: true,
        options: [
            { name: "attached", id: "a" },
            { name: " descending", id: "d" },
            { name: " free", id: "f" },
            { name: " notched", id: "n" }
        ],
    },
    {
        id: 'gillSpacing',
        label: 'Gill Spacing',
        minWidth: 20,
        align: 'center',
        type: "string",
        receiveInput: true,
        options: [
            { name: "close", id: "c" },
            { name: "crowded", id: "w" },
            { name: "distant", id: "d" }
        ],
    },
    {
        id: 'gillSize',
        label: 'Gill Size',
        minWidth: 20,
        align: 'center',
        type: "string",
        receiveInput: true,
        options: [
            { name: "broad", id: "b" },
            { name: "narrow", id: "n" }
        ],
    },
    {
        id: 'gillColor',
        label: 'Gill Color',
        minWidth: 20,
        align: 'center',
        type: "string",
        receiveInput: true,
        options: [
            { name: "black", id: "k" },
            { name: "brown", id: "n" },
            { name: "buff", id: "b" },
            { name: "chocolate", id: "h" },
            { name: "gray", id: "g" },
            { name: " green", id: "r" },
            { name: "orange", id: "o" },
            { name: "pink", id: "p" },
            { name: "purple", id: "u" },
            { name: "red", id: "e" },
            { name: "white", id: "w" },
            { name: "yellow", id: "y" }
        ],
    },
    {
        id: 'stalkShape',
        label: 'Stalk Shape',
        minWidth: 20,
        align: 'center',
        type: "string",
        receiveInput: true,
        options: [
            { name: "enlarging", id: "e" },
            { name: "tapering", id: "t" }
        ],
    },
    {
        id: 'stalkRoot',
        label: 'Stalk Root',
        minWidth: 20,
        align: 'center',
        type: "string",
        receiveInput: true,
        options: [
            { name: "bulbous", id: "b" },
            { name: "club", id: "c" },
            { name: "cup", id: "u" },
            { name: "equal", id: "e" },
            { name: "rhizomorphs", id: "z" },
            { name: "rooted", id: "r" },
            { name: "missing", id: "?" }
        ],
    },
    {
        id: 'stalkSurfaceAboveRing',
        label: 'Stalk Surface Above Ring',
        minWidth: 20,
        align: 'center',
        type: "string",
        receiveInput: true,
        options: [
            { name: "fibrous", id: "f" },
            { name: "scaly", id: "y" },
            { name: "silky", id: "k" },
            { name: "smooth", id: "s" }
        ],
    },
    {
        id: 'stalkSurfaceBelowRing',
        label: 'Stalk Surface Below Ring',
        minWidth: 20,
        align: 'center',
        type: "string",
        receiveInput: true,
        options: [
            { name: "fibrous", id: "f" },
            { name: "scaly", id: "y" },
            { name: "silky", id: "k" },
            { name: "smooth", id: "s" }
        ],
    },
    {
        id: 'stalkColorAboveRing',
        label: 'Stalk Color Above Ring',
        minWidth: 20,
        align: 'center',
        type: "string",
        receiveInput: true,
        options: [
            { name: "brown", id: "n" },
            { name: "buff", id: "b" },
            { name: "cinnamon", id: "c" },
            { name: "gray", id: "g" },
            { name: "orange", id: "o" },
            { name: "pink", id: "p" },
            { name: "red", id: "e" },
            { name: "white", id: "w" },
            { name: "yellow", id: "y" }
        ],
    },
    {
        id: 'stalkColorBelowRing',
        label: 'Stalk Color Below Ring',
        minWidth: 20,
        align: 'center',
        type: "string",
        receiveInput: true,
        options: [
            { name: "brown", id: "n" },
            { name: "buff", id: "b" },
            { name: "cinnamon", id: "c" },
            { name: "gray", id: "g" },
            { name: "orange", id: "o" },
            { name: "pink", id: "p" },
            { name: "red", id: "e" },
            { name: "white", id: "w" },
            { name: "yellow", id: "y" }
        ],
    },
    {
        id: 'veilType',
        label: 'Veil Type',
        minWidth: 20,
        align: 'center',
        type: "string",
        receiveInput: true,
        options: [
            { name: "partial", id: "p" },
            { name: "universal", id: "u" }
        ],
    },
    {
        id: 'veilColor',
        label: 'Veil Color',
        minWidth: 20,
        align: 'center',
        type: "string",
        receiveInput: true,
        options: [
            { name: "brown", id: "n" },
            { name: "orange", id: "o" },
            { name: "white", id: "w" },
            { name: "yellow", id: "y" }
        ],
    },
    {
        id: 'ringNumber',
        label: 'Ring Number',
        minWidth: 20,
        align: 'center',
        type: "string",
        receiveInput: true,
        options: [
            { name: "none", id: "n" },
            { name: "one", id: "o" },
            { name: "two", id: "t" }
        ],
    },
    {
        id: 'ringType',
        label: 'Ring Type',
        minWidth: 20,
        align: 'center',
        type: "string",
        receiveInput: true,
        options: [
            { name: "cobwebby", id: "c" },
            { name: "evanescent", id: "e" },
            { name: "flaring", id: "f" },
            { name: "large", id: "l" },
            { name: "none", id: "n" },
            { name: "pendant", id: "p" },
            { name: "sheathing", id: "s" },
            { name: "zone", id: "z" }
        ],
    },
    {
        id: 'sporePrintColor',
        label: 'Spore Print Color',
        minWidth: 20,
        align: 'center',
        type: "string",
        receiveInput: true,
        options: [
            { name: "black", id: "k" },
            { name: "brown", id: "n" },
            { name: "buff", id: "b" },
            { name: "chocolate", id: "h" },
            { name: "green", id: "r" },
            { name: "orange", id: "o" },
            { name: "purple", id: "u" },
            { name: "white", id: "w" },
            { name: "yellow", id: "y" }
        ],
    },
    {
        id: 'population',
        label: 'Population',
        minWidth: 20,
        align: 'center',
        type: "string",
        receiveInput: true,
        options: [
            { name: "abundant", id: "a" },
            { name: "clustered", id: "c" },
            { name: "numerous", id: "n" },
            { name: "scattered", id: "s" },
            { name: "several", id: "v" },
            { name: "solitary", id: "y" }
        ],
    },
    {
        id: 'habitat',
        label: 'Habitat',
        minWidth: 20,
        align: 'center',
        type: "string",
        receiveInput: true,
        options: [
            { name: "grasses", id: "g" },
            { name: "leaves", id: "l" },
            { name: "meadows", id: "m" },
            { name: "paths", id: "p" },
            { name: "urban", id: "u" },
            { name: "waste", id: "w" },
            { name: "woods", id: "d" }
        ],
    },
    {
        id: 'tag',
        label: 'Tag',
        minWidth: 70,
        align: 'right',
        type: "string",
        receiveInput: false,
        options: [
            { name: "edible", id: "e" },
            { name: " poisonous", id: "p" }
        ],
    },
];

export const TRAINING_DATA = trainingData.sort(() => Math.random() - Math.random()).slice(0, 150);

export const INPUT__TRAINING_DATA_MAP = TRAINING_DATA.map(item => [
    item.capShape,
    item.capSurface,
    item.capColor,
    item.bruises,
    item.odor,
    item.gillAttachment,
    item.gillSpacing,
    item.gillSize,
    item.gillColor,
    item.stalkShape,
    item.stalkRoot,
    item.stalkSurfaceAboveRing,
    item.stalkSurfaceBelowRing,
    item.stalkColorAboveRing,
    item.stalkColorBelowRing,
    item.veilType,
    item.veilColor,
    item.ringNumber,
    item.ringType,
    item.sporePrintColor,
    item.population,
    item.habitat,
])

export function INPUT__TESTING_DATA_MAP(testingData) {
    let map = testingData.map(item => [
        item.capShape,
        item.capSurface,
        item.capColor,
        item.bruises,
        item.odor,
        item.gillAttachment,
        item.gillSpacing,
        item.gillSize,
        item.gillColor,
        item.stalkShape,
        item.stalkRoot,
        item.stalkSurfaceAboveRing,
        item.stalkSurfaceBelowRing,
        item.stalkColorAboveRing,
        item.stalkColorBelowRing,
        item.veilType,
        item.veilColor,
        item.ringNumber,
        item.ringType,
        item.sporePrintColor,
        item.population,
        item.habitat,
    ])
    console.log("INPUT__TESTING_DATA_MAP: ", map)
    return map;
}

export const OUTPUT__TRAINING_DATA_MAP = TRAINING_DATA.map(item => [
    item.tag === "0" ? 1 : 0,
    item.tag === "1" ? 1 : 0,
])

export const DATA_STRUCTURE = {
    capShape: "",
    capSurface: "",
    capColor: "",
    bruises: "",
    odor: "",
    gillAttachment: "",
    gillSpacing: "",
    gillSize: "",
    gillColor: "",
    stalkShape: "",
    stalkRoot: "",
    stalkSurfaceAboveRing: "",
    stalkSurfaceBelowRing: "",
    stalkColorAboveRing: "",
    stalkColorBelowRing: "",
    veilType: "",
    veilColor: "",
    ringNumber: "",
    ringType: "",
    sporePrintColor: "",
    population: "",
    habitat: "",
}

export const MUSHROOM_DATA = {
    name: "Mushrooms",
    columns: COLUMNS,
    trainingData: TRAINING_DATA,
    classificationTags: CLASSIFICATION_TAGS,
    inputTrainingDataMap: INPUT__TRAINING_DATA_MAP,
    inputTestingDataMap: INPUT__TESTING_DATA_MAP,
    outputTrainingDataMap: OUTPUT__TRAINING_DATA_MAP,
    dataStructure: DATA_STRUCTURE,
}