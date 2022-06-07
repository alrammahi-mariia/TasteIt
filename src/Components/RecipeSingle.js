import React from "react";
import { useLocation } from "react-router-dom";

const RecipeSingle = () => {
  const location = useLocation();
  const data = location.state.data;

  return (
    <div>
      <h1 className="recipe-name">{data.name}</h1>
      <div className="recipe-container">
        <div className="item-1">
          <div className="flag-container">
            <img src={data.flag} alt="" className="flag" />
          </div>
          <img src={data.img} alt={data.name} />
        </div>
        <div className="item-2">
          <h2>Description</h2>
          <p>{data.description}</p>
          <h2>Author</h2>
          <p>{data.author}</p>
          <h2>Country</h2>
          <p>{data.country}</p>
        </div>
        <div className="item-3">
          <h2>Ingredients:</h2>
          {data.ingr.map((inSingle) => {
            return (
              <div className="ingredients" key={inSingle.inSingle}>
                {inSingle.quantity} {inSingle.inSingle}
              </div>
            );
          })}
        </div>
        <div className="item-4">
          <h2>Preparation</h2>
          <p>{data.instruction}</p>
        </div>
      </div>
    </div>
  );
};

export default RecipeSingle;
