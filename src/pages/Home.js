import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import background from "../images/background.jpg";
import LocationInput from "../components/LocationInput";

const Home = (props) => {

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
            <LocationInput />
          </div>
          <button onClick={() => props.history.push('/discovery')}>
            <span>Search</span>
          </button>
        </div>
        <div>
          <LinkStyled to="/discovery">
            or view popular restaurants in Helsinki
          </LinkStyled>
        </div>
      </div>
      <img
        className="home-container-right"
        src={background}
        alt="a-part-of-background"
        />
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

/*
{* Get your peronal location*}

let place = undefined;
const handdleGetUserLoaction = () => {
  navigator.geolocation.getCurrentPosition(
      position => {
        place = {
          lat: position.coords.latitude,
          long: position.coords.longitude
        };
        console.log(place);
        getUserAddressBy(place.lat, place.long);
      },
      error => {
        console.log("The Locator was denied. :(");
      }
      );
    };

  const getUserAddressBy = function(lat, long) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
      if (this.readyState == 4 && this.status == 200) {
        const address = JSON.parse(this.responseText);
        console.log(address.results[0]);
      }
    };
    xhttp.open(
      "GET",
      "https://maps.googleapis.com/maps/api/geocode/json?latlng=" +
        lat +
        "," +
        long +
        "&key={enter_your_personal_key_here}",
      true
    );
    xhttp.send();
  };*/