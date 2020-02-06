import React from "react";
import Recipe from "./Recipe";
import { useContext } from "react";
import { RecipeContext } from "../context";

const RecipeList = ({ recipes }) => {
  const deliveryRecipes = recipes.filter(recipe => recipe.online);

  const context = useContext(RecipeContext);

  const { layout } = context;
  if (deliveryRecipes.length === 0) {
    return (
      <div className="empty-search">
        <h3>unfortunately no recipe matched your search</h3>
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

export default RecipeList;
