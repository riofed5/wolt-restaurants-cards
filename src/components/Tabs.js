import React from "react";
import { useContext } from "react";
import { RecipeContext } from "../context";
import { Link } from "react-router-dom";

const Tabs = () => {
  const context = useContext(RecipeContext);

  const { handleSelectTab, location } = context;

  const {address, city}= location
  
  return (
    <div className="container-tabs">
      <div className="tabs-items">
        <div className="tabs-left">
          <span>
            <i className="fa fa-map-marker" aria-hidden="true" />
          </span>
          <p>
            {address && address + "," } { city}
          </p>
        </div>
        <div className="tabs-right">
          <div className="tabs-right-items">
            <Link to="/discovery">
              <input
                type="button"
                value="Discovery"
                id="discovery"
                onClick={handleSelectTab}
              />
            </Link>
            <div className="vertical-divider"></div>
            <Link to="/delivery">
              <input
                type="button"
                value="Delivery"
                id="delivery"
                onClick={handleSelectTab}
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Tabs;
