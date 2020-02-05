import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import background from "../images/background.jpg";

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-container-left">
        <div className="home-title">
          <h1>Looking for something healthy ?</h1>
        </div>
        <h3>Delivery address</h3>
        <div className="home-search">
          <div className="home-search-input">
            <span>
              <i className="fa fa-map-marker" aria-hidden="true" />
            </span>
            <input type="text" placeholder="1 Example Street" required />
          </div>
          <button>
            <span>Search</span>
          </button>
        </div>
        <div>
          <LinkStyled to="/discovery">
            or view popular restaurants in Helsinki
          </LinkStyled>
        </div>
      </div>
      <img className="home-container-right" src={background} alt="a-part-of-background" />
    </div>
  );
};

const LinkStyled = styled(Link)`
  padding-top: 10px;
  font-size: 1.3rem;
  font-weight: 500;
  text-align: center;
  width: fit-content;
  height: 20px;
  &:hover {
    text-decoration: none;
  }
`;

export default Home;
