import React from "react";
import Layout from "./pages/Layout";
import RecipeList from "./Components/RecipeList";
import AddRecipe from "./Components/AddRecipe";
import { BrowserRouter, Routes, Route, useParams } from "react-router-dom";
import Home from "./Components/Home";
import "./App.css";
import RecipeSingle from "./Components/RecipeSingle";

const RouterWrapper = (props) => {
  const params = useParams();
  return <RecipeSingle params={params} {...props} />;
};

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="recipelist" element={<RecipeList />} />
          <Route path="recipelist/:recipesingle" element={<RouterWrapper />} />
          <Route path="addrecipe" element={<AddRecipe />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
