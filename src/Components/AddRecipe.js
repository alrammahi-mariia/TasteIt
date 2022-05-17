import React, {useState, useEffect} from "react";
import axios from 'axios';

const AddRecipe = () => {
  const [data, setData] = useState({
    name: '',
    author:'',
    desc: '',
    country_code: '',
    img: '',
    inc: [],
    inst:'',
  });
  
  const [ingredients, setIngredients] = useState([
    {id:1, incName: '', quantity: ''},
  ]);

  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios.get('https://restcountries.com/v2/all').then((res) => {
      setCountries(res.data);
    });
  }, []);

  const changeData = (e) => {
    setData({...data, [e.target.name]: e.target.value});
  };
  
  // Bit more complicated event handler for getting data from ingredients. First, we spread the current ingredients state and then look for that specific object in the array. We use the index, which is passed to the event handler. After updating the value in inputs, we will overwrite the Data state and add the ingredients array.
  const changeIncData = (e, i) => {
    const { name, value } = e.target;
    const incList = [...ingredients];
    incList[i][name] = value;
    setIngredients(incList);
    setData({ ...data, inc: ingredients });
  };

    // This event handler is reacting to our select event handler. We get the value from select, and then we find the correct alpha2Code. After that, we save valid code to the Data state.
    const changeCountry = (e) => {
      const correctCountry = countries.find((c) => c.name === e.target.value);
      setData({ ...data, country_code: correctCountry.alpha2Code });
    };
  
    // This event handler will add an empty ingredient object to the ingredients array.
    const addMore = (e) => {
      e.preventDefault();
      const newInc = { id: ingredients.length + 1, incName: '', quantity: '' };
      setIngredients([...ingredients, newInc]);
    };
  
    // After we have all data collected from inputs, we post the Data object from state.
    const submitData = (e) => {
      axios.post('http://localhost:3001/recipies', data);
    };

  return (
    <div className="form-container">
      <h2>Add new recipe</h2>
      <form>
        <label htmlFor="name">Name</label>
        <input type="text" name="name" id="name" />
        <label htmlFor="author">Author</label>
        <input type="text" name="author" id="author" />
        <label htmlFor="description">Description</label>
        <textarea name="description" id="description" />
        <label htmlFor="image">Image</label>
        <input type="url" name="image" id="image" />
        <label htmlFor="ingredients">Ingredients</label>
        <label htmlFor="quantity">Quantity</label>
        <input type="text" name="quantity" />
        <label htmlFor="ingredient">Ingredient</label>
        <input type="text" name="ingredient" />
        <label htmlFor="instructions">Instructions</label>
        <textarea name="instructions" id="instructions" />
        <input type="submit" value="Post recipe" />
      </form>
    </div>
  );
};
}

export default AddRecipe;
