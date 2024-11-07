// // useFetchRecipe.js
// import axios from "axios";
// import { useReducer } from "react";

// const options = {
//   method: "GET",
//   url: "https://tasty.p.rapidapi.com/recipes/get-more-info",
//   headers: {
//     "x-rapidapi-key": "15f88f2c43msh9c5419a49922a46p10fdc8jsn9ea437a15245",
//     "x-rapidapi-host": "yahoo-finance166.p.rapidapi.com",
//   },
// };

// const initialState = {
//   data: null,
//   loading: false,
//   error: null,
// };

// const Action = {
//   FETCHING_DATA: "FETCHING_DATA",
//   FETCH_SUCCESSFUL: "FETCH_SUCCESSFUL",
//   FETCH_ERROR: "FETCH_ERROR",
// };

// const reducer = (_, action) => {
//   switch (action.type) {
//     case Action.FETCHING_DATA:
//       return { data: null, error: null, loading: true };
//     case Action.FETCH_SUCCESSFUL:
//       return { error: null, loading: false, data: action.payload };
//     case Action.FETCH_ERROR:
//       return { error: action.payload, data: null, loading: false };
//     default:
//       return initialState;
//   }
// };

// // EMA calculation function
// function calculateEMA(data, period) {
//   const k = 2 / (period + 1);
//   let emaArray = [data[0]]; // Start EMA with the first price as the initial EMA

//   for (let i = 1; i < data.length; i++) {
//     emaArray.push(data[i] * k + emaArray[i - 1] * (1 - k));
//   }

//   return emaArray;
// }

// const useFetchRecipe = () => {
//   const [{ data, loading, error }, dispatch] = useReducer(reducer, initialState);

//   const fetchRecipe = async (id) => {
//     dispatch({ type: Action.FETCHING_DATA });
//     try {
//       const reqOptions = { ...options, params: { id } };
//       const response = await axios.request(reqOptions);

//       const prices = response.data.prices; // Assume `prices` is an array of historical prices
//       const emaValues = calculateEMA(prices, 10); // Calculate 10-day EMA

//       dispatch({
//         type: Action.FETCH_SUCCESSFUL,
//         payload: { ...response.data, prices, emaValues },
//       });
//     } catch (err) {
//       dispatch({ type: Action.FETCH_ERROR, payload: err.message });
//     }
//   };

//   return [fetchRecipe, { data, loading, error }];
// };

// export default useFetchRecipe;

import axios from "axios";
import { useReducer } from "react";

// Stock data as an array of objects (represents the stock data)
const stockData = [
  { name: "Apple Inc.", symbol: "AAPL", price: 223.45, changePercent: 0.0064862054, regularmarketchange: 1.4400024, prices: [223.45, 228.5, 225.89, 224.9, 226.34] },
  { name: "Microsoft Corporation", symbol: "MSFT", price: 411.46, changePercent: 0.007344661, regularmarketchange: 3, prices: [430.5, 432.75, 435.0, 425.0, 431.46] },
  { name: "Alphabet Inc.", symbol: "GOOG", price: 169.74, changePercent: 0.0029543843, regularmarketchange: 0.5, prices: [169.74, 173.6, 170.2, 171.5, 172.8] },
  { name: "Amazon.Com, Inc.", symbol: "AMZN", price: 199.5, changePercent: 0.019000925, regularmarketchange: 3.7200012, prices: [198.1, 202.1, 199.5, 200.4, 200.2] },
  { name: "Tesla, Inc.", symbol: "TSLA", price: 251.44, changePercent: 0.03541429, regularmarketchange: 8.600006, prices: [250.0, 251.0, 251.5, 253.0, 253.6] },
  { name: "Meta Platforms, Inc.", symbol: "META", price: 572.43, changePercent: 0.020956695, regularmarketchange: 11.75, prices: [571.2, 570.0, 574.8, 575.1, 575.1] },
  { name: "NVIDIA Corporation", symbol: "NVDA", price: 139.91, changePercent: 0.028371925, regularmarketchange: 3.8600006, prices: [141.8, 142.5, 141.2, 141.5, 141.9] },
  { name: "Netflix, Inc.", symbol: "NFLX", price: 763.91, changePercent: 0.011118269, regularmarketchange: 8.399963, prices: [769.5, 770.5, 771.91, 770.0, 770.0] },
  { name: "Intel Corporation", symbol: "INTC", price: 23.32, changePercent: 0.035523944, regularmarketchange: 0.79999924, prices: [23.0, 23.5, 22.3, 22.91, 23.5] },
  { name: "Advanced Micro Devices, Inc.", symbol: "AMD", price: 141.66, changePercent: 0.0067514526, regularmarketchange: 0.94999695, prices: [142.0, 142.0, 141.5, 141.0, 142.9] },
  { name: "Alibaba Group Holding Limited", symbol: "BABA", price: 100.21, changePercent: 0.00823168, regularmarketchange: 0.809998, prices: [102.0, 100.0, 100.0, 101.1, 101.9] },
  { name: "SPDR S&P 500", symbol: "SPY", price: 576.7, changePercent: 0.0120918, regularmarketchange: 6.89001, prices: [578.5, 580.0, 581.0, 581.5, 582.5] },
  { name: "Visa Inc.", symbol: "V", price: 293.29, changePercent: 0.00493405, regularmarketchange: 1.44, prices: [295.0, 294.5, 293.0, 294.5, 293.5] },
  { name: "Walt Disney Company (The)", symbol: "DIS", price: 96.63, changePercent: 0.008769141, regularmarketchange: 0.839996, prices: [97.5, 96.0, 98.0, 98.5, 98.6] },
];





// Initial state for the reducer
const initialState = {
  data: null,
  loading: false,
  error: null,
};

// Action types
const Action = {
  FETCHING_DATA: "FETCHING_DATA",
  FETCH_SUCCESSFUL: "FETCH_SUCCESSFUL",
  FETCH_ERROR: "FETCH_ERROR",
};

// Reducer function to handle loading states and data updates
const reducer = (_, action) => {
  switch (action.type) {
    case Action.FETCHING_DATA:
      return { data: null, error: null, loading: true };
    case Action.FETCH_SUCCESSFUL:
      return { error: null, loading: false, data: action.payload };
    case Action.FETCH_ERROR:
      return { error: action.payload, data: null, loading: false };
    default:
      return initialState;
  }
};

// EMA calculation function
function calculateEMA(data, period) {
  const k = 2 / (period + 1);
  let emaArray = [data[0]]; // Start EMA with the first price as the initial EMA

  for (let i = 1; i < data.length; i++) {
    emaArray.push(data[i] * k + emaArray[i - 1] * (1 - k));
  }

  return emaArray;
}

const useFetchRecipe = () => {
  const [{ data, loading, error }, dispatch] = useReducer(reducer, initialState);

  // Fetch stock data by stock symbol
  const fetchRecipe = async (id) => {
    dispatch({ type: Action.FETCHING_DATA });
    try {
      // Find the stock by name (case-insensitive comparison)
      const stock = stockData.find((stock) =>
        stock.name.toLowerCase().trim() === id.toLowerCase().trim()
      );
  
      if (!stock) {
        throw new Error("Stock not found");
      }
  
      // Calculate the EMA values based on historical prices
      const emaValues = calculateEMA(stock.prices, 10); // 10-day EMA
  
      // Dispatch successful data fetch
      dispatch({
        type: Action.FETCH_SUCCESSFUL,
        payload: { ...stock, emaValues },
      });
    } catch (err) {
      dispatch({ type: Action.FETCH_ERROR, payload: err.message });
    }
  };
  

  console.log("****", data);

  return [fetchRecipe, { data, loading, error }];
};

export default useFetchRecipe;
