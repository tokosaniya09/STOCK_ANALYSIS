import axios from "axios";
import { useState, useEffect } from "react";

const stockSymbols = ["AAPL", "GOOGL", "MSFT"]; // Add more stock symbols if needed

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
          method: "GET",
          url: "https://yahoo-finance166.p.rapidapi.com/api/stock/get-price",
          params: { region: "US", symbol },
          headers: {
    'x-rapidapi-key': '34057316f0mshc853487cd4b05ddp1ee002jsn2a56cf7a3022',
    'x-rapidapi-host': 'yahoo-finance166.p.rapidapi.com'
          },
        });

        const stockData = response.data.quoteSummary.result[0].price;

        // Log each piece of data for the current stock symbol
        // console.log(`Company: ${stockData.shortName}`);
        // console.log(`Market Change: ${stockData.regularMarketChange.raw}`);
        // console.log(`Market Change Percent: ${stockData.regularMarketChangePercent.raw}`);
        // console.log(`Regular Market Price: ${stockData.regularMarketPrice.raw}`);
        // console.log('--------------------');

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

  // Use useEffect to call fetchStockData on hook load
  useEffect(() => {
    fetchStockData(); // Fetch data immediately on load
  }, []);

  return [fetchStockData, { data, loading, error }];
};

export default useFetchStockData;







// import axios from "axios";
// import { useState } from "react";

// const options = {
//   method: 'GET',
//   url: 'https://yahoo-finance166.p.rapidapi.com/api/stock/get-price',
//   params: {
//     region: 'US',
//     symbol: 'AAPL'
//   },
//   headers: {
//     'x-rapidapi-key': 'afcb8eb4b7msh4924c1eeb4920cdp14af49jsnb91f3e013262',
//     'x-rapidapi-host': 'yahoo-finance166.p.rapidapi.com'
//   }
// };

// // try {
// // 	const response = await axios.request(options);
// // 	console.log(response.data);
// // } catch (error) {
// // 	console.error(error);
// // }

// const useFetchRecipes = () => {
//   const [recipes, setRecipes] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const fetchRecipes = async (searchTerm) => {
//     setLoading(true);
//     setRecipes(null);
//     setError(null);
//     try {
//       const reqOptions = { ...options };
//       if (searchTerm) {
//         reqOptions.params.q = searchTerm;
//       }
//       const response = await axios.request(reqOptions);

//       // console.log(response.data.quoteSummary.result[0].price.shortName);
//       // console.log(response.data.quoteSummary.result[0].price.regularMarketChange.raw);
//       // console.log(response.data.quoteSummary.result[0].price.regularMarketChangePercent.raw);
//       // console.log(response.data.quoteSummary.result[0].price.regularMarketPrice.raw);
//       // console.log(response.data.quoteSummary.result[1].price.shortName);
//       // console.log(response.data.quoteSummary.result[1].price.regularMarketChange.raw);
//       // console.log(response.data.quoteSummary.result[1].price.regularMarketChangePercent.raw);
//       // console.log(response.data.quoteSummary.result[1].price.regularMarketPrice.raw);
      
//       console.log(response.data);
//       // console.log("happy");
//       // setRecipes(response.data.listed);
//       setLoading(false);
//     } catch (err) {
//       setError(err.message);
//       setLoading(false);
//     }
//   };

//   return [fetchRecipes, { data : recipes, loading, error }];
// };

// export default useFetchRecipes;