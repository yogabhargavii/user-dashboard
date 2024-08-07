import React from 'react';
import { Line } from 'react-chartjs-2';

const ChartComponent = () => {
  const data = {
    labels: Array.from({ length: 30 }, (_, i) => i + 1),
    datasets: [
      {
        label: 'Activity',
        data: Array.from({ length: 30 }, () => Math.floor(Math.random() * 20)),
        borderColor: '#3e95cd',
        fill: false,
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
  };

  return (
    <div className="chart">
      <Line data={data} options={options} />
    </div>
  );
};

export default ChartComponent;
