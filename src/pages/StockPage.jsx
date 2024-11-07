import { useEffect } from "react";
import { useParams } from "react-router-dom";
import Loading from "../components/Loading";
import Error from "../components/Error";
import StockChart from "../components/StockChart"; 
import useFetchStock from "../hooks/useFetchStock";

export default function StockPage() {
  const { id } = useParams();
  console.log(id);
  const [fetchStockData, { data, loading, error }] = useFetchStock();

  useEffect(() => {
    fetchStockData(id); 
  }, [id]);

  console.log(data);

  if (loading) return <Loading />;
  if (error) return <Error explanation={error} />;
  if (data?.errors) return <Error explanation="Recipe not found" />;

  const sampleForecastData = [223.45, 224.9, 226.34, 225.89, 228.5];
  const emaValues = data?.emaValues || sampleForecastData;

  const labels = emaValues.map((_, index) => `Day ${index + 1}`);

  return (
    <div>
      <h1>Stock Forecast for {id}</h1>
      {data && (
        <StockChart
          title={`Stock Forecast for ${id}`} 
          yLabel="Price (USD)"
          labels={labels} 
          dataset={[
            { label: "5-Day Predicted Values", data: emaValues, borderColor: "orange" }, 
          ]}
        />
      )}
    </div>
  );
}