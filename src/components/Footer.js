import React, { Component } from "react";
import logo from "../images/logo.svg";
import appstore from "../images/appstore.svg";
import googleplay from "../images/googleplay.svg";

export default class Footer extends Component {
  render() {
    return (
      <div style={{ backgroundColor: "rgb(211, 210, 210)" }}>
        <div className="footer">
          <div className="footer-top">
            <span>
              <img src={logo} alt="Wolt" />
            </span>
          </div>
          <div className="footer-middle">
            <div className="footer-logo">
              <h3> Download the app</h3>
              <span>
                <img src={appstore} alt="apple store" />
              </span>
              <span>
                <img src={googleplay} alt="google play" />
              </span>
            </div>
            <div className="footer-detail">
              <h3>Let's do this together</h3>
              <p>For couriers</p>
              <p>For restaurant</p>
              <p>For companies</p>
              <p>Jobs</p>
            </div>
            <div className="footer-detail">
              <h3>Wolt links</h3>
              <p>Contact</p>
              <p>Media</p>
              <p>Support</p>
              <p>Blog</p>
            </div>
          </div>
          <div className="footer-bottom">
            <div className="footer-detail">
              <p>© Wolt 2014–2020</p>
            </div>
            <div className="footer-detail">
              <p>Terms and conditions</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
