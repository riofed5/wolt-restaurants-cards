import React, { Component } from "react";
import items from "./data";

const RecipeContext = React.createContext();

class RecipeProvider extends Component {
  state = {
    recipes: items,
    loading: true,
    sortedRecipes: items,
    layout: "grid",
    location: "Helsinki"
  };

  componentDidMount() {
    let tempRecipes = [...this.state.recipes];

    tempRecipes = tempRecipes.filter(
      recipe => recipe.city === this.state.location
    );

    this.setState({
      loading: false,
      sortedRecipes: tempRecipes
    });
  }

  handleLocation= ()=>{
    console.log('The process is continuing');
  }

  handleSelectFilter = e => {
    const value = e.target.value;
    let tempRecipes = [...this.state.recipes];

    if (value === "A TO Z") {
      tempRecipes = tempRecipes.sort((a, b) => a.name.localeCompare(b.name));
    } else if (value === "Z TO A") {
      tempRecipes = tempRecipes.sort((a, b) => b.name.localeCompare(a.name));
    } else {
      tempRecipes= this.state.sortedRecipes;
    }
    this.setState({
      sortedRecipes: tempRecipes
    });
  };

  handleLayoutChange = value => {
    this.setState({
      layout: value
    });
  };

  render() {
    return (
      <RecipeContext.Provider
        value={{
          ...this.state,
          handleSelectFilter: this.handleSelectFilter,
          handleLayoutChange: this.handleLayoutChange
        }}
      >
        {this.props.children}
      </RecipeContext.Provider>
    );
  }
}

const RecipeConsumer = RecipeContext.Consumer;

export const withRecipeConsumer = Component => {
  const ConsumerWrapper = props => {
    return (
      <RecipeConsumer>
        {value => <Component {...props} context={value} />}
      </RecipeConsumer>
    );
  };
  return ConsumerWrapper;
};

export { RecipeConsumer, RecipeProvider, RecipeContext };
