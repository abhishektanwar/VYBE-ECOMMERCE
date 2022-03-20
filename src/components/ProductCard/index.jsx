import React from "react";
import Button from "../Header/Button";
import "./product-card.css";
const ProductCard = (props) => {
  const {
    imagePath,
    badgeText,
    title,
    price,
    actualPrice,
    discountPercentage,
    variant,
    cartActionBtnContainer,
  } = props;
  if (variant === "horizontal") {
    return (
      <div class="horizontal-card default-container margin-trb-16 shadow-box">
        <div class="image-container badge-container">
          <img
            src={imagePath}
            loading="lazy"
            alt="product-image"
            class="responsive-img image-container"
          />
          <span class="badge primary-card-badge">New Arrival</span>
        </div>

        <div class="card-text-container horizontal-card-text-container">
          <div className="flex-column">
            <div>
              <h6 class="text-light-weight">ONEAR 100 HEADPHONES BLACK</h6>
              <p class="body-typo-sm">
                <small class="body-typo-xs text-light-weight secondary-text-color">
                  Referende Id:7837A7
                </small>
              </p>
            </div>
            <div class="text-container-description">
              <p class="typo-xs text-bold-weight">
                {`${price} `}
                {actualPrice && discountPercentage && (
                  <span class="text-light-weight">
                    <span class="typo-strike-through body-typo-sm">
                      Rs.2099
                    </span>
                    <span class="primary-text-color"> 10%</span>
                  </span>
                )}
              </p>
            </div>
            {cartActionBtnContainer ? 
            <div className="cart-action-btn-container">
              <div className="quantity-selector">
                <label for="quantity" className="body-typo-sm">
                  Qty :{" "}
                </label>
                <select name="quantity" autoComplete="off" id="quantity">
                  <option value="1">1</option>
                  <option value="2">2</option>
                  <option value="3">3</option>
                </select>
              </div>{" "}
              |
              <Button
                buttonText={"Delete"}
                buttonStyle="btn-filled-primary secondary-button body-typo-sm"
              /> | 
              <Button
                buttonText={"Move to wishlist"}
                buttonStyle="btn-filled-primary secondary-button body-typo-sm"
              />
            </div> : null }
          </div>
          {!cartActionBtnContainer ? 
          <div
            class="card-action-btn-container horizontal-card-action-btn-container"
            style={{ marginLeft: "auto" }}
          >
            <button class="margin-trb-16 btn btn-filled-primary">
              Add to Cart
            </button>
            <button class="margin-trb-16 btn btn-outline-primary">
              Delete
            </button>
          </div> : null}
        </div>
      </div>
    );
  }
  return (
    // <div className='product-card-container'>
    //   <div className="product-card-image">
    //     <img src={imageUrl} alt="product-image" />
    //   </div>
    // </div>
    <div class="vertical-card flex-column margin-trb-20">
      <div class="image-container badge-container">
        <img
          src={imagePath}
          loading="lazy"
          alt="product-image"
          class="responsive-img image-container"
        />
        {badgeText && (
          <span class="badge primary-card-badge text-bold-weight">
            {badgeText}
          </span>
        )}
      </div>

      <div class="card-text-container margin-top-20">
          <div class="flex-row flex-align-item-center">
            <h6 class="text-medium-weight body-typo-md">{title}</h6>
            <button href="#" class="favorite-btn">
              <span>
                <i class="far fa-heart"></i>
              </span>
            </button>
          </div>
        <div class="text-container-description">
          <p class="typo-xs text-bold-weight">
            {`${price} `}
            {actualPrice && discountPercentage && (
              <span class="text-light-weight">
                <span class="typo-strike-through body-typo-sm">Rs.2099</span>
                <span class="primary-text-color"> 10%</span>
              </span>
            )}
          </p>
        </div>

        <div class="card-action-btn-container">
          <button
            class="margin-trb-16 btn btn-filled-primary"
            style={{ width: "100%" }}
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
