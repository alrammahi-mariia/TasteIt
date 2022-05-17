import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = ({ name, desc, img, data, country }) => {
  return (
    <div className="card">
      <img src={img} alt={name} />
      <img src={country.flag} alt={country.name} />
      <h3>{name}</h3>
      <p>{desc}</p>
      <Link to={name} state={{ data: data, country: country }}>
        See more
      </Link>
    </div>
  );
};

export default RecipeCard;
