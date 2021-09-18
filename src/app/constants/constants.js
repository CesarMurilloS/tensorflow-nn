
import { amber, blue, blueGrey, brown, cyan, deepOrange, deepPurple, green, grey, indigo, lightBlue, lightGreen, lime, orange, pink, purple, red, teal, yellow } from '@material-ui/core/colors';

export const CLASSIFICATION_TAGS = [
    {
        name: "Extremely wet",
        max: null,
        min: 4,
        color: indigo[500],
        tag: 5
    },
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
    {
        name: "Extreme drought",
        max: -4,
        min: null,
        color: purple["A200"],
        tag: -5
    },
];