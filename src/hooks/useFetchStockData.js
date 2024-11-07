// import axios from "axios";
// import { useState, useEffect } from "react";

// // const stockSymbols = ["AAPL", "GOOGL", "MSFT", "AMZN", "TSLA", "META", "NVDA", "NFLX", "INTC", "AMD", "BABA", "SPY", "V", "DIS"];
//  // Add more stock symbols if needed

// const useFetchStockData = () => {
//   const [data, setData] = useState([]);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   // Function to fetch stock data
//   const fetchStockData = async () => {
//     setLoading(true);
//     try {
//       const responses = await Promise.all(stockSymbols.map(async (symbol) => {
//         const response = await axios.request({
//           method: "GET",
//           url: "https://yahoo-finance166.p.rapidapi.com/api/stock/get-price",
//           params: { region: "US", symbol },
//           headers: {
//             'x-rapidapi-key': '23ab8f6604msh7564f848cdb6266p15162djsna5c89e14cd04',
//             'x-rapidapi-host': 'yahoo-finance166.p.rapidapi.com'
//           },
//         });

//         const stockData = response.data.quoteSummary.result[0].price;

//         // Log each piece of data for the current stock symbol
//         // console.log(Company: ${stockData.shortName});
//         // console.log(Market Change: ${stockData.regularMarketChange.raw});
//         // console.log(Market Change Percent: ${stockData.regularMarketChangePercent.raw});
//         // console.log(Regular Market Price: ${stockData.regularMarketPrice.raw});
//         // console.log('--------------------');

//         return {
//           name: stockData.shortName,
//           price: stockData.regularMarketPrice.raw,
//           changePercent: stockData.regularMarketChangePercent.raw,
//           regularmarketchange: stockData.regularMarketChange.raw, 
//         };
//       }));
//       setData(responses);
//     } catch (err) {
//       setError(err.message);
//     } finally {
//       setLoading(false);
//     }
//   };

//   // Use useEffect to call fetchStockData on hook load
//   useEffect(() => {
//     fetchStockData(); // Fetch data immediately on load
//   }, []);

//   return [fetchStockData, { data, loading, error }];
// };

// export default useFetchStockData;







// // import axios from "axios";
// // import { useState } from "react";

// // const options = {
// //   method: 'GET',
// //   url: 'https://yahoo-finance166.p.rapidapi.com/api/stock/get-price',
// //   params: {
// //     region: 'US',
// //     symbol: 'AAPL'
// //   },
// //   headers: {
// //     'x-rapidapi-key': 'afcb8eb4b7msh4924c1eeb4920cdp14af49jsnb91f3e013262',
// //     'x-rapidapi-host': 'yahoo-finance166.p.rapidapi.com'
// //   }
// // };

// // // try {
// // // 	const response = await axios.request(options);
// // // 	console.log(response.data);
// // // } catch (error) {
// // // 	console.error(error);
// // // }

// // const useFetchRecipes = () => {
// //   const [recipes, setRecipes] = useState(null);
// //   const [loading, setLoading] = useState(false);
// //   const [error, setError] = useState(null);

// //   const fetchRecipes = async (searchTerm) => {
// //     setLoading(true);
// //     setRecipes(null);
// //     setError(null);
// //     try {
// //       const reqOptions = { ...options };
// //       if (searchTerm) {
// //         reqOptions.params.q = searchTerm;
// //       }
// //       const response = await axios.request(reqOptions);

// //       // console.log(response.data.quoteSummary.result[0].price.shortName);
// //       // console.log(response.data.quoteSummary.result[0].price.regularMarketChange.raw);
// //       // console.log(response.data.quoteSummary.result[0].price.regularMarketChangePercent.raw);
// //       // console.log(response.data.quoteSummary.result[0].price.regularMarketPrice.raw);
// //       // console.log(response.data.quoteSummary.result[1].price.shortName);
// //       // console.log(response.data.quoteSummary.result[1].price.regularMarketChange.raw);
// //       // console.log(response.data.quoteSummary.result[1].price.regularMarketChangePercent.raw);
// //       // console.log(response.data.quoteSummary.result[1].price.regularMarketPrice.raw);
      
// //       console.log(response.data);
// //       // console.log("happy");
// //       // setRecipes(response.data.listed);
// //       setLoading(false);
// //     } catch (err) {
// //       setError(err.message);
// //       setLoading(false);
// //     }
// //   };

// //   return [fetchRecipes, { data : recipes, loading, error }];
// // };

// // export default useFetchRecipes;

// important is above don't delete it

























import { useState, useEffect } from "react";

const stockData = [
  { name: "Apple Inc.", price: 223.45, changePercent: 0.0064862054, regularmarketchange: 1.4400024 },
  { name: "Alphabet Inc.", price: 169.74, changePercent: 0.0029543843, regularmarketchange: 0.5 },
  { name: "Microsoft Corporation", price: 411.46, changePercent: 0.007344661, regularmarketchange: 3 },
  { name: "Amazon.Com, Inc.", price: 199.5, changePercent: 0.019000925, regularmarketchange: 3.7200012 },
  { name: "Tesla, Inc.", price: 251.44, changePercent: 0.03541429, regularmarketchange: 8.600006 },
  { name: "Meta Platforms, Inc.", price: 572.43, changePercent: 0.020956695, regularmarketchange: 11.75 },
  { name: "NVIDIA Corporation", price: 139.91, changePercent: 0.028371925, regularmarketchange: 3.8600006 },
  { name: "Netflix, Inc.", price: 763.91, changePercent: 0.011118269, regularmarketchange: 8.399963 },
  { name: "Intel Corporation", price: 23.32, changePercent: 0.035523944, regularmarketchange: 0.79999924 },
  { name: "Advanced Micro Devices, Inc.", price: 141.66, changePercent: 0.0067514526, regularmarketchange: 0.94999695 },
  { name: "Alibaba Group Holding Limited", price: 99.21, changePercent: 0.00823168, regularmarketchange: 0.809998 },
  { name: "SPDR S&P 500", price: 576.7, changePercent: 0.0120918, regularmarketchange: 6.89001 },
  { name: "Visa Inc.", price: 293.29, changePercent: 0.00493405, regularmarketchange: 1.44 },
  { name: "Walt Disney Company (The)", price: 96.63, changePercent: 0.008769141, regularmarketchange: 0.839996 },
];

const useFetchStockData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  // const [error, setError] = useState(null);

  // Function to simulate fetching stock data
  const fetchStockData = async () => {
    setLoading(true);
    try {
      // Simulate a delay, then set data to the local array
      await new Promise((resolve) => setTimeout(resolve, 500));
      setData(stockData);
    } catch (err) {
      setError("Failed to load data");
    } finally {
      setLoading(false);
    }
  };

  // Use useEffect to call fetchStockData on hook load
  useEffect(() => {
    fetchStockData(); // Fetch data immediately on load
  }, []);

  return [fetchStockData, { data, loading }];
};

export default useFetchStockData;
