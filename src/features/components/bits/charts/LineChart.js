import { blue } from '@material-ui/core/colors';
import React from 'react';
import { Line } from 'react-chartjs-2';
import { useSelector } from 'react-redux';
import { DATASETS } from '../../../../app/constants/constants';
import { SELECT__POSITION } from '../../../../app/services/datasetSlice';

function LineChart({model, selectedProbability}) {

  const datasetPosition = useSelector(SELECT__POSITION)
  let dataset = DATASETS[datasetPosition];

  const data = {
    labels: dataset.classificationTags.map(a => a.name),
    datasets: [
      {
        label: 'Probability',
        data: model,
        fill: false,
        backgroundColor: "transparent",
        borderColor: blue[900],
      },
    ],
  };

  const options = {
    scales: {
      yAxes: [
        {
          ticks: {
            beginAtZero: true,
          },
        },
      ],
    },
  };
  return (
    <div>
      <div className='header'>
        <h1 className='title'>Probability chart</h1>
      </div>
      <Line data={data} options={options} />
    </div>
  )
}

export default LineChart
