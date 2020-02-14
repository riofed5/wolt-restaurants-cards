import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "../images/logo.svg";

const Navbar = (props) => {
  const [state, setState] = useState({
    languages: ["English", "Finnish", "Chinese", "German"],
    open: false
  });

  const handleToggle = () => {
    setState({ open: !state.open });
  };
  return (
    <div className="container-nav">
      <div className="nav-items">
        <div className="nav-left">
          <Link to="/discovery">
            <img src={logo} alt="Wolt" />
          </Link>
        </div>
        <div className="nav-middle">
          <input
            onChange={() => {
              console.log("it will change");
            }}
            value=""
            type="text"
            placeholder="Search"
            // style={{visibility: }}
            required
          />
        </div>
        <div className="nav-right">
          <div className="nav-right-items">
            <input value="Sign Up" type="button" id="sign-up" />
            <input value="Log In" type="button" id="log-in" />
            <select id="languages">
              {state.languages.map((item, index) => {
                return (
                  <option value={item} key={index}>
                    {item}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        <div className="nav-more">
          <i className="fa fa-bars" aria-hidden="true" onClick={handleToggle}>
            <div
              style={{ display: `${state.open ? "block" : "none"}` }}
              className="options"
            >
              <div className="option-item">
                <span>Profile</span>
              </div>
              <div className="option-item">
                <span>Languages</span>
              </div>
              <div className="option-item-last">
                <span>Support</span>
              </div>
            </div>
          </i>
        </div>
      </div>
    </div>
  );
};


export default Navbar;
