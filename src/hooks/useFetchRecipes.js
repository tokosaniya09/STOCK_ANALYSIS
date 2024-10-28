import axios from "axios";
import { useState } from "react";

// const options = {
//   method: "GET",
//   url: "https://tasty.p.rapidapi.com/recipes/list",
//   params: {
//     from: "0",
//     size: "20",
//   },
//   headers: {
//     "X-RapidAPI-Key": "30b594a022mshc657030b09147dcp153ad1jsn8b9a863a5527",
//     "X-RapidAPI-Host": "tasty.p.rapidapi.com",
//   },
// };

const options = {
  method: 'GET',
  url: 'https://indian-stock-exchange-api2.p.rapidapi.com/ipo',
  headers: {
    'x-rapidapi-key': '76be299fdamshe88f18fb61b599fp15765bjsnacefc41ffcdb',
    'x-rapidapi-host': 'indian-stock-exchange-api2.p.rapidapi.com'
  }
};

const useFetchRecipes = () => {
  const [recipes, setRecipes] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const fetchRecipes = async (searchTerm) => {
    setLoading(true);
    setRecipes(null);
    setError(null);
    try {
      const reqOptions = { ...options };
      if (searchTerm) {
        reqOptions.params.q = searchTerm;
      }
      const response = await axios.request(reqOptions);
      console.log(response.data.listed);
      setRecipes(response.data.listed);
      setLoading(false);
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  return [fetchRecipes, { data : recipes, loading, error }];
};

export default useFetchRecipes;