import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import Error from "../components/Error";
import useFetchStockForecast from "../hooks/useFetchStockForecast";
import { Line } from "react-chartjs-2"; // Import Line chart from react-chartjs-2
import Chart from 'chart.js/auto'; // Automatically registers Chart.js components

export default function StockForecastPage() {
  const { symbol } = useParams(); // Assumes the stock symbol is passed as a URL param
  const [fetchStockForecast, { forecastData, loading, error }] = useFetchStockForecast();

  useEffect(() => {
    if (symbol) {
      fetchStockForecast(symbol); // Fetch the forecast data when the symbol changes
    }
  }, [symbol]);

  if (loading) return <Loading />; // Show loading spinner if data is still being fetched
  if (error) return <Error explanation={error} />; // Show error message if fetching fails

  // Use sample data if no forecast data is available (for demonstration)
  const sampleForecastData = [223.45, 224.9, 226.34, 225.89, 228.5];
  const dataToUse = forecastData || sampleForecastData;

  // Chart.js data structure
  const chartData = {
    labels: dataToUse.map((_, index) => `Day ${index + 1}`), // Labels for X-axis (Day 1, Day 2, etc.)
    datasets: [
      {
        label: `Forecasted Prices for ${symbol}`, // Graph title
        data: dataToUse, // The actual data (prices) for the graph
        borderColor: "rgba(75, 192, 192, 1)", // Line color
        backgroundColor: "rgba(75, 192, 192, 0.2)", // Line fill color (optional)
        fill: true, // Fill the area under the line
      },
    ],
  };

  // Chart.js options (customize according to your needs)
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: "top" }, // Position of the legend
      tooltip: { enabled: true }, // Show tooltips when hovering over data points
    },
    scales: {
      x: { title: { display: true, text: "Days" } }, // X-axis label
      y: { title: { display: true, text: "Price (USD)" } }, // Y-axis label
    },
  };

  return (
    <div>
      <h1>Stock Forecast for {symbol}</h1>
      {forecastData ? (
        <div>
          <Line data={chartData} options={chartOptions} /> {/* Render the line chart */}
          <ul>
            {forecastData.map((price, index) => (
              <li key={index}>Day {index + 1}: ${price.toFixed(2)}</li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No forecast data available for this stock.</p>
      )}
    </div>
  );
}
