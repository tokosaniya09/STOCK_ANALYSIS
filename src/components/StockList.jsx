import React from "react";
import useFetchStockData from "./useFetchStockData"; // Adjust path as necessary
import Card from "./Card"; // Adjust path as necessary

export default function StockList() {
  const [fetchStockData, { data, loading }] = useFetchStockData();

  if (loading) return <p>Loading...</p>;
  // if (error) return <p>Error: {error}</p>;

  return (
    <div className="stock-list">
      {data.map((stock, index) => (
        <Card key={index} recipe={stock} />
      ))}
    </div>
  );
}
