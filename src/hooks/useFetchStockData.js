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

  const fetchStockData = async () => {
    setLoading(true);
    try {
      await new Promise((resolve) => setTimeout(resolve, 500));
      setData(stockData);
    } catch (err) {
      setError("Failed to load data");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchStockData(); 
  }, []);

  return [fetchStockData, { data, loading }];
};

export default useFetchStockData;
