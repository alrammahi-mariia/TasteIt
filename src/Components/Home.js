import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <div className="hero-banner">
        <div className="hero-content">
          <h1>TasteIT</h1>
          <p>
            TasteIT is a recipe app created during REACT22 group React lessons
          </p>
          <Link to="recipelist" className="hero-button">
            Browse recipes
          </Link>
        </div>
      </div>
      <div className="container">
        <h2>Looking for recipes?</h2>
        <div className="cards">
          <div className="card">
            <h3>Browse recipes</h3>
            <p>
              Find your favourites in this collection. You can search recipes
              based on name or country
            </p>
            <Link to="recipelist">All recipes</Link>
          </div>
          <div className="card">
            <h3>Add recipes</h3>
            <p>Recipe from your country is missing? No worries, add one!</p>
            <Link to="addrecipe">Add new recipe</Link>
          </div>
          <div className="card">
            <h3>Want to know more about our projects?</h3>
            <p>Visit our programme homepage</p>
            <a href="https://en.bc.fi/qualifications/full-stack-web-developer-program/">
              Business College Helsinki homepage
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
