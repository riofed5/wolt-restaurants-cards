import CategoriesList from "../components/CategoriesList";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Loading from "../components/Loading";

import Tabs from "../components/Tabs";
import RecipeContainer from "../components/RecipeContainer";
import RecipeFilter from "../components/RecipeFilter";
import RecipeList from "../components/RecipeList";

import renderer from "react-test-renderer";
import React, { useContext } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { RecipeContext, RecipeProvider } from "../context";

import Adapter from "enzyme-adapter-react-16";
import { mount, configure } from "enzyme";

/* Rendering test*/

it("renders categoriesList correctly", () => {
  const categoriesList = renderer.create(<CategoriesList />).toJSON();

  expect(categoriesList).toMatchSnapshot();
});

it("renders footer correctly", () => {
  const footer = renderer.create(<Footer />).toJSON();

  expect(footer).toMatchSnapshot();
});

it("renders navbar correctly", () => {
  const navbar = renderer
    .create(
      <Router>
        <Navbar />
      </Router>
    )
    .toJSON();

  expect(navbar).toMatchSnapshot();
});

it("renders Loading correctly", () => {
  const loading = renderer.create(<Loading />).toJSON();

  expect(loading).toMatchSnapshot();
});
/* End rendering test*/

/*----------------------------------------------------------------------------*/

/* Functionality test */

//Test for handle Filter
configure({ adapter: new Adapter() });
describe("Sort items ", () => {
  
  //sort name from A to Z
  it("by name ascending", () => {
    const TestComponent = () => {
      const context = useContext(RecipeContext);

      let { handleSelectFilter, sortedRecipes } = context;

      return (
        <>
          <select onChange={handleSelectFilter}>
            <option value="A to Z" key={1}>
              Name Ascending
            </option>
          </select>
          <div data-testid="value">
            {sortedRecipes.map(item => item.name).toString()}
          </div>
        </>
      );
    };

    const wrapper = mount(
      <RecipeProvider>
        <TestComponent />
      </RecipeProvider>
    );

    wrapper.find("select").simulate("change");
    expect(wrapper.find('[data-testid="value"]').text()).toEqual(
      "Arnolds Forum,Base Camp Yliopistonkatu,Biáng! Citycenter,Burger King Mannerheimintie,Classic Pizza Restaurant Forum,Classic Pizza Restaurant Stockmann,Döner Harju City,Eat Poke HKI,Elmo Sport Bistro,Fafa's Citykäytävä,Fafa's Mikonkatu,Fafa's Sokos,Fazer Café Forum,FLQ Kaisaniemi,FreshStop Eliel,Friends & Brgrs Helsinki,Fuku Helsinki,Grande Grill & Green,Haiku Sushi,Hanko Sushi Forum,Hanko Sushi Stockmann,Happy Waffle Helsinki,Hey Poke Citycenter,Huacheng,Jufu Rautatientori,Jungle Juice Bar Forum,Kippo,La Torrefazione Lasipalatsi,Luckiefun's Kaivokatu,Mashiro Postitalo,McDonald's Forum Katutaso,Momotoko Citycenter,MorriSon's Helsinki,O'Learys Bakers,Picnic Forum Kukontori,Picnic Yliopistonkatu,Pizza Hut Citykäytävä,Pizza Hut Forum,Pizzeria & Spagetteria MorriSon's,Sandro Citykäytävä,Santa Fé,Siipiweikot Helsinki,Social Burgerjoint Citycenter,Soma Food, Kaivokatu,Suburritos,Sushibar + Wine City,Taco Bell Baker's,Vapiano Mikonkatu,Woolshed – Australian Gastropub,Zhonghua"
    );
  });

  //sort name from Z to A

  it("by name descending", () => {
    const TestComponent = () => {
      const context = useContext(RecipeContext);

      let { handleSelectFilter, sortedRecipes } = context;

      return (
        <>
          <select onChange={handleSelectFilter}>
            <option value="Z to A" key={1}>
              Name Descending
            </option>
          </select>
          <div data-testid="value">
            {sortedRecipes.map(item => item.name).toString()}
          </div>
        </>
      );
    };

    const wrapper = mount(
      <RecipeProvider>
        <TestComponent />
      </RecipeProvider>
    );

    wrapper.find("select").simulate("change");
    expect(wrapper.find('[data-testid="value"]').text()).toEqual(
      "Zhonghua,Woolshed – Australian Gastropub,Vapiano Mikonkatu,Taco Bell Baker's,Sushibar + Wine City,Suburritos,Soma Food, Kaivokatu,Social Burgerjoint Citycenter,Siipiweikot Helsinki,Santa Fé,Sandro Citykäytävä,Pizzeria & Spagetteria MorriSon's,Pizza Hut Forum,Pizza Hut Citykäytävä,Picnic Yliopistonkatu,Picnic Forum Kukontori,O'Learys Bakers,MorriSon's Helsinki,Momotoko Citycenter,McDonald's Forum Katutaso,Mashiro Postitalo,Luckiefun's Kaivokatu,La Torrefazione Lasipalatsi,Kippo,Jungle Juice Bar Forum,Jufu Rautatientori,Huacheng,Hey Poke Citycenter,Happy Waffle Helsinki,Hanko Sushi Stockmann,Hanko Sushi Forum,Haiku Sushi,Grande Grill & Green,Fuku Helsinki,Friends & Brgrs Helsinki,FreshStop Eliel,FLQ Kaisaniemi,Fazer Café Forum,Fafa's Sokos,Fafa's Mikonkatu,Fafa's Citykäytävä,Elmo Sport Bistro,Eat Poke HKI,Döner Harju City,Classic Pizza Restaurant Stockmann,Classic Pizza Restaurant Forum,Burger King Mannerheimintie,Biáng! Citycenter,Base Camp Yliopistonkatu,Arnolds Forum"
    );
  });
});

/* End functionality test */
