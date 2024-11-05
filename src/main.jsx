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
import Ingredients from "./components/Ingredient.jsx";
import Instructions from "./components/Instruction.jsx";
import StockInfo from "./components/StockInfo.jsx";
import "./index.css";
import { ClerkProvider } from '@clerk/clerk-react'


const PUBLISHABLE_KEY = import.meta.env.VITE_CLERK_PUBLISHABLE_KEY

if (!PUBLISHABLE_KEY) {
  throw new Error('Add your Clerk publishable key to the .env.local file')
}

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />} errorElement={<ErrorPage />}>
      <Route path="/" element={<HomePage />} />
      <Route path="/about" element={<AboutPage />} />
      <Route path="/stockinfo" element={<StockInfo />} />
      <Route path="/recipe/:id" element={<RecipePage />}>
        <Route path="/recipe/:id/ingredients" element={<Ingredients />} />
        <Route path="/recipe/:id/instructions" element={<Instructions />} />
      </Route>
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ClerkProvider
      appearance={{
        baseTheme: 'dark'
      }}
      publishableKey={PUBLISHABLE_KEY}
      afterSignOutUrl="/"
      showname="true"
    >
      <RouterProvider router={router}>
        <App />
      </RouterProvider>
    </ClerkProvider>
  </React.StrictMode>
)