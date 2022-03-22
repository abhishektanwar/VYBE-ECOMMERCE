import React from "react";
import "./filter-bar.css";
const FilterBar = () => {

  return (
      <div className="filter-bar flex-column" id="filter-side-bar">
        <div className="sidebar-toggle-button">
          <h2 className="typo-sm sidebar-title typo-lg">FILTERS</h2>
          <span className="sidebar-toggle-down-arrow">
            <i className="typo-sm fas fa-chevron-down"></i>
          </span>
        </div>
        <div className="flex-row flex-align-item-center filter-bar-header">
          <h3 className="text-bold-weight">Filters</h3>
          <button className="link-no-style">
            <h5>Clear</h5>
          </button>
        </div>
        <div
          className="filter-bar-body flex-column sidebar-active"
          id="filter-bar-bodya"
        >
          <div className="filter-type">
            <h3 className="text-bold-weight">Price</h3>
            <div className="price-input">
              <div className="field">
                <span>Min</span>
                <input type="number" className="input-min" value="2500" />
              </div>
              <div className="separator">-</div>
              <div className="field">
                <span>Max</span>
                <input type="number" className="input-max" value="7500" />
              </div>
            </div>
            <div className="slider">
              <div className="progress"></div>
            </div>

            <div className="range-input">
              <input
                type="range"
                className="range-min"
                min="0"
                max="10000"
                value="2500"
                step="100"
              />
              <input
                type="range"
                className="range-max"
                min="0"
                max="10000"
                value="7500"
                step="100"
              />
            </div>
          </div>
          <div className="filter-type margin-top-16">
            <h3 className="text-bold-weight">Category</h3>
            <label className="checkbox-container">
              Men's Clothing
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>

            <label className="checkbox-container">
              Men's Clothing
              <input type="checkbox" />
              <span className="checkmark"></span>
            </label>
          </div>
          <div className="filter-type flex-column margin-top-16">
            <h3 className="text-bold-weight">Rating</h3>
            <label className="radio-container">
              <input type="radio" name="key" value="value" />
              <span>4 Stars & above</span>
            </label>
            <label className="radio-container">
              <input type="radio" name="key" value="value" />
              <span>3 Stars & above</span>
            </label>
            <label className="radio-container">
              <input type="radio" name="key" value="value" />
              <span>2 Stars & above</span>
            </label>
            <label className="radio-container">
              <input type="radio" name="key" value="value" />
              <span>1 Stars & above</span>
            </label>
          </div>
          <div className="filter-type flex-column margin-top-16">
            <h3 className="text-bold-weight">Sort by</h3>
            <label className="radio-container">
              <input type="radio" name="key" value="value" />
              <span>Price - Low to High</span>
            </label>
            <label className="radio-container">
              <input type="radio" name="key" value="value" />
              <span>Price - High to Low</span>
            </label>
          </div>
        </div>
      </div>
  );
};

export default FilterBar;
