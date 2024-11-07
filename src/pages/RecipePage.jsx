import { useEffect } from "react";
import { useParams } from "react-router-dom";
import useFetchRecipe from "../hooks/useFetchRecipe";
import Loading from "../components/Loading";
import Error from "../components/Error";

export default function RecipePage() {
  const { id } = useParams();
  const [fetchStockData, { data, loading, error }] = useFetchRecipe();

  // useEffect(() => {
  //   fetchStockData(id); // Fetch the recipe data when the ID changes
  // }, [id]);

  // if (loading) return <Loading />;
  // if (error) return <h1>{error}</h1>;
  // if (data?.errors) return <Error explanation="Recipe not found" />;

  // // Example of sample stock forecast data (replace with real data if available)
  // const sampleForecastData = [223.45, 224.9, 226.34, 225.89, 228.5];
  // const dataToUse = data?.forecastData || sampleForecastData;

  // // Chart.js data structure
  // const chartData = {
  //   labels: dataToUse.map((_, index) => `Day ${index + 1}`), // Labels for X-axis (Day 1, Day 2, etc.)
  //   datasets: [
  //     {
  //       label: `Stock Forecast for Recipe ID: ${id}`, // Graph title
  //       data: dataToUse, // The actual data (prices) for the graph
  //       borderColor: "rgba(75, 192, 192, 1)", // Line color
  //       backgroundColor: "rgba(75, 192, 192, 0.2)", // Line fill color (optional)
  //       fill: true, // Fill the area under the line
  //     },
  //   ],
  // };

  // // Chart.js options (customize according to your needs)
  // const chartOptions = {
  //   responsive: true,
  //   plugins: {
  //     legend: { position: "top" }, // Position of the legend
  //     tooltip: { enabled: true }, // Show tooltips when hovering over data points
  //   },
  //   scales: {
  //     x: { title: { display: true, text: "Days" } }, // X-axis label
  //     y: { title: { display: true, text: "Price (USD)" } }, // Y-axis label
  //   },
  // };

  // return (
  //   <div>
  //     <h1>Graph Page for {id}</h1>
  //     {data && (
  //       <div>
  //         {/* Render the Line chart here */}
  //         <Line data={chartData} options={chartOptions} />
          
  //         {/* You can render other recipe-related content here */}
  //         {/* For example: */}
  //         {/* <RecipeHeader nutritionalFacts={data.nutrition} name={data.name} /> */}
  //         {/* <RecipeInfo instructions={data.instructions} image={data.thumbnail_url} ingredients={data.sections[0].components} /> */}
  //       </div>
  //     )}
  //   </div>
  // );


  useEffect(() => {
    fetchStockData(id); // Fetch the recipe data when the ID changes
  }, [id]);
  
  if (loading) return <Loading />;
  if (error) return <h1>{error}</h1>;
  if (data?.errors) return <Error explanation="Recipe not found" />;
  
  // Log data to debug
  console.log(data);
  console.log(data?.forecastData);
  
  const sampleForecastData = [223.45, 224.9, 226.34, 225.89, 228.5];
  const dataToUse = data?.forecastData || sampleForecastData;
  
  // Chart.js data structure
  const chartData = {
    labels: dataToUse.map((_, index) => `Day ${index + 1}`),
    datasets: [
      {
        label: `Stock Forecast for Recipe ID: ${id}`,
        data: dataToUse,
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
      },
    ],
  };
  
  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      tooltip: { enabled: true },
    },
    scales: {
      x: { title: { display: true, text: "Days" } },
      y: { title: { display: true, text: "Price (USD)" } },
    },
  };
  
  return (
    <div>
      <h1>Graph Page for {id}</h1>
      {data && (
        <div>
          <Line data={chartData} options={chartOptions} />
        </div>
      )}
    </div>
  );
  
}
