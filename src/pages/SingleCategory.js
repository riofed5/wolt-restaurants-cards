import React, { Component } from "react";
import Tabs from "../components/Tabs";
import RecipeContainer from "../components/RecipeContainer";

export default class SingleCategory extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slug: this.props.match.params.slug
    };
  }
  render() {
    return (
      <>
        <Tabs />
        <RecipeContainer slug={this.state.slug} />
      </>
    );
  }
}
