import React, { useState, useEffect } from "react";
import axios from "axios";

const AddRecipe = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [submitted] = useState(false);
  const [data, setData] = useState({
    name: "",
    author: "",
    description: "",
    img: "",
    ingr: [],
    instruction: "",
    flag: "",
    country: "",
  });

  const [ingredients, setIngredients] = useState([
    { id: 1, inSingle: "", quantity: "" },
  ]);

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    axios
      .get("https://restcountries.com/v3.1/all?fields=name,flag,flags")
      .then((res) => {
        setIsLoading(false);
        let sorted = res.data.sort((a, b) =>
          a.name.common.localeCompare(b.name.common)
        );
        setCountries(sorted);
      })
      .catch((err) => {
        console.log("Axios get countries error: ", err);
      });
  }, []);

  const postData = (e) => {
    console.log(data);
    axios
      .post("/api/recipies", data)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log("Axios post error: ", err);
      });
  };

  const changeData = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const changeIngrData = (e, i) => {
    const { name, value } = e.target;
    const ingrList = [...ingredients];
    ingrList[i][name] = value;
    setIngredients(ingrList);
    setData({ ...data, ingr: ingredients });
  };

  const postCountry = (e) => {
    countries.map((country) => {
      if (country.name.common === e.target.value) {
        setData({
          ...data,
          country: e.target.value,
          flag: country.flags.svg,
        });
      }
      return console.log(data);
    });
  };

  const addMore = (e) => {
    e.preventDefault();
    const newIngr = { id: ingredients.length + 1, inSingle: "", quantity: "" };
    setIngredients([...ingredients, newIngr]);
  };

  if (isLoading) {
    return <p>Loading...</p>;
  }

  return (
    <div className="form-container">
      <h2>Add new recipe</h2>
      <form onSubmit={postData}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" onChange={changeData} />

        <label htmlFor="author">Author</label>
        <input type="text" name="author" id="author" onChange={changeData} />

        <label htmlFor="description">Description</label>
        <textarea name="description" id="desc" onChange={changeData} />

        <label htmlFor="img">Image</label>
        <input type="url" name="img" id="img" onChange={changeData} />

        <label htmlFor="countryCode">Recipe is from:</label>
        <select name="country_code" id="countryCode" onChange={postCountry}>
          {countries.map((country) => (
            <option value={country.name.common} key={country.name.common}>
              {country.name.common}
              {country.flag}
            </option>
          ))}
        </select>
        <div className="ingredients-container">
          <h3>Ingredients</h3>
          {ingredients.map((_, i) => {
            return (
              <div key={i} className="add-ingredients">
                <label htmlFor="inSingle">Ingredient</label>
                <input
                  type="text"
                  name="inSingle"
                  id="inSingle"
                  onChange={(e) => changeIngrData(e, i)}
                />

                <div key={i}>
                  <label htmlFor="quantity">Quantity</label>
                  <div>
                    <input
                      type="text"
                      name="quantity"
                      id="quantity"
                      onChange={(e) => changeIngrData(e, i)}
                    />
                  </div>
                </div>
              </div>
            );
          })}
          <button onClick={addMore}>Add more</button>
        </div>
        <label htmlFor="instructions">Instructions</label>
        <textarea name="instruction" id="inst" onChange={changeData} />
        <input type="submit" value="Post recipe" />
        {submitted === true && (
          <h3 className="submit-msg">Your recipe has been submitted!</h3>
        )}
      </form>
    </div>
  );
};

export default AddRecipe;
