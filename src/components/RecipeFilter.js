import React from "react";
import { useContext } from "react";
import { RecipeContext } from "../context";

const RecipeFilter = () => {
  const context = useContext(RecipeContext);

  const selections = ["A to Z", "Z to A"];

  const { handleSelectFilter, handleLayoutChange, location } = context;

  return (
    <div className="container-filter">
      <div className="filter">
        <div className="filter-delivery-to">
          <span>Delivery to me</span>
          <span> in {location}</span>
        </div>
        <div className="filter-list">
          <select id="filter-select" onChange={handleSelectFilter}>
            <option selected="false" key={0}>
              Sort By
            </option>
            {selections.map((item, index) => {
              return (
                <option value={item} key={index + 1}>
                  Name {item}
                </option>
              );
            })}
          </select>
          <div className="filter-button">
            <button
              className="filter-button-grid"
              onClick={() => handleLayoutChange("grid")}
            >
              <span>
                <i className="fa fa-th-large" aria-hidden="true" />
              </span>
            </button>
            <button
              className="filter-button-list"
              onClick={() => handleLayoutChange("line-by-line")}
            >
              <span>
                <i className="fa fa-list" aria-hidden="true" />
              </span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeFilter;
