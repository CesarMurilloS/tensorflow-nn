import { Box, Button, CircularProgress, Grid, Card, Typography, CardContent } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import { NeuralNetwork, getDataPromise } from '../../app/ml/functions';
import testingDataset from '../../app/ml/testingData.json';
import Probabilities from '../components/bits/table/Probabilities';
// Input datasets
import Records from '../components/bits/table/Records';
import LineChart from '../components/bits/charts/LineChart';
import DatasetSelector from '../components/bits/DatasetSelector';
import { SELECT__NEW_RECORD, SELECT__POSITION, SET__NEW_RECORD } from '../../app/services/datasetSlice';
import { useDispatch, useSelector } from 'react-redux';
import { DATASETS } from '../../app/constants/constants';
import NewRecord from '../components/bits/forms/NewRecord';

function HomePage() {
    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false);;
    const [taskCompleted, setTaskCompleted] = useState(false);
    const [model, setModel] = useState(null);
    const [selectedProbability, setSelectedProbability] = useState(null);

    const datasetPosition = useSelector(SELECT__POSITION)
    let dataset = DATASETS[datasetPosition];
    let newRecord = useSelector(SELECT__NEW_RECORD)

    const processDataAsync = async () => {
        console.log("Process Data Async")

        console.log("1. New Record: ", newRecord)

        let inputTestingDataMap = dataset.inputTestingDataMap(newRecord)

        console.log("1. Request Input Testing Data Map: ", inputTestingDataMap)

        /*console.log("2. New Record: ", testingDataset)

        inputTestingDataMap = dataset.inputTestingDataMap(testingDataset)
        
        console.log("2. Request Input Testing Data Map: ", inputTestingDataMap)*/

        let request = {
            inputTestingDataMap: inputTestingDataMap,
            datasetPosition: datasetPosition
        }

        console.log("Request: ", request)
        let data = await NeuralNetwork(request);
        return data;
    };

    //Runs everytime dataset value changes
    useEffect(() => {
        processAnotherRecord()
    }, [dataset])

    function startNeuralNetwork() {
        console.log("Start Neural Network")
        setLoading(true)
        processDataAsync().then((data) => {
            console.log('Data from processDataAsync() with async( When promise gets resolved ): ' + data);
            setLoading(false)
            setTaskCompleted(true)
            setModel(data.model[0])
            setSelectedProbability(data.selectedProbability)
            console.log("MODEL: ", data.model)
            console.log("SELECTED PROBAILITY: ", data.selectedProbability)

        }).catch((error) => {
            console.log('Error from processDataAsync() with async( When promise gets rejected ): ' + error);
            setLoading(false)
            setTaskCompleted(true)
        });
    }

    function processAnotherRecord() {
        setLoading(false)
        setTaskCompleted(false)
        setSelectedProbability(null)
        setModel(null)
        dispatch(SET__NEW_RECORD({ newRecord: null }))
    }

    return (
        <div>
            <Grid container
                spacing={3}
                direction="row"
                justifyContent="center"
                alignItems="center">

                <Grid item xs={12} md={10}>
                    <Box p={0} mt={5} justifyContent="center" textAlign="center">
                        <DatasetSelector disabled={loading} />
                    </Box>
                </Grid>
                {dataset ?
                    <>
                        <Grid item xs={12} md={10}>
                            <Box p={0} justifyContent="center" textAlign="center">
                                <Records />
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={10}>
                            <Card>
                                <CardContent>
                                    <Box p={3} justifyContent="center" textAlign="center">
                                        <Typography variant="h3" gutterBottom>
                                            Create new record
                                        </Typography>
                                        <Typography variant="h5" gutterBottom>
                                            Dataset: {dataset.name}
                                        </Typography>
                                        <NewRecord
                                            disabled={loading} />
                                    </Box>
                                </CardContent>
                            </Card>
                        </Grid>
                        {newRecord === null ?
                            <></>
                            :
                            <>
                                <Grid item xs={12} md={10}>
                                    <Card>
                                        <CardContent>
                                            <Box p={3} justifyContent="center" textAlign="center">
                                                <Typography variant="h3" gutterBottom>
                                                    Start Neural Network
                                                </Typography>
                                                <Typography variant="h5" gutterBottom>
                                                    Dataset: {dataset.name}
                                                </Typography>
                                                {!taskCompleted ?
                                                    <Button
                                                        disabled={loading}
                                                        variant="contained"
                                                        color="primary"
                                                        disableElevation
                                                        onClick={startNeuralNetwork}>
                                                        Start Neural Network
                                                    </Button>
                                                    :
                                                    <Button
                                                        variant="contained"
                                                        color="secondary"
                                                        disableElevation
                                                        onClick={processAnotherRecord}>
                                                        Process another record
                                                    </Button>
                                                }
                                            </Box>
                                            {loading ?
                                                <Box p={3} justifyContent="center" textAlign="center">
                                                    <CircularProgress size={80} color="primary" />
                                                    <Typography variant="subtitle1" gutterBottom>
                                                        Please wait, this may take a little while.
                                                    </Typography>
                                                </Box>
                                                :
                                                <></>
                                            }
                                        </CardContent>
                                    </Card>
                                </Grid>

                                {(taskCompleted!=null && model!=null && selectedProbability!=null) ?
                                    <Grid item xs={12} md={10}>
                                        <Card>
                                            <CardContent>

                                                <Probabilities
                                                    model={model}
                                                    selectedProbability={selectedProbability} />
                                                <LineChart
                                                    model={model}
                                                    selectedProbability={selectedProbability} />
                                            </CardContent>
                                        </Card>
                                    </Grid>
                                    :
                                    <></>
                                }
                            </>
                        }
                    </>
                    :
                    <></>
                }
            </Grid>
        </div >
    )
}

export default HomePage
