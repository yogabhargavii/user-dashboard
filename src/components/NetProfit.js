// NetProfit.js
import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import '../styles/NetProfit.css';

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  datasets: [
    {
      data: [70, 30],
      backgroundColor: ['#4caf50', '#f44336'],
      hoverBackgroundColor: ['#66bb6a', '#e57373'],
      borderWidth: 0,
    },
  ],
};

const options = {
  cutout: '80%',
  plugins: {
    legend: {
      display: false,
    },
  },
};

const NetProfit = () => (
  <div className="net-profit">
    <div className="chart-container">
      <Doughnut data={data} options={options} />
      <div className="chart-text">
        <span>70%</span>
      </div>
    </div>
    <div className="profit-details">
      <h2>Net Profit</h2>
      <p>$6759.25</p>
      <p className="increase">+3%</p>
    </div>
  </div>
);

export default NetProfit;
