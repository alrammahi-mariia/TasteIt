import React, { useState, useEffect } from "react";
import axios from "axios";
import RecipeCard from "./RecipeCard";

const RecipeList = () => {
  const [recipies, setRecipies] = useState([]);
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);

  const getRecipes = () => axios.get("http://localhost:3001/recipies");
  const getCountries = () => axios.get("https://restcountries.com/v2/all");

  const searchHandler = (e) => {
    setSearch(e.target.value);
  };

  const searchFilter = recipies.filter((recipe) => {
    return recipe.name.toLowerCase().includes(search.toLowerCase());
  });

  useEffect(() => {
    setLoading(true);
    Promise.all([getRecipes(), getCountries()]).then(function (results) {
      const recipesData = results[0];
      const countriesData = results[1];

      setRecipies(recipesData.data);
      setCountries(countriesData.data);

      setLoading(false);
    });
  }, []);

  if (loading) {
    return <p>Loading</p>;
  }

  return (
    <div>
      <div className="search-container">
        <label>Search for recipe:</label>
        <input
          type="text"
          name="search"
          onChange={searchHandler}
          defaultValue=""
        ></input>
      </div>
      <div className="recipes-container">
        <h2>Our recipes</h2>
        <div className="recipes-cards">
          {searchFilter.map((recipe) => (
            <RecipeCard
              key={recipe.id}
              data={recipe}
              country={countries.find(
                (country) => country.alpha2Code === recipe.country_code
              )}
              {...recipe}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipeList;
