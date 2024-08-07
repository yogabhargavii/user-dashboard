// ActivityChart.js
import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';
import '../styles/ActivityChart.css';

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30'],
  datasets: [
    {
      label: 'Activity',
      data: [12, 19, 3, 5, 2, 3, 9, 12, 19, 3, 5, 2, 3, 9, 12, 19, 3, 5, 2, 3, 9, 12, 19, 3, 5, 2, 3, 9, 5, 2],
      fill: false,
      backgroundColor: '#4caf50',
      borderColor: '#4caf50',
      tension: 0.1,
    },
  ],
};

const options = {
  scales: {
    y: {
      beginAtZero: true,
      ticks: {
        color: 'white'
      },
      grid: {
        color: '#555'
      }
    },
    x: {
      ticks: {
        color: 'white'
      },
      grid: {
        color: '#555'
      }
    }
  },
  plugins: {
    legend: {
      display: false
    },
    tooltip: {
      enabled: true,
      mode: 'index',
      intersect: false,
    },
  },
  maintainAspectRatio: false
};

const ActivityChart = () => (
  <div className="activity-chart">
    <Line data={data} options={options} />
  </div>
);

export default ActivityChart;
