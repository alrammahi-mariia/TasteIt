import React, { useState, useEffect } from "react";
import axios from "axios";
import RecipeCard from "./RecipeCard";

const RecipeList = () => {
  const [recipies, setRecipies] = useState([]);
  const [countries, setCountries] = useState([]);
  const [loading, setLoading] = useState(false);

  const getRecipes = () => axios.get("http://localhost:3001/recipies");
  const getCountries = () => axios.get("https://restcountries.com/v2/all");

  useEffect(() => {
    setLoading(true);
    Promise.all([getRecipes(), getCountries()]).then(function (results) {
      const recipesData = results[0];
      const countriesData = results[1]; // because countries starts from first index

      setRecipies(recipesData.data);
      setCountries(countriesData.data);

      setLoading(false);
    });
  }, []);

  // conditional rendering
  if (loading) {
    return <p>Loading</p>;
  }

  return (
    <div>
      <div className="search-container">
        <label>Search for recipe:</label>
        <input type="text"></input>
      </div>
      <div className="recipes-container">
        <h2>Our recipes</h2>
        <div className="recipes-cards">
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
          <RecipeCard />
        </div>
      </div>
    </div>
  );
};

export default RecipeList;
