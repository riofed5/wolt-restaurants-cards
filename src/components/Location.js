import React, { useContext } from "react";
import { RecipeContext } from "../context";

const Location = () => {
  const context = useContext(RecipeContext);

  const { location } = context;
  return (
    <div className="location-container">
      <div className="location-items">
        <div className="location-item-left">
          <span>
            <i className="fa fa-map-marker" aria-hidden="true" />
          </span>
          <p>{location}</p>
        </div>
      </div>
    </div>
  );
};

export default Location;
