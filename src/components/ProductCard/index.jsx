import React from "react";
import Button from "../Header/Button";
import "./product-card.css";
// imagePath={imageUrl} badgeText={'New Arrival'} title = {'One ear 100 headphones black'} price={1890} actualPrice={2099} discountPercentage={10} 
const ProductCard = ({variant,product,cartActionBtnContainer}) => {
  const {
    _id,
    title,
    description,
    image,
    imgAlt,
    price,
    seller,
    rating,
    category,
    badgeText,
    referenceId
  } = product;
  if (variant === "horizontal") {
    return (
      <div class="horizontal-card default-container margin-trb-16">
        <div class="image-container badge-container">
          <img
            src={image}
            loading="lazy"
            alt={imgAlt}
            class="responsive-img image-container"
          />
          {badgeText.text && (
            <span class="badge primary-card-badge text-bold-weight" style={{backgroundColor: badgeText.bg === 'secondary' ? 'yellow' : badgeText.bg==='tertiary' ? 'orange' : null}}>
              {badgeText.text}
            </span>
          )}
        </div>

        <div class="card-text-container horizontal-card-text-container">
          <div className="flex-column">
            <div>
              <h6 class="text-light-weight wrap-word">{title}</h6>
              <p class="body-typo-sm">
                <small class="body-typo-xs text-light-weight secondary-text-color">
                  Referende Id:{referenceId}
                </small>
              </p>
            </div>
            <div class="text-container-description">
              <p class="typo-xs text-bold-weight">
                {`${price.current} `}
                {price.old && (
                  <span class="text-light-weight">
                    <span class="typo-strike-through body-typo-sm">
                      Rs.{price.old}
                    </span>
                    <span class="primary-text-color"> {price.old-price.current}</span>
                  </span>
                )}
              </p>
            </div>
            {cartActionBtnContainer ? (
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
                />{" "}
                |
                <Button
                  buttonText={"Move to wishlist"}
                  buttonStyle="btn-filled-primary secondary-button body-typo-sm"
                />
              </div>
            ) : null}
          </div>
          {!cartActionBtnContainer ? (
            <div
              class="card-action-btn-container horizontal-card-action-btn-container"
              // style={{ marginLeft: "auto" }}
            >
              <Button
                buttonText={"Add to Cart"}
                buttonStyle="margin-trb-16 btn btn-filled-primary"
              />
              <Button
                buttonText={"Delete"}
                buttonStyle="margin-trb-16 btn btn-outline-primary"
              />
            </div>
          ) : null}
        </div>
      </div>
    );
  }
  return (
    <div class="vertical-card flex-column margin-trb-20">
      <div class="image-container badge-container">
        <img
          src={image}
          loading="lazy"
          alt={imgAlt}
          class="responsive-img image-container"
        />
        {/* {badgeText && (
          <span class="badge primary-card-badge text-bold-weight">
            {badgeText}
          </span>
        )} */}
        {badgeText.text && (
            <span class="badge primary-card-badge text-bold-weight" style={{backgroundColor: badgeText.bg === 'secondary' ? 'yellow' : badgeText.bg==='tertiary' ? 'orange' : null}}>
              {badgeText.text}
            </span>
          )}
      </div>
      
      <div class="card-text-container flex-column margin-top-20">
        <div class="flex-row flex-align-item-center">
          <h6 class="text-medium-weight body-typo-md wrap-word">{title}</h6>
          <button href="#" class="favorite-btn">
            <span>
              <i class="far fa-heart"></i>
            </span>
          </button>
          <span className="product-rating">
            {rating}/5
          </span>
        </div>
        <div class="text-container-description">
          <p class="typo-xs text-bold-weight">
            {`${price.current} `}
            {price.old && (
              <span class="text-light-weight">
                <span class="typo-strike-through body-typo-sm">Rs.{price.old}</span>
                <span class="primary-text-color"> {price.old - price.current}</span>
              </span>
            )}
          </p>
        </div>

        <div class="card-action-btn-container">
          <Button
            buttonText={"Add to Cart"}
            buttonStyle="margin-trb-16 btn btn-filled-primary width-100"
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
