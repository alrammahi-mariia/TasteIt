import React, { useState, useEffect } from "react";
import axios from "axios";

const AddRecipe = () => {
  const [submitted, setSubmit] = useState(false);
  const [data, setData] = useState({
    name: "",
    author: "",
    description: "",
    country_code: "",
    img: "",
    ingr: [],
    instruction: "",
  });

  const [ingredients, setIngredients] = useState([
    { id: 1, inSingle: "", quantity: "" },
  ]);

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get("https://restcountries.com/v2/all").then((res) => {
      setCountries(res.data);
    });
  }, []);

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

  const changeCountry = (e) => {
    const correctCountry = countries.find((c) => c.name === e.target.value);
    setData({ ...data, country_code: correctCountry.alpha2Code });
  };

  const addMore = (e) => {
    e.preventDefault();
    const newIngr = { id: ingredients.length + 1, inSingle: "", quantity: "" };
    setIngredients([...ingredients, newIngr]);
  };

  const submitData = (e) => {
    e.preventDefault();
    axios.post("http://localhost:3001/recipies", data);
    setSubmit(true);
  };

  return (
    <div className="form-container">
      <h2>Add new recipe</h2>
      <form onSubmit={submitData}>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" onChange={changeData} />

        <label htmlFor="author">Author</label>
        <input type="text" name="author" id="author" onChange={changeData} />

        <label htmlFor="description">Description</label>
        <textarea name="description" id="desc" onChange={changeData} />

        <label htmlFor="img">Image</label>
        <input type="url" name="img" id="img" onChange={changeData} />

        <label htmlFor="countryCode">Recipe is from:</label>
        <select name="country_code" id="countryCode" onChange={changeCountry}>
          {countries.map((c) => (
            <option key={c.name}>{c.name}</option>
          ))}
        </select>
        <div className="ingredients-container">
          <h3>Ingredients</h3>
          {ingredients.map((_, i) => {
            return (
              <div className="add-ingredients">
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
        <textarea name="instructions" id="inst" onChange={changeData} />
        <input type="submit" value="Post recipe" />
        {submitted === true && (
          <h3 className="submit-msg">Your recipe has been submitted!</h3>
        )}
      </form>
    </div>
  );
};

export default AddRecipe;
