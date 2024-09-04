import React, { useState, useEffect } from "react";
import axios from "axios";
import RecipeCard from "./RecipeCard";

const RecipeList = () => {
  const [loading, setLoading] = useState(false);
  const [data, setData] = useState([]);
  const [filteredData, setFiltered] = useState(data);

  useEffect(() => {
    setLoading(true);
    axios
      .get("/api/recipies")
      .then((res) => {
        setData(res.data);
        setFiltered(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log("Axios error: ", err);
      });
  }, []);

  if (loading) {
    return <p>Loading</p>;
  }

  const handleSearch = (e) => {
    const result = data.filter((recipe) => {
      let recipeCountry = recipe.country.toLowerCase();
      let recipeName = recipe.name.toLowerCase();
      let searched = e.target.value.toLowerCase();

      if (recipeName.includes(searched) || recipeCountry.includes(searched)) {
        return recipe;
      } else {
        return "";
      }
    });
    setFiltered(result);
  };

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
          onChange={handleSearch}
          defaultValue=""
        ></input>
      </div>
      <div className="recipes-container">
        <h2>Our recipes</h2>
        <div className="recipes-cards">
          {filteredData.map((recipe) => (
            <RecipeCard {...recipe} key={recipe.id} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default RecipeList;
