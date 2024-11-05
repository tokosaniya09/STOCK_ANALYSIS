import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import CardList from "../components/CardList";
import Header from "../components/Header";
import Loading from "../components/Loading";
import useFetchStockData from "../hooks/useFetchStockData"; 

export default function HomePage() {
  const [fetchStockData, { data, loading, error }] = useFetchStockData();
  const [searchParams] = useSearchParams();
  // console.log("data", data);
  useEffect(() => {
    fetchStockData(); // Call fetchStockData without any parameters
  }, []);

  const handleSearch = (searchTerm) => {
    if (searchTerm) {
      fetchStockData(searchTerm);
    }
  };

  return (
    <>
      <Header handleSearch={handleSearch} />
      {loading && <Loading />}
      {/* console.log("data", {data}); */}
      {data && <CardList recipes={data} />}
      {error && <p>{error}</p>}
    </>
  );
}
