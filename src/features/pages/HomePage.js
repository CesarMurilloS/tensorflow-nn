import { Box, Button, CircularProgress, Grid, Card, Typography, CardContent } from '@material-ui/core'
import React, { useState } from 'react'
import { ConvolutionalNeuralNetwork, getDataPromise } from '../../app/ml/functions';
import Probabilities from '../components/bits/table/Probabilities';
// Input datasets
import trainingSet from "../../app/ml/trainingSet.json"
import Records from '../components/bits/table/Records';
import LineChart from '../components/bits/charts/LineChart';

function HomePage() {
    const [loading, setLoading] = useState(false);;
    const [taskCompleted, setTaskCompleted] = useState(false);
    const [model, setModel] = useState(null);
    const [selectedProbability, setSelectedProbability] = useState(null);

    const processDataAsycn = async () => {
        let data = await ConvolutionalNeuralNetwork();
        return data;
    };

    function startNeuralNetwork() {
        console.log("Start Neural Network")
        setLoading(true)
        processDataAsycn().then((data) => {
            console.log('Data from processDataAsycn() with async( When promise gets resolved ): ' + data);
            setLoading(false)
            setTaskCompleted(true)
            setModel(data.model[0])
            setSelectedProbability(data.selectedProbability)
            console.log("MODEL: ", data.model)
            console.log("SELECTED PROBAILITY: ", data.selectedProbability)

        }).catch((error) => {
            console.log('Error from processDataAsycn() with async( When promise gets rejected ): ' + error);
            setLoading(false)
            setTaskCompleted(true)
        });
    }

    function processAnotherRecord() {
        setLoading(false)
        setTaskCompleted(false)
    }

    return (
        <div>
            <Grid container
                spacing={3}
                direction="row"
                justifyContent="center"
                alignItems="center">

                <Grid item xs={12} md={8}>
                    <Box p={0} justifyContent="center" textAlign="center">
                        <Records records={trainingSet} />
                    </Box>
                </Grid>
                <Grid item xs={12} md={8}>
                    <Card>
                        <CardContent>
                            <Box p={3} justifyContent="center" textAlign="center">
                                <Typography variant="h3" gutterBottom>
                                    Iniciar Red Neuronal
                                </Typography>
                                {!taskCompleted ?
                                    <Button
                                        disabled={loading}
                                        variant="contained"
                                        color="primary"
                                        disableElevation
                                        onClick={startNeuralNetwork}>
                                        Iniciar Red Neuronal
                                    </Button>
                                    :
                                    <Button
                                        variant="contained"
                                        color="secondary"
                                        disableElevation
                                        onClick={processAnotherRecord}>
                                        Procesar otro registro
                                    </Button>
                                }
                            </Box>
                            {loading ?
                                <Box p={3} justifyContent="center" textAlign="center">
                                    <CircularProgress size={80} color="primary" />
                                    <Typography variant="subtitle1" gutterBottom>
                                        Por favor espere, esto tomará un momento.
                                    </Typography>
                                </Box>
                                :
                                <></>
                            }
                        </CardContent>
                    </Card>
                </Grid>

                {taskCompleted && model && selectedProbability ?
                    <Grid item xs={12} md={8}>
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

            </Grid>
        </div>
    )
}

export default HomePage
