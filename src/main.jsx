// import React from "react";
// import ReactDOM from "react-dom/client";
// import {
//   RouterProvider,
//   Route,
//   createBrowserRouter,
//   createRoutesFromElements,
// } from "react-router-dom";
// import App from "./App.jsx";
// import AboutPage from "./pages/AboutPage";
// import HomePage from "./pages/HomePage";
// import RecipePage from "./pages/RecipePage";
// import ErrorPage from "./pages/ErrorPage.jsx";
// import Ingredients from "./components/Ingredient.jsx";
// import Instructions from "./components/Instruction.jsx";
// import "./index.css";

// const router = createBrowserRouter(
//   createRoutesFromElements(
//     <Route path="/" element={<App />} errorElement={<ErrorPage />}>
//       <Route path="/" element={<HomePage />} />
//       <Route path="/about" element={<AboutPage />} />
//       <Route path="/recipe/:id" element={<RecipePage />}>
//         <Route path="/recipe/:id/ingredients" element={<Ingredients />} />
//         <Route path="/recipe/:id/instructions" element={<Instructions />} />
//       </Route>
//     </Route>
//   )
// );

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <RouterProvider router={router} />
// );

import React from "react";
import ReactDOM from "react-dom/client";
import {
  RouterProvider,
  Route,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import App from "./App.jsx";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import RecipePage from "./pages/RecipePage";
import ErrorPage from "./pages/ErrorPage.jsx";
import StockInfo from "./components/StockInfo"; // Import StockInfo component
import Ingredients from "./components/Ingredient.jsx";
import Instructions from "./components/Instruction.jsx";
import "./index.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorPage />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/stockinfo" element={<StockInfo />} /> {/* Add StockInfo route */}
      <Route path="/recipe/:id" element={<RecipePage />}>
        <Route path="/recipe/:id/ingredients" element={<Ingredients />} />
        <Route path="/recipe/:id/instructions" element={<Instructions />} />
      </Route>
      <Route path="*" element={<ErrorPage />} /> {/* Catch-all for unknown routes */}
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
