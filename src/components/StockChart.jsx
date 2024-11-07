import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const StockChart = ({ title, yLabel, dataset }) => {
  const chartData = {
    labels: dataset[0].data.map((_, index) => `Day ${index + 1}`), 
    datasets: [
      {
        label: "5-Day Predicted Values",
        data: dataset[0].data, 
        borderColor: "orange",  
        backgroundColor: "rgba(255, 165, 0, 0.2)", 
        fill: false, 
        tension: 0.2, 
        pointBorderWidth: 2,  
        pointRadius: 6, 
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: title,
        color: "white",
        font: {
          weight: "bold",
          size: 16,
        },
      },
      legend: {
        position: "top", 
        labels: {
          color: "white", 
          font: {
            weight: "bold",
          },
        },
      },
      tooltip: {
        enabled: true, 
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Days",
          color: "white",
          font: {
            weight: "bold",
            size: 14,
          },
        },
        type: 'category', 
        grid: {
          drawBorder: true, 
          color: "rgba(255, 255, 255, 0.2)",
          borderColor: "white",
          borderWidth: 2, 
        },
        ticks: {
          color: "white", 
          font: {
            weight: "bold",
            size: 12,
          },
        },
      },
      y: {
        title: {
          display: true,
          text: yLabel || "Price (USD)", 
          color: "white",
          font: {
            weight: "bold",
            size: 14,
          },
        },
        beginAtZero: false, 
        grid: {
          drawBorder: true, 
          color: "rgba(255, 255, 255, 0.2)", 
          borderColor: "white",
          borderWidth: 2, 
        },
        ticks: {
          color: "white", 
          font: {
            weight: "bold",
            size: 12,
          },
        },
      },
    },
  };
  

  return <Line data={chartData} options={chartOptions} />;
};

export default StockChart;
