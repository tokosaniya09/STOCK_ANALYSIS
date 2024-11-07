// import React, { useEffect } from "react";
// import { useParams } from "react-router-dom";
// import Loading from "../components/Loading";
// import Error from "../components/Error";
// import useFetchRecipe from "../hooks/useFetchRecipe"; // Use updated hook
// import StockChart from "../components/StockChart"; // Import the StockChart component

// const StockForecastPage = () => {
//   const { symbol } = useParams(); // Extract stock symbol from URL
//   const [fetchRecipe, { data, loading, error }] = useFetchRecipe();

//   useEffect(() => {
//     if (symbol) {
//       fetchRecipe(symbol); // Fetch data for the selected stock
//     }
//   }, [symbol, fetchRecipe]);

//   if (loading) return <Loading />; // Show loading spinner while data is fetched
//   if (error) return <Error explanation={error} />; // Show error if fetching fails

//   if (data) {
//     const { name, prices, emaValues } = data;

//     const chartDataset = [
//       {
//         label: "Actual Price",
//         data: prices,
//         borderColor: "yellow",
//       },
//       {
//         label: "10-Day EMA",
//         data: emaValues,
//         borderColor: "blue",
//       },
//     ];

//     const chartLabels = Array.from({ length: prices.length }, (_, i) => `Day ${i + 1}`);

//     return (
//       <div>
//         <h1>Stock Forecast for {name}</h1>
//         <StockChart
//           labels={chartLabels}
//           dataset={chartDataset}
//           yLabel="Price (USD)"
//         />
//       </div>
//     );
//   }

//   return null;
// };

// export default StockForecastPage;
