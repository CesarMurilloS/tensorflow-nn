import { FormControl, InputLabel, makeStyles, MenuItem, Select } from '@material-ui/core';
import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux';
import { DATASETS } from '../../../app/constants/constants';
import { SET__POSITION } from '../../../app/services/datasetSlice';

function DatasetSelector({ disabled }) {
    const dispatch = useDispatch()
    const useStyles = makeStyles((theme) => ({
        formControl: {
            margin: theme.spacing(1),
            minWidth: 120,
        },
        selectEmpty: {
            marginTop: theme.spacing(2),
        },
    }));

    const classes = useStyles();
    const [option, setOption] = useState(0);

    const handleChange = (event) => {
        setOption(event.target.value);
        let position = event.target.value;
        console.log(position)
        dispatch(SET__POSITION({ position: position }))
    };

    //Runs once the component is mounted
    useEffect(() => {
        dispatch(SET__POSITION({ position: 0 }));
    }, [])

    return (
        <div>
            <FormControl variant="outlined" className={classes.formControl}>
                <InputLabel>Dataset</InputLabel>
                <Select
                    disabled={disabled}
                    value={option}
                    onChange={handleChange}
                    label="Dataset"
                >
                    {DATASETS.map((dataset, i) => (
                        <MenuItem value={i} key={i}>
                            {dataset.name}
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>
        </div>
    )
}

export default DatasetSelector
