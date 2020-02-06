import React from "react";
import PropTypes from "prop-types";

const Recipe = ({recipe={}, layout=null }) => {
  let { image, name, tags, delivery_price, description } = recipe;
  if(tags){
    tags = tags.toString();
  }

  return (
    <div className={layout==="grid"?"recipe":"recipe-layout"}>
      <div className={layout==="grid"?"img-container":"img-container-layout"}>
        <img src={image} alt="single recipe" />
        <div className="btn-primary recipe-link">
          Details
        </div>
      </div>
      <div className={layout==="grid"?"recipe-container-info":"recipe-container-info-layout"}>
        <div className={layout==="grid"?"recipe-info":"recipe-info-layout"}>
          <div className="recipe-info-left">
            <p className="recipe-info-left-title"> {name}</p>
            <p className="recipe-info-left-description">{description}</p>
          </div>
          <div className="recipe-info-right">
            <p>20-30</p>
            <p>mins</p>
          </div>
        </div>
        <div className="recipe-subinfo">
          <span>€€</span>
          <span>
            <span>·</span>
            8.2
          </span>
          <span>
            <span>·</span>
            Delivery {(delivery_price / 100).toFixed(2)}€
          </span>
          <span>
            <span>·</span>
            {tags}
          </span>
        </div>
      </div>
    </div>
  );
};

Recipe.propTypes = {
  recipe: PropTypes.object,
  layout: PropTypes.string
}

export default Recipe;

