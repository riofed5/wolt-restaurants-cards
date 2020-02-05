import React, { Component } from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";

import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import Discovery from "./pages/Discovery";
import Footer from "./components/Footer";
import Delivery from "./pages/Delivery";
import SingleCategory from "./pages/SingleCategory";



class App extends Component {
  render(){
  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/discovery" component={Discovery} />
        <Route exact path="/delivery" component={Delivery} />
        <Route exact path="/category/:slug" component={SingleCategory} />
        <Route component={Error} />
      </Switch>
      <Footer />
    </>
  );
  }
};

export default App;
