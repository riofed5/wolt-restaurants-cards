import React from "react";
import Loading from "../components/Loading";
import RecipeFilter from "../components/RecipeFilter";
import RecipeList from "../components/RecipeList";
import { withRecipeConsumer } from "../context";

const RecipeContainer = ({ context, props }) => {
  const { loading, sortedRecipes } = context;

  if (loading) {
    return <Loading />;
  } else {
    return (
      <>
        <RecipeFilter recipes={sortedRecipes} />
        <RecipeList slug={props.slug} recipes={sortedRecipes} />
      </>
    );
  }
};

export default withRecipeConsumer(RecipeContainer);
