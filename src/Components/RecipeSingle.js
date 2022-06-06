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
          {/* <div className="flag-container">
            <img src={country.flag} alt={country.name} className="flag" />
          </div> */}
          <img src={recipe.img} alt={recipe.name} />
        </div>
        <div className="item-2">
          <h2>Description</h2>
          <p>{recipe.description}</p>
          <h2>Author</h2>
          <p>{recipe.author}</p>
          <h2>Country</h2>
          {/* <p>{country.name}</p> */}
        </div>
        <div className="item-3">
          <h2>Ingredients:</h2>
          {recipe.ingr.map((inSingle) => {
            return (
              <div className="ingredients" key={inSingle.inSingle}>
                {inSingle.quantity} {inSingle.inSingle}
              </div>
            );
          })}
        </div>
        <div className="item-4">
          <h2>Preparation</h2>
          <p>{recipe.instruction}</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeSingle;
