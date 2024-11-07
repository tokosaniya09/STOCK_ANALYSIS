import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import CardList from "../components/CardList";
import Header from "../components/Header";
import Loading from "../components/Loading";
import useFetchStockData from "../hooks/useFetchStockData"; 
import useFetchStockForecast from "../hooks/useFetchStockForecast"; 
import Caps from "@/components/Caps";

export default function HomePage() {
  const [fetchStockData, { data, loading, error }] = useFetchStockData();
  // const [fetchStockForecast, { forecastData, loading: loadingForecast, error: forecastError }] = useFetchStockForecast();
  // const [searchParams] = useSearchParams();

  // useEffect(() => {
  //   fetchStockData(); // Call fetchStockData without any parameters
  // }, []);

  const handleSearch = (searchTerm) => {
    if (searchTerm) {
      fetchStockData(searchTerm);
      // fetchStockForecast(searchTerm); // Fetch forecast data as well
    }
  };

  return (
    <>
      <Header handleSearch={handleSearch} />
      {loading && <Loading />}
      {/* {loadingForecast && <Loading />} Show loading for forecast */}
      {data && <CardList recipes={data} />}
      {/* {forecastData.length > 0 && <div>Forecast: {forecastData.join(", ")}</div>} Display forecast */}
      {error && <p>{error}</p>}
      {/* {forecastError && <p>{forecastError}</p>} Show forecast error */}
      <Caps/>
    </>
  );
}
