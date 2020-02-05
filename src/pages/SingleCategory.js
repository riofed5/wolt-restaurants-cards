import React, { Component } from "react";
import Navbar from "../components/Navbar";
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
