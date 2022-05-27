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
        <h2>Description</h2>
        <p>{recipe.description}</p>
        <h2>Author</h2>
        <p>{recipe.author}</p>
      </div>
      <div className="ingredients">
        <h2>Ingredients:</h2>
        {recipe.ingredients?.map((ingredient) => {
          return (
            <div className="" key={recipe.ingredient}>
              {recipe.quantity} {recipe.ingredient}
            </div>
          );
        })}
      </div>
      <div className="instructions">
        <h2>Preparation</h2>
        <p>{recipe.instructions}</p>
      </div>
    </div>
  );
};

export default RecipeSingle;
