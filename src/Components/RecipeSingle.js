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
        <div className="left-container">
          f */}
          <img src={recipe.img} alt={recipe.name} />
          <h2>Ingredients:</h2>
          {recipe.inc?.map((incName) => {
            return (
              <div className="ingredients" key={incName.incName}>
                {incName.quantity} {incName.incName}
              </div>
            );
          })}
        </div>

        <div className="right-container">
          <h2>Description</h2>
          <p>{recipe.desc}</p>
          <h2>Author</h2>
          <p>{recipe.author}</p>
          <h2>Preparation</h2>
          <p>{recipe.inst}</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeSingle;
