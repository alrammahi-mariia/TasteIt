import React from "react";

const RecipeSingle = () => {
  return (
    <div className="recipe-container">
      <h1>Pizza</h1>
      <div className="recipe-intro">
        <img src="./pizza.jpeg" alt=""></img>
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
