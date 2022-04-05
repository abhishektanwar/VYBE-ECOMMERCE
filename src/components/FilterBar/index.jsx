import React, { useState } from "react";
import { useProductListing } from "../../Contexts/ProductListingContext";
import { dispatchActionTypes } from "../../Reducers/dispatchActionTypes";
import "./filter-bar.css";

const FilterBar = () => {
  const { productListingState, productListingDispatch } = useProductListing();
  const { sortBy, priceRange, rating, categories } = productListingState;
  const { LOW_TO_HIGH, HIGH_TO_LOW, PRICE_RANGE, CATEGORY, RATING, CLEAR } =
    dispatchActionTypes;
  const [showFilterBar, setShowFilterBar] = useState(false);
  return (
    <div
      className="filter-bar flex-column"
      id="filter-side-bar"
      onClick={() => setShowFilterBar((prev) => !prev)}
    >
      <div className="sidebar-toggle-button">
        <h2 className="typo-sm sidebar-title typo-lg">FILTERS</h2>
        <span className="sidebar-toggle-down-arrow">
          <i className="typo-sm fas fa-chevron-down"></i>
        </span>
      </div>
      <div
        className={`flex-row flex-align-item-center filter-bar-header ${
          showFilterBar ? "show-filter-bar" : ""
        }`}
      >
        <h3 className="text-bold-weight">Filters</h3>
        <button
          className="link-no-style"
          onClick={() =>
            productListingDispatch({
              type: CLEAR,
            })
          }
        >
          <h5>Clear</h5>
        </button>
      </div>
      <div
        className={`filter-bar-body flex-column sidebar-active ${
          showFilterBar ? "show-filter-bar" : ""
        }`}
        id="filter-bar-bodya"
      >
        <div className="filter-type">
          <h3 className="text-bold-weight">Price</h3>
          <div className="price-input">
            <div className="field">
              <span>Min</span>
              <input
                type="number"
                className="input-min"
                value={priceRange.lower}
                // step="100"
                onChange={(e) =>
                  productListingDispatch({
                    type: PRICE_RANGE,
                    payload: { type: "LOWER", price: e.target.value },
                  })
                }
              />
            </div>
            <div className="separator">-</div>
            <div className="field">
              <span>Max</span>
              <input
                type="number"
                className="input-max"
                value={priceRange.higher}
                // step="100"
                onChange={(e) =>
                  productListingDispatch({
                    type: PRICE_RANGE,
                    payload: { type: "HIGHER", price: e.target.value },
                  })
                }
              />
            </div>
          </div>
        </div>
        <div className="filter-type margin-top-16">
          <h3 className="text-bold-weight">Category</h3>
          <label className="checkbox-container">
            Hiking and Trekking
            <input
              type="checkbox"
              checked={categories.hikingandtrekking}
              onChange={(e) => {
                productListingDispatch({
                  type: CATEGORY,
                  payload: "hikingandtrekking",
                });
              }}
            />
            <span className="checkmark"></span>
          </label>
          <label className="checkbox-container">
            Skiing and Snowboarding
            <input
              type="checkbox"
              checked={categories.skiingandsnowboarding}
              onChange={(e) => {
                productListingDispatch({
                  type: CATEGORY,
                  payload: "skiingandsnowboarding",
                });
              }}
            />
            <span className="checkmark"></span>
          </label>
          <label className="checkbox-container">
            Rockclimbing and Mountaineering
            <input
              type="checkbox"
              checked={categories.rockclimbingandmountaineering}
              onChange={(e) => {
                productListingDispatch({
                  type: CATEGORY,
                  payload: "rockclimbingandmountaineering",
                });
              }}
            />
            <span className="checkmark"></span>
          </label>
          <label className="checkbox-container">
            Snorkelling and Diving
            <input
              type="checkbox"
              checked={categories.snorkellingdiving}
              onChange={(e) => {
                productListingDispatch({
                  type: CATEGORY,
                  payload: "snorkellingdiving",
                });
              }}
            />
            <span className="checkmark"></span>
          </label>
        </div>
        <div className="filter-type flex-column margin-top-16">
          <h3 className="text-bold-weight">Rating</h3>
          <label className="radio-container">
            <input
              type="radio"
              name="key"
              checked={rating === 4}
              onChange={(e) => {
                productListingDispatch({
                  type: RATING,
                  payload: 4,
                });
              }}
            />
            <span>4 Stars & above</span>
          </label>
          <label className="radio-container">
            <input
              type="radio"
              name="key"
              checked={rating === 3}
              onChange={(e) => {
                productListingDispatch({
                  type: RATING,
                  payload: 3,
                });
              }}
            />
            <span>3 Stars & above</span>
          </label>
          <label className="radio-container">
            <input
              type="radio"
              name="key"
              checked={rating === 2}
              onChange={(e) => {
                productListingDispatch({
                  type: RATING,
                  payload: 2,
                });
              }}
            />
            <span>2 Stars & above</span>
          </label>
          <label className="radio-container">
            <input
              type="radio"
              name="key"
              checked={rating === 1}
              onChange={(e) => {
                productListingDispatch({
                  type: RATING,
                  payload: 1,
                });
              }}
            />
            <span>1 Star & above</span>
          </label>
        </div>
        <div className="filter-type flex-column margin-top-16">
          <h3 className="text-bold-weight">Sort by</h3>
          <label className="radio-container">
            <input
              type="radio"
              name="key"
              value="value"
              checked={sortBy === LOW_TO_HIGH}
              onChange={() => productListingDispatch({ type: LOW_TO_HIGH })}
            />
            <span>Price - Low to High</span>
          </label>
          <label className="radio-container">
            <input
              type="radio"
              name="key"
              value="value"
              checked={sortBy === HIGH_TO_LOW}
              onChange={() => productListingDispatch({ type: HIGH_TO_LOW })}
            />
            <span>Price - High to Low</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
