

import React from "react";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from 'chart.js';

// Register the necessary Chart.js components
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const StockChart = ({ title, yLabel, dataset }) => {
  const chartData = {
    labels: dataset[0].data.map((_, index) => `Day ${index + 1}`), // Assuming each day is a point
    datasets: [
      {
        label: "5-Day Predicted Values", // Set the label for EMA line
        data: dataset[0].data,  // The EMA values data
        borderColor: "orange",  // Line color for EMA
        backgroundColor: "rgba(255, 165, 0, 0.2)", // Light orange fill under EMA line
        fill: false,  // Do not fill under the EMA line
        tension: 0.2, // Smooth line curve
        pointBorderWidth: 2,  // Point border width
        pointRadius: 6,  // Point radius (size of the points)
      },
    ],
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      title: {
        display: true,
        text: title, // Display the title passed in props
        color: "white", // Title color
        font: {
          weight: "bold",
          size: 16,
        },
      },
      legend: {
        position: "top", // Position of the legend
        labels: {
          color: "white", // Legend text color
          font: {
            weight: "bold",
          },
        },
      },
      tooltip: {
        enabled: true, // Enable tooltips
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: "Days", // x-axis label
          color: "white",
          font: {
            weight: "bold",
            size: 14,
          },
        },
        type: 'category', // Use 'category' type scale for x-axis (based on days)
        grid: {
          drawBorder: true, // Show the border on the x-axis
          color: "rgba(255, 255, 255, 0.2)", // Light grid lines
          borderColor: "white", // Axis line color
          borderWidth: 2, // Make the x-axis line thicker
        },
        ticks: {
          color: "white", // Color of the x-axis tick labels
          font: {
            weight: "bold",
            size: 12,
          },
        },
      },
      y: {
        title: {
          display: true,
          text: yLabel || "Price (USD)", // y-axis label (default is "Price (USD)")
          color: "white",
          font: {
            weight: "bold",
            size: 14,
          },
        },
        beginAtZero: false, // Start y-axis at the minimum value of EMA (could be true if preferred)
        grid: {
          drawBorder: true, // Show the border on the y-axis
          color: "rgba(255, 255, 255, 0.2)", // Light grid lines
          borderColor: "white", // Axis line color
          borderWidth: 2, // Make the y-axis line thicker
        },
        ticks: {
          color: "white", // Color of the y-axis tick labels
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
