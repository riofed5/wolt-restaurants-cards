import CategoriesList from "../components/CategoriesList";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import Loading from "../components/Loading";

import Home from "../pages/Home";

import Tabs from "../components/Tabs";
import RecipeContainer from "../components/RecipeContainer";
import RecipeFilter from "../components/RecipeFilter";
import RecipeList from "../components/RecipeList";
import Recipe from "../components/Recipe";

import React, { useContext } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { RecipeContext, RecipeProvider } from "../context";

import Adapter from "enzyme-adapter-react-16";
import { mount, configure, shallow } from "enzyme";
import toJson from "enzyme-to-json";

// 1.Setting configure and set data example
configure({ adapter: new Adapter() });

let recipesExample = [
  {
    blurhash: "UUKJMXv|x]oz0gtRM{V@AHRQwvxZXSs9s;o0",
    city: "Helsinki",
    currency: "EUR",
    delivery_price: 390,
    description: "Asenneburgeri",
    image:
      "https://prod-wolt-venue-images-cdn.wolt.com/5b348b31fe8992000bbec771/2be8c7738b220df2f9a0974da5c90d90",
    location: [24.941325187683105, 60.169938852212965],
    name: "Social Burgerjoint Citycenter",
    online: true,
    tags: ["hamburger", "fries"]
  },
  {
    blurhash: "UXJHswsy-n%0~T%Ka%NLNFjFxvNe%MRjM|ax",
    city: "Helsinki",
    currency: "EUR",
    delivery_price: 390,
    description: "Modernia gourmet-kebabia ",
    image:
      "https://prod-wolt-venue-images-cdn.wolt.com/5abcf2d270aae6000deacff0/9c21840f97e01f5c293eae0993b4faa2",
    location: [24.94184732393478, 60.16993168083865],
    name: "D\u00f6ner Harju City",
    online: true,
    tags: ["kebab", "d\u00f6ner"]
  }
];

// 2.Unit test

// 2.1 For components without props passed

describe("component without props passed", () => {
  
  //2.1.1 Home
  
  test("Home renders", () => {
    const wrapper = shallow(
      <Router>
        <Home />
      </Router>
    );
    
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  // 2.1.2 Navbar

  test("Navbar renders", () => {
    const wrapper = shallow(
      <Router>
        <Navbar />
      </Router>
    );

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  //2.1.3 Tabs

  test("Tabs renders", () => {
    const wrapper = shallow(
      <RecipeProvider>
        <Tabs />
      </RecipeProvider>
    );
    
    expect(toJson(wrapper)).toMatchSnapshot();
  });

  //2.1.4 Recipe Filter
  
  test("RecipeFilter renders", () => {
    const wrapper = shallow(
      <RecipeProvider>
        <RecipeFilter />
      </RecipeProvider>    
    );
    
    expect(toJson(wrapper)).toMatchSnapshot();
  });  

  // 2.1.5 Loading
  test("Loading renders", () => {
    const wrapper = shallow(<Loading />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  
  //2.1.6 Categories List
  test("CategoriesList renders", () => {
    const wrapper = shallow(<CategoriesList />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });
  
  //2.1.7 Footer
  test("Footer renders", () => {
    const wrapper = shallow(<Footer />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  
});

// 2.2 For components within props passed

describe("Recipe component", () => {
  test("renders", () => {
    const wrapper = shallow(<Recipe recipe={recipesExample} layout="grid" />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test("renders when nothing is passed", () => {
    const wrapper = shallow(<Recipe />);

    expect(toJson(wrapper)).toMatchSnapshot();
  });

  test("renders doesn't break out when nothing pass", () => {
    const wrapper = shallow(<Recipe />);
    expect(wrapper.find("img")).toHaveLength(1);
  });
});

// 3.Intergration test

describe("RecipeList component", () => {
  test("renders", () => {
    const wrapper = shallow(
      <RecipeProvider>
        <RecipeList recipe={recipesExample} />
      </RecipeProvider>
    );
    expect(wrapper.exists()).toBe(true);
  });

  test("should render Recipe component", () => {
    const wrapper = mount(
      <RecipeProvider>
        <RecipeList recipes={recipesExample} />
      </RecipeProvider>
    );
    expect(
      wrapper
        .find("div")
        .find("div")
        .children(Recipe).length
    ).toEqual(recipesExample.length);
  });
});

// 4.Functionality test

// 4.1 Test for handle Filter

describe("Sort items ", () => {
  //sort name from A to Z
  test("by name ascending", () => {
    const TestComponent = () => {
      const context = useContext(RecipeContext);

      let { handleSelectFilter, sortedRecipes } = context;

      return (
        <>
          <select onChange={handleSelectFilter}>
            <option value="A TO Z" key={1}>
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

  test("by name descending", () => {
    const TestComponent = () => {
      const context = useContext(RecipeContext);

      let { handleSelectFilter, sortedRecipes } = context;

      return (
        <>
          <select onChange={handleSelectFilter}>
            <option value="Z TO A" key={1}>
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
