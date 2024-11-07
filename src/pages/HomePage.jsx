import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import CardList from "../components/CardList";
import Header from "../components/Header";
import Loading from "../components/Loading";
import useFetchStockData from "../hooks/useFetchStockData";
import Caps from "@/components/Caps";

export default function HomePage() {
  const [fetchStockData, { data, loading, error }] = useFetchStockData();
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (searchTerm) => {
    if (searchTerm) {
      fetchStockData(searchTerm);
    }
    setSearchTerm(searchTerm)
  };

  const filteredData = data.filter((stock) =>
    stock.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="home">
        <Header handleSearch={handleSearch} />
        {loading && data.length === 0 && <Loading />}
        {filteredData.length > 0 && <CardList recipes={filteredData} />}
        {error && <p>{error}</p>}
        <Caps/>
   </div>
  );
}
