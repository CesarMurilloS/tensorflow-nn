import React, { useEffect, useState } from 'react'
import { Button, FormControl, InputLabel, makeStyles, MenuItem, Select, TextField } from '@material-ui/core';
import { useDispatch, useSelector } from 'react-redux';
import { DATASETS } from '../../../../app/constants/constants';
import { SELECT__POSITION, SET__NEW_RECORD } from '../../../../app/services/datasetSlice';

function NewRecord({ disabled }) {
    const dispatch = useDispatch()
    const useStyles = makeStyles((theme) => ({
        margin: {
            margin: theme.spacing(1),
        },
        formControl: {
            margin: theme.spacing(1),
            minWidth: 210,
        },
    }));

    const classes = useStyles();

    const datasetPosition = useSelector(SELECT__POSITION)
    let dataset = DATASETS[datasetPosition];

    const [values, setValues] = useState(dataset.dataStructure);

    const handleChange = (prop) => (event) => {
        let value = event.target.value;
        let char = value.substr(-1)
        let punctuation = char === '.' || char === ',';
        let parsedValue = parseFloat(value)
        if (value != "" && parsedValue != NaN && prop.type === "number" && !punctuation) {
            setValues({ ...values, [prop.id]: parsedValue });
        } else {
            setValues({ ...values, [prop.id]: value });
        }
    };

    const handleChangeSelect = (prop) => (event) => {
        let value = event.target.value;
        setValues({ ...values, [prop.id]: value });
    };

    function handleSubmit(e) {
        e.preventDefault()
        console.log("Save data to store", values)

        dispatch(SET__NEW_RECORD({ newRecord: [values] }))
    }

    //Runs everytime dataset value changes
    useEffect(() => {
        setValues(dataset.dataStructure)
    }, [dataset])

    return (
        <div>
            <form noValidate
                autoComplete="off"
                onSubmit={handleSubmit}>
                <div>
                    {dataset.columns.map((column) => {
                        if (column.receiveInput === true) {
                            if (column?.options) {
                                return (
                                    <FormControl variant="outlined" className={classes.formControl}>
                                        <InputLabel>{column.label}</InputLabel>
                                        <Select
                                            disabled={disabled}
                                            value={values[column.id]}
                                            onChange={handleChangeSelect({ id: column.id })}
                                            label={column.label}
                                        >
                                            {column.options.map((option, i) => (
                                                <MenuItem
                                                    value={i}
                                                    key={i}>
                                                    {i}: {option.name} ({option.id})
                                                </MenuItem>
                                            ))}
                                        </Select>
                                    </FormControl>
                                )
                            } else {
                                return (<TextField
                                    required
                                    disabled={disabled}
                                    key={column.id}
                                    className={classes.margin}
                                    label={column.label}
                                    variant="outlined"
                                    value={values[column.id]}
                                    onChange={handleChange({ id: column.id, type: column.type })}
                                />)
                            }
                        }
                    })}
                </div>

                <Button
                    type="submit"
                    disabled={disabled}
                    variant="contained"
                    color="primary"
                    disableElevation>
                    Save new record
                </Button>
            </form>
        </div>
    )
}

export default NewRecord
