import React, { Component } from "react";
import chinese from "../images/thumbnails/cat_chinese.jpg";
import kebab from "../images/thumbnails/cat_kebab.jpg";
import ramen from "../images/thumbnails/cat_ramen.jpg";
import steak from "../images/thumbnails/cat_steak.jpg";
import streetfood from "../images/thumbnails/cat_street_food.jpg";
import sushi from "../images/thumbnails/cat_sushi.jpg";

const CategoriesList = () => {
  return (
    <div className="categories">
      <div className="categories-title">
        <span>Categories</span>
      </div>
      <div className="categories-center">
        <div className="thumbnails-container">
          <img src={kebab} alt="single tag" />
          <p>kebab</p>
        </div>
        <div className="thumbnails-container">
          <img src={ramen} alt="single tag" />
          <p>ramen</p>
        </div>
        <div className="thumbnails-container">
          <img src={steak} alt="single tag" />
          <p>steak</p>
        </div>
        <div className="thumbnails-container">
          <img src={streetfood} alt="single tag" />
          <p>street Food</p>
        </div>
        <div className="thumbnails-container">
          <img src={sushi} alt="single tag" />
          <p>sushi</p>
        </div>
        <div className="thumbnails-container">
          <img src={chinese} alt="single tag" />
          <p>chinese</p>
        </div>
      </div>
    </div>
  );
};

export default CategoriesList;
