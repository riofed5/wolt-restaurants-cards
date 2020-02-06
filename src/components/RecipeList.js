import React from "react";
import Recipe from "./Recipe";
import { useContext } from "react";
import { RecipeContext } from "../context";
import PropTypes from 'prop-types';

const RecipeList = ({ recipes }) => {
  const deliveryRecipes = recipes.filter(recipe => recipe.online);

  const context = useContext(RecipeContext);

  const { layout } = context;
  if (deliveryRecipes.length === 0) {
    return (
      <div className="empty-search">
        <h3>unfortunately no cards available</h3>
      </div>
    );
  }
  return (
    <div className=" recipeslist">
      <p className="title">Restaurants open &amp; online</p>
      <div
        className={
          layout === "grid" ? "recipeslist-center" : "recipeslist-center-layout"
        }
      >
        {deliveryRecipes.map((item, index) => {
          return <Recipe key={index} recipe={item} layout={layout} />;
        })}
      </div>
    </div>
  );
};

RecipeList.propTypes={
  recipes: PropTypes.array,
}

export default RecipeList;
