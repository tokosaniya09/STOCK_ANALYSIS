// // import { useEffect } from "react";
// // import { useSearchParams } from "react-router-dom";
// // import CardList from "../components/CardList";
// // import Header from "../components/Header";
// // import Loading from "../components/Loading";
// // import useFetchStockData from "../hooks/useFetchStockData"; 
// // import useFetchStockForecast from "../hooks/useFetchStockForecast"; 
// // import Caps from "@/components/Caps";

// // export default function HomePage() {
// //   const [fetchStockData, { data, loading, error }] = useFetchStockData();
// //   const [fetchStockForecast, { forecastData, loading: loadingForecast, error: forecastError }] = useFetchStockForecast();
// //   const [searchParams] = useSearchParams();

// //   useEffect(() => {
// //     fetchStockData(); // Call fetchStockData without any parameters
// //   }, []);

// //   const handleSearch = (searchTerm) => {
// //     if (searchTerm) {
// //       fetchStockData(searchTerm);
// //       fetchStockForecast(searchTerm); // Fetch forecast data as well
// //     }
// //   };

// //   return (
// //     <>
// //       <Header handleSearch={handleSearch} />
// //       {loading && <Loading />}
// //       {loadingForecast && <Loading />} {/* Show loading for forecast */}
// //       {data && <CardList recipes={data} />}
// //       {forecastData.length > 0 && <div>Forecast: {forecastData.join(", ")}</div>} {/* Display forecast */}
// //       {error && <p>{error}</p>}
// //       {forecastError && <p>{forecastError}</p>} {/* Show forecast error */}
// //       <Caps/>
// //     </>
// //   );
// // }




// import { useState, useEffect } from "react";
// import { useSearchParams } from "react-router-dom";
// import CardList from "../components/CardList";
// import Header from "../components/Header";
// import Loading from "../components/Loading";
// import useFetchStockData from "../hooks/useFetchStockData";
// import useFetchStockForecast from "../hooks/useFetchStockForecast";
// import Caps from "@/components/Caps";

// export default function HomePage() {
//   const [fetchStockData, { data, loading, error }] = useFetchStockData();
//   const [fetchStockForecast, { forecastData, loading: loadingForecast, error: forecastError }] = useFetchStockForecast();
//   const [searchParams] = useSearchParams();
//   const [searchTerm, setSearchTerm] = useState("");

//   useEffect(() => {
//     fetchStockData(); // Fetch initial stock data
//   }, []);

//   const handleSearch = (searchTerm) => {
//     setSearchTerm(searchTerm); // Update the search term state
//     fetchStockForecast(searchTerm); // Fetch forecast data as well
//   };

//   // Filter data based on the search term
//   const filteredData = data.filter((stock) =>
//     stock.name.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <>
//       <div className="home">
//         <Header handleSearch={handleSearch} />
//         {loading && <Loading />}
//         {loadingForecast && <Loading />}
//         {filteredData.length > 0 && <CardList recipes={filteredData} />}
//         {forecastData.length > 0 && <div>Forecast: {forecastData.join(", ")}</div>}
//         {error && <p>{error}</p>}
//         {forecastError && <p>{forecastError}</p>}
//         <Caps/>
//       </div>
//     </>
//   );
// }


import { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import CardList from "../components/CardList";
import Header from "../components/Header";
import Loading from "../components/Loading";
import useFetchStockData from "../hooks/useFetchStockData";
import useFetchStockForecast from "../hooks/useFetchStockForecast";
import Caps from "@/components/Caps";

export default function HomePage() {
  const [fetchStockData, { data, loading, error }] = useFetchStockData();
  const [fetchStockForecast, { forecastData, loading: loadingForecast, error: forecastError }] = useFetchStockForecast();
  const [searchParams] = useSearchParams();
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    fetchStockData(); // Fetch initial stock data
  }, []);

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm); // Update the search term state
    fetchStockForecast(searchTerm); // Fetch forecast data as well
  };

  // Filter data based on the search term
  const filteredData = data.filter((stock) =>
    stock.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
      <div className="home">
        <Header handleSearch={handleSearch} />
        {loading && data.length === 0 && <Loading />} {/* Show Loading only if no data is loaded */}
        {loadingForecast && <Loading />} {/* Loading for forecast */}
        {filteredData.length > 0 && <CardList recipes={filteredData} />}
        {forecastData.length > 0 && <div>Forecast: {forecastData.join(", ")}</div>}
        {error && <p>{error}</p>}
        {forecastError && <p>{forecastError}</p>}
        <Caps/>
      </div>
    </>
  );
}
