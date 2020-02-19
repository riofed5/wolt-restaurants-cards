import React from "react";
import chinese from "../images/thumbnails/cat_chinese.jpg";
import kebab from "../images/thumbnails/cat_kebab.jpg";
import ramen from "../images/thumbnails/cat_ramen.jpg";
import steak from "../images/thumbnails/cat_steak.jpg";
import streetfood from "../images/thumbnails/cat_street_food.jpg";
import sushi from "../images/thumbnails/cat_sushi.jpg";
import { Link } from "react-router-dom";
import styled from 'styled-components';

const CategoriesList = () => {
  return (
    <div className="categories">
      <div className="categories-title">
        <span>Categories</span>
      </div>
      <div className="categories-center">
        <div className="thumbnails-container">
          <img src={kebab} alt="single tag" />
          <LinkStyled to="/category/kebab">
            <p>kebab</p>
          </LinkStyled>
        </div>
        <div className="thumbnails-container">
          <img src={ramen} alt="single tag" />
          <LinkStyled to="/category/ramen">
            <p>ramen</p>
          </LinkStyled>
        </div>
        <div className="thumbnails-container">
          <img src={steak} alt="single tag" />
          <LinkStyled to="/category/steak">
            <p>steak</p>
          </LinkStyled>
        </div>
        <div className="thumbnails-container">
          <img src={streetfood} alt="single tag" />
          <LinkStyled to="/category/streetfood">
            <p>Street Food</p>
          </LinkStyled>
        </div>
        <div className="thumbnails-container">
          <img src={sushi} alt="single tag" />
          <LinkStyled to="/category/sushi">
            <p>sushi</p>
          </LinkStyled>
        </div>
        <div className="thumbnails-container">
          <img src={chinese} alt="single tag" />
          <LinkStyled to="/category/chinese">
            <p>chinese</p>
          </LinkStyled>
        </div>
      </div>
    </div>
  );
};

const LinkStyled = styled(Link)`
  text-decoration: none;
  padding-top: 10px;
  font-size: 15px;
  font-weight: 500;
  text-align: center;
  width: fit-content;
  height: 20px;
  color: grey;
`;

export default CategoriesList;
