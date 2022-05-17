import React from "react";
import { useLocation } from "react-router-dom";

const RecipeSingle = () => {
  const location = useLocation();
  const recipe = location.state.data;
  const country = location.state.country;

  return (
    <div className="recipe-container">
      <h1>{recipe.name}</h1>
      <div className="recipe-intro">
        <img src={recipe.img} alt={recipe.name} />
        <img src={country.flag} alt={country.name} />
        <p>Some intro description comes here</p>
      </div>
      <div className="ingredients">
        <h2>Ingredients</h2>
        <div>
          <tb>
            <tr>2dl - milk</tr>
            <tr>2dl - flour</tr>
            <tr>2 - egg</tr>
          </tb>
        </div>
        <div className="instructions">
          <h2>Preparation</h2>
          <p>Intructions will come here</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeSingle;
