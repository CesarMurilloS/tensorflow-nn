import { combineReducers, createSlice } from '@reduxjs/toolkit'

const initialState = {
    position: 0,
    neuralNetworkStarted: false,
    newRecord: null,
}

const datasetSlice = createSlice({
    name: 'dataset',
    initialState,
    reducers: {
        SET__POSITION: (state, action) => {
            state.position = action.payload.position
        },
        SET__NEURAL_NETWORK_STARTED: (state, action) => {
            state.neuralNetworkStarted = action.payload.neuralNetworkStarted
        },
        SET__NEW_RECORD: (state, action) => {
            state.newRecord = action.payload.newRecord
        },
    }
});

export const {
    SET__POSITION,
    SET__NEURAL_NETWORK_STARTED,
    SET__NEW_RECORD,
} = datasetSlice.actions

export const SELECT__POSITION = (state) => state.data.dataset.position
export const SELECT__NEURAL_NETWORK_STARTED = (state) => state.data.dataset.neuralNetworkStarted
export const SELECT__NEW_RECORD = (state) => state.data.dataset.newRecord

// Reducer combiner
const reducer = combineReducers({
    dataset: datasetSlice.reducer
});

export default reducer