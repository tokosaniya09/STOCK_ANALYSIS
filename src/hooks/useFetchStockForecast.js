// useFetchStockForecast.js
import axios from "axios";
import { useState } from "react";

// Helper function to calculate EMA
const calculateEMA = (prices, period = 10) => {
  const k = 2 / (period + 1);
  const ema = [prices[0]]; // Start EMA with the first price

  for (let i = 1; i < prices.length; i++) {
    ema.push(prices[i] * k + ema[i - 1] * (1 - k));
  }

  return ema;
};

// Function to predict future prices based on EMA
const forecastEMA = (lastEma, numDays) => {
  const forecast = [];
  for (let i = 0; i < numDays; i++) {
    forecast.push(lastEma); // Reuse last EMA as a constant forecast (simplified)
  }
  return forecast;
};

const useFetchStockForecast = () => {
  const [forecastData, setForecastData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Function to fetch historical stock data and calculate EMA forecast
  const fetchStockForecast = async (symbol) => {
    setLoading(true);
    try {
      const response = await axios.get(
        `https://yahoo-finance166.p.rapidapi.com/api/stock/get-price`,
        {
          params: { symbol, region: "US", range: "1mo" },
          headers: {
            "x-rapidapi-key": "afcb8eb4b7msh4924c1eeb4920cdp14af49jsnb91f3e013262",
            "x-rapidapi-host": "yahoo-finance166.p.rapidapi.com",
          },
        }
      );

      const historicalData = response.data.prices.reverse();
      const prices = historicalData.map((entry) => entry.close);

      // Calculate the 10-day EMA on historical prices
      const emaValues = calculateEMA(prices, 10);
      const lastEma = emaValues[emaValues.length - 1];
      const emaForecast = forecastEMA(lastEma, 10); // Predict next 10 days

      setForecastData(emaForecast);
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return [fetchStockForecast, { forecastData, loading, error }];
};

export default useFetchStockForecast;
