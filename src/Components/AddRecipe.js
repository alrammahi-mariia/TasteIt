import React from "react";

const AddRecipe = () => {
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

export default AddRecipe;
