import { blue } from '@material-ui/core/colors';
import React from 'react';
import { Line } from 'react-chartjs-2';
import { CLASSIFICATION_TAGS } from '../../../../app/constants/constants';

function LineChart({model, selectedProbability}) {

  const data = {
    labels: CLASSIFICATION_TAGS.map(a => a.name),
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
        <h1 className='title'>Line Chart</h1>
      </div>
      <Line data={data} options={options} />
    </div>
  )
}

export default LineChart
