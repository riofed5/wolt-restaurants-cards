import React, { Component } from "react";
import Tabs from "../components/Tabs";
import RecipeContainer from "../components/RecipeContainer";

export default class SingleCategory extends Component {
  render() {
    return (
      <>
        <Tabs />
        <RecipeContainer />
      </>
    );
  }
}
