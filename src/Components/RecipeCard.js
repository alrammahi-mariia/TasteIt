import React from "react";
import { Link } from "react-router-dom";

const RecipeCard = () => {
  return (
    <div className="card">
      <img src=""></img>
      <h3>Pizza</h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ex odio,
        dapibus quis gravida sed, pellentesque id tortor. Fusce mattis volutpat
        neque a consectetur. Praesent faucibus urna arcu, in dignissim nunc
        ullamcorper sed. Etiam lacinia elit vel sagittis luctus. Donec
        condimentum, eros sit amet sollicitudin euismod, odio eros mollis ex, a
        feugiat sapien dolor ut dui. Maecenas posuere auctor leo sed aliquam. Ut
        sed nisi eros. Duis eu nisl ut leo hendrerit scelerisque. Suspendisse
        sit amet viverra dui, sit amet iaculis nibh.
      </p>
      <Link to="recipesingle" className="card-button">
        See more
      </Link>
    </div>
  );
};

export default RecipeCard;
