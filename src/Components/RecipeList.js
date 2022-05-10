import React from "react";
import RecipeCard from "./RecipeCard";

const RecipeList = () => {
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
