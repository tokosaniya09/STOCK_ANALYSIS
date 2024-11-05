import axios from "axios";
import { useState, useEffect } from "react";

const stockSymbols = [
  "RELIANCE", "TCS", "HDFCBANK", "INFY", "HINDUNILVR", "ICICIBANK", "SBIN", "KOTAKBANK", "BHARTIARTL", "ITC",
  "HDFC", "BAJFINANCE", "ADANIGREEN", "ADANITRANS", "HCLTECH", "WIPRO", "ASIANPAINT", "ONGC", "DMART", "ULTRACEMCO",
  "AXISBANK", "TATAMOTORS", "LT", "MARUTI", "TITAN", "NTPC", "BAJAJFINSV", "POWERGRID", "INDUSINDBK", "SUNPHARMA",
  "JSWSTEEL", "TATASTEEL", "ADANIPORTS", "DIVISLAB", "NESTLEIND", "HINDALCO", "GRASIM", "BPCL", "HEROMOTOCO", "BAJAJ-AUTO",
  "APOLLOHOSP", "COALINDIA", "BRITANNIA", "TECHM", "VEDL", "M&M", "DRREDDY", "EICHERMOT", "CIPLA", "ICICIPRULI", "MUTHOOTFIN"
];


const useFetchStockData = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to fetch stock data
  const fetchStockData = async () => {
    setLoading(true);
    try {
      const responses = await Promise.all(stockSymbols.map(async (symbol) => {
        const response = await axios.request({
          method: 'GET',
          url: 'https://yahoo-finance166.p.rapidapi.com/api/stock/get-price',
          params: {
            region: 'US',
            symbol: 'AAPL'
          },
          headers: {
            'x-rapidapi-key': '1f90578396msh23e090395fe178dp1a1224jsn46abddb76c39',
            'x-rapidapi-host': 'yahoo-finance166.p.rapidapi.com'
          },
        });

        const stockData = response.data.quoteSummary.result[0].price;

        return {
          name: stockData.shortName,
          price: stockData.regularMarketPrice.raw,
          changePercent: stockData.regularMarketChangePercent.raw,
          regularmarketchange: stockData.regularMarketChange.raw, 
        };
      }));

      setData(responses);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStockData(); 
  }, []);

  return [fetchStockData, { data, loading, error }];
};

export default useFetchStockData;