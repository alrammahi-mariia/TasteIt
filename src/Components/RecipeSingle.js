import React from "react";
import { useLocation } from "react-router-dom";

const RecipeSingle = () => {
  const location = useLocation();
  const data = location.state.data;
  const country = location.state.country;

  return (
    <div className="recipe-container">
      <h1>{data.name}</h1>
      <div className="recipe-intro">
        <img src={data.img} alt={data.name} />
        <img src={country.flag} alt={country.name} />
        <h2>Description</h2>
        <p>{data.description}</p>
        <h2>Author</h2>
        <p>{data.author}</p>
      </div>
      <div className="ingredients">
        <h2>Ingredients:</h2>
        {data.ingredients?.map((ingredient) => {
          return (
            <div className="" key={ingredient.ingredient}>
              {ingredient.quantity} {ingredient.ingredient}
            </div>
          );
        })}
      </div>
      <div className="instructions">
        <h2>Preparation</h2>
        <p>{data.instructions}</p>
      </div>
    </div>
  );
};

export default RecipeSingle;
