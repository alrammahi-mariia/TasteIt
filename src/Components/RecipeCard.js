import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = ({ name, description, img, data }) => {
  return (
    <div className="card">
      <div className="image-container">
        <img src={img} alt={name} />
      </div>
      <h3>{name}</h3>
      <p>{description}</p>
      <Link to={name} state={{ data: data }}>
        See more
      </Link>
    </div>
  );
};

export default RecipeCard;
