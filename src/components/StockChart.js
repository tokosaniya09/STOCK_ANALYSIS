// StockChart.js
import React from "react";
import { Line } from "react-chartjs-2";

const StockChart = ({ data, forecast }) => {
  const { dates, prices, emaValues } = data;

  // Forecasted dates (next 10 days)
  const forecastDates = dates.slice(-1).concat(Array.from({ length: 10 }, (_, i) => `Day ${i + 1}`));

  const chartData = {
    labels: [...dates, ...forecastDates],
    datasets: [
      {
        label: "Actual Price",
        data: prices,
        borderColor: "yellow",
        fill: false,
      },
      {
        label: "10-Day EMA",
        data: emaValues,
        borderColor: "blue",
        fill: false,
      },
      {
        label: "10-Day EMA Forecast",
        data: [...Array(prices.length).fill(null), ...forecast],
        borderColor: "red",
        fill: false,
        borderDash: [5, 5],
      },
    ],
  };

  return (
    <div>
      <h3>Stock Price Prediction</h3>
      <Line data={chartData} />
    </div>
  );
};

export default StockChart;


// // StockChart.js
// import React from "react";
// import { Line } from "react-chartjs-2";

// const StockChart = ({ historicalData, forecastData }) => {
//   const data = {
//     labels: historicalData.dates.concat(forecastData.length ? historicalData.dates.slice(-1).concat([...Array(forecastData.length)].map((_, i) => `Day ${i + 1}`)) : []),
//     datasets: [
//       {
//         label: "Historical Prices",
//         data: historicalData.prices,
//         borderColor: "blue",
//         fill: false,
//       },
//       {
//         label: "EMA Forecast",
//         data: forecastData,
//         borderColor: "orange",
//         fill: false,
//       },
//     ],
//   };

//   const options = {
//     scales: {
//       y: {
//         beginAtZero: false,
//       },
//     },
//   };

//   return (
//     <div>
//       <h2>Stock Price Forecast</h2>
//       <Line data={data} options={options} />
//     </div>
//   );
// };

// export default StockChart;
