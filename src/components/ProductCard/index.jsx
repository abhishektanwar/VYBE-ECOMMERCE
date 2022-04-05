import React, { useEffect, useState } from "react";
import { useWishlist } from "../../Contexts/WishlistContext";
import Button from "../Header/Button";
import "./product-card.css";
import { useAuth } from "../../Contexts/AuthDialogContext";
import { useModal } from "../../Contexts/ModalContext";
import { useCart } from "../../Contexts/CartContext";
import { useNavigate } from "react-router-dom";
import useProductCard from "../../Hooks/useProductCard";

const ProductCard = ({ variant, product, cartActionBtnContainer }) => {
  const { wishlistProducts } = useWishlist();
  const [inWishlist, setInWishlist] = useState(false);
  const [inCart, setInCart] = useState(false);
  const { user, setAuthType } = useAuth();
  const { showModal } = useModal();
  const { cartProducts } = useCart();
  const navigate = useNavigate();

  const {
    addProductToWishlist,
    removeProductFromWishlist,
    removeProductFromCart,
    addProductToCart,
    handleProductQuantityInCart,
  } = useProductCard();
  const handleLogin = () => {
    showModal();
    setAuthType("login");
  };

  const handleMoveToWishlist = (product) => {
    removeProductFromCart(product);
    addProductToWishlist(product);
  };

  const handleMoveToCart = (product) => {
    removeProductFromWishlist(product);
    addProductToCart(product);
  };

  useEffect(() => {
    cartProducts.find((item) => item._id === product._id)
      ? setInCart(true)
      : setInCart(false);
    console.log("wishlistProducts", wishlistProducts);
    wishlistProducts.find((item) => item._id === product._id)
      ? setInWishlist(true)
      : setInWishlist(false);
  }, [wishlistProducts, cartProducts]);
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
    referenceId,
  } = product;
  const discount = ((price.old - price.current) / price.old) * 100;
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
            <span
              class="badge primary-card-badge text-bold-weight"
              style={{
                backgroundColor:
                  badgeText.bg === "secondary"
                    ? "yellow"
                    : badgeText.bg === "tertiary"
                    ? "orange"
                    : null,
              }}
            >
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
                    <span class="primary-text-color">
                      {" "}
                      {parseInt(discount)}%
                    </span>
                  </span>
                )}
              </p>
            </div>
            {cartActionBtnContainer ? (
              <div className="cart-action-btn-container">
                <div class="quantity-container flex-row flex-align-item-center margin-top-12">
                  <p class="body-typo-md text-medium-weight">Qty :</p>
                  <button
                    className="quantity-btn"
                    onClick={() => {
                      handleProductQuantityInCart(product, "decrement");
                    }}
                  >
                    -
                  </button>{" "}
                  <input
                    type="number"
                    name="product-quantity"
                    id="product-qyantity"
                    value={product.qty}
                    style={{ width: "3rem" }}
                  />
                  <button
                    class="quantity-btn"
                    onClick={() => {
                      handleProductQuantityInCart(product, "increment");
                    }}
                  >
                    +
                  </button>
                </div>
                |
                <Button
                  buttonText={"Delete"}
                  buttonStyle="btn-filled-primary secondary-button body-typo-sm"
                  onClick={() => removeProductFromCart(product)}
                />{" "}
                |
                <Button
                  buttonText={"Move to wishlist"}
                  buttonStyle="btn-filled-primary secondary-button body-typo-sm"
                  onClick={() => handleMoveToWishlist(product)}
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
                buttonText={inCart ? "Go to cart" : "Add to Cart"}
                buttonStyle="margin-trb-16 btn btn-filled-primary"
                onClick={() =>
                  user.isAuthenticated
                    ? inCart
                      ? navigate("/cart")
                      : handleMoveToCart(product)
                    : handleLogin()
                }
              />
              <Button
                buttonText={"Remove from Wishlist"}
                buttonStyle="margin-trb-16 btn btn-outline-primary"
                onClick={() => removeProductFromWishlist(product)}
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
          <span
            class="badge primary-card-badge text-bold-weight"
            style={{
              backgroundColor:
                badgeText.bg === "secondary"
                  ? "yellow"
                  : badgeText.bg === "tertiary"
                  ? "orange"
                  : null,
            }}
          >
            {badgeText.text}
          </span>
        )}
      </div>

      <div class="card-text-container flex-column margin-top-20">
        <div class="flex-row flex-align-item-center">
          <h6 class="text-medium-weight body-typo-md wrap-word">{title}</h6>
          {inWishlist}
          <button
            class="favorite-btn"
            onClick={() =>
              user.isAuthenticated
                ? inWishlist
                  ? removeProductFromWishlist(product)
                  : addProductToWishlist(product)
                : handleLogin()
            }
          >
            <span>
              {/* <i class="far fa-heart"></i> */}
              <i class={inWishlist ? "fas fa-heart" : "far fa-heart"}></i>
            </span>
          </button>
          <span className="product-rating">{rating}/5</span>
        </div>
        <div class="text-container-description">
          <p class="typo-xs text-bold-weight">
            {`${price.current} `}
            {price.old && (
              <span class="text-light-weight">
                <span class="typo-strike-through body-typo-sm">
                  Rs.{price.old}
                </span>
                <span class="primary-text-color"> {parseInt(discount)}%</span>
              </span>
            )}
          </p>
        </div>

        <div class="card-action-btn-container">
          <Button
            buttonText={inCart ? "Go to Cart" : "Add to Cart"}
            buttonStyle="margin-trb-16 btn btn-filled-primary width-100"
            onClick={() =>
              user.isAuthenticated
                ? inCart
                  ? navigate("/cart")
                  : addProductToCart(product)
                : handleLogin()
            }
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
