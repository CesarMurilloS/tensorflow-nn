import { combineReducers, createSlice } from '@reduxjs/toolkit'

const initialState = {
    name: null,
    trainingData: null,
    testingData: null,
    columns: null,
    classificationTags: null
}

const datasetSlice = createSlice({
    name: 'dataset',
    initialState,
    reducers: {
        SET__DATASET: (state, action) => {
            state.name = action.payload.name
            state.trainingData = action.payload.trainingData
            state.columns = action.payload.columns
            state.classificationTags = action.payload.classificationTags
        },
        SET__NAME: (state, action) => {
            state.name = action.payload.name
        },
        SET__TRAINING_DATA: (state, action) => {
            state.trainingData = action.payload.trainingData
        },
        SET__TESTING_DATA: (state, action) => {
            state.testingData = action.payload.testingData
        },
        SET__COLUMNS: (state, action) => {
            state.columns = action.payload.columns
        },
        SET__CLASSIFICATION_TAGS: (state, action) => {
            state.classificationTags = action.payload.classificationTags
        }
    }
});

export const {
    SET__DATASET,
    SET__NAME,
    SET__TRAINING_DATA,
    SET__TESTING_DATA,
    SET__COLUMNS,
    SET__CLASSIFICATION_TAGS
} = datasetSlice.actions

export const SELECT__NAME = (state) => state.data.dataset.name
export const SELECT__TRAINING_DATA = (state) => state.data.dataset.trainingData
export const SELECT__TESTING_DATA = (state) => state.data.dataset.testingData
export const SELECT__COLUMNS = (state) => state.data.dataset.columns
export const SELECT__CLASSIFICATION_TAGS = (state) => state.data.dataset.classificationTags

// Reducer combiner
const reducer = combineReducers({
    dataset: datasetSlice.reducer
});

export default reducer