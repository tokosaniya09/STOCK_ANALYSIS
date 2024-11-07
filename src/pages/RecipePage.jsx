// RecipePage.jsx
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import Error from "../components/Error";
import StockChart from "../components/StockChart"; // Import the reusable StockChart
import useFetchRecipe from "../hooks/useFetchRecipe";

export default function RecipePage() {
  const { id } = useParams();
  console.log(id);
  const [fetchStockData, { data, loading, error }] = useFetchRecipe();

  useEffect(() => {
    fetchStockData(id); // Fetch the stock or recipe data when ID changes
  }, [id]);

  console.log(data);

  if (loading) return <Loading />;
  if (error) return <Error explanation={error} />;
  if (data?.errors) return <Error explanation="Recipe not found" />;

  // Use sample data if no forecast data is available
  const sampleForecastData = [223.45, 224.9, 226.34, 225.89, 228.5];
  const emaValues = data?.emaValues || sampleForecastData;

  // Generate labels for x-axis (e.g., 'Day 1', 'Day 2', etc.)
  const labels = emaValues.map((_, index) => `Day ${index + 1}`);

  return (
    <div>
      <h1>Stock Forecast for {id}</h1>
      {data && (
        <StockChart
          title={`Stock Forecast for ${id}`} // You can keep title here if needed for styling
          yLabel="Price (USD)"
          labels={labels}  // Pass the labels to StockChart
          dataset={[
            { label: "5-Day Predicted Values", data: emaValues, borderColor: "orange" },  // Only EMA
          ]}
        />
      )}
    </div>
  );
}