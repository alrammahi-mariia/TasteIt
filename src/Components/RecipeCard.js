import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = (props) => {
  const { name, flag, description, img } = props;

  return (
    <div className="card">
      <div className="flag-container">
        <img src={flag} alt="" className="flag" />
      </div>
      <div className="image-container">
        <img src={img} alt={name} />
      </div>
      <h3>{name}</h3>
      <p>{description}</p>
      <Link to={name} state={{ from: "recipies", data: props }}>
        See more
      </Link>
    </div>
  );
};

export default RecipeCard;
