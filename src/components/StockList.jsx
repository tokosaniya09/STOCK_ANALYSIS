import React from "react";
import useFetchStockData from "./useFetchStockData"; 
import Card from "./Card"; 

export default function StockList() {
  const [fetchStockData, { data, loading }] = useFetchStockData();

  if (loading) return <p>Loading...</p>;

  return (
    <div className="stock-list">
      {data.map((stock, index) => (
        <Card key={index} recipe={stock} />
      ))}
    </div>
  );
}
