import React from "react";
import { useLocation } from "react-router-dom";

const RecipeSingle = () => {
  const location = useLocation();
  const recipe = location.state.data;
  const country = location.state.country;

  return (
    <div>
      <h1 className="recipe-name">{recipe.name}</h1>
      <div className="recipe-container">
        <div className="item-1">
          <div className="flag-container">
            <img src={country.flag} alt={country.name} className="flag" />
          </div>
          <img src={recipe.img} alt={recipe.name} />
        </div>
        <div className="item-2">
          <h2>Description</h2>
          <p>{recipe.desc}</p>
          <h2>Author</h2>
          <p>{recipe.author}</p>
        </div>
        <div className="item-3">
          <h2>Ingredients:</h2>
          {recipe.inc?.map((incName) => {
            return (
              <div className="ingredients" key={incName.incName}>
                {incName.quantity} {incName.incName}
              </div>
            );
          })}
        </div>
        <div className="item-4">
          <h2>Preparation</h2>
          <p>{recipe.inst}</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeSingle;
