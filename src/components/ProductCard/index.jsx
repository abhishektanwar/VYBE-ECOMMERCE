import axios from "axios";
import React, { useEffect, useState } from "react";
import { useWishlist } from "../../Contexts/WishlistContext";
import utils from "../../utils";
import Button from "../Header/Button";
import { toast } from "react-toastify";
import "./product-card.css";
import { useAuth } from "../../Contexts/AuthDialogContext";
import { useModal } from "../../Contexts/ModalContext";
import { useLocation } from "react-router-dom";
import { useCart } from "../../Contexts/CartContext";
import { useNavigate } from "react-router-dom";
const ProductCard = ({ variant, product, cartActionBtnContainer }) => {
  const [addingToWishList, setAddingToWishlist] = useState(false);
  const { wishlistProducts, setWishlistProducts } = useWishlist();
  const [removingFromWishlist, setRemovingFromWishlist] = useState(false);
  const [inWishlist, setInWishlist] = useState(false);
  const [inCart, setInCart] = useState(false);
  const { user, setAuthType } = useAuth();
  const { showModal } = useModal();
  const [addingToCart, setAddingToCart] = useState(false);
  const location = useLocation();
  const { cartProducts, setCartProducts } = useCart();
  const navigate = useNavigate();
  console.log("location", location.pathname);

  const handleLogin = () => {
    showModal();
    setAuthType("login");
  };
  const addToWishlistServerCall = async () => {
    setAddingToWishlist(true);
    try {
      // const res = await addToWishlistService(product, auth.token);
      const res = await axios.post(
        "/api/user/wishlist",
        { product },
        { headers: { authorization: utils.getLocalStorage("authToken") } }
      );
      if (res.status === 201) {
        console.log(res);
        toast.success("Added to wishlist");
        setAddingToWishlist(false);
        setWishlistProducts([...res.data.wishlist]);
      }
    } catch (err) {
      toast.error("Couldn't add to wishlist , try again later!");
    }
  };

  const removeProductWishlistServerCall = async () => {
    setRemovingFromWishlist(true);
    try {
      const res = await axios.delete(`/api/user/wishlist/${product._id}`, {
        headers: { authorization: utils.getLocalStorage("authToken") },
      });
      console.log("removal ", res);
      if (res.status === 200) {
        toast.success("Removed from wishlist");
        setRemovingFromWishlist(false);
        console.log(res);
        setWishlistProducts([...res.data.wishlist]);
      }
    } catch (err) {
      toast.error("Please try again after some time");
    }
  };
  const removeFromCartServerCall = async () => {
    setAddingToCart(true);
    try {
      const res = await axios.delete(`/api/user/cart/${product._id}`, {
        headers: { authorization: utils.getLocalStorage("authToken") },
      });

      if (res.status === 200) {
        toast.success("removed from cart");
        setAddingToCart(false);
        // setCart((prev) => ({ ...prev, cartProducts: res.data.cart }));
        setCartProducts([...res.data.cart]);
      }
    } catch (err) {
      toast.error("Couldn't add to cart , try again later!");
    }
  };

  const addToCartServerCall = async () => {
    setAddingToCart(true);
    try {
      const res = await axios.post(
        "/api/user/cart",
        { product },
        { headers: { authorization: utils.getLocalStorage("authToken") } }
      );

      if (res.status === 201) {
        toast.success("Added to cart");
        setAddingToCart(false);
        // setCart((prev) => ({ ...prev, cartProducts: res.data.cart }));
        setCartProducts([...res.data.cart]);
      }
    } catch (err) {
      toast.error("Couldn't add to cart , try again later!");
    }
  };

  // export const cartCounterService = async (productId, token, type) => {
  //   return await axios.post(
  //     `/api/user/cart/${productId}`,
  //     { action: { type } },
  //     { headers: { authorization: token } }
  //   );
  // };

  // export const removeProductCartService = async (productId, token) => {
  //   return await axios.delete(`/api/user/cart/${productId}`, {
  //     headers: { authorization: token },
  //   });
  // };

  const cartCounterServerCall = async (operation) => {
    let res = null;
    // setUpdatingCart(true);

    try {
      if (product.qty === 1 && operation === "decrement") {
        res = await axios.delete(`/api/user/cart/${product._id}`,{headers:{authorization:utils.getLocalStorage('authToken')}});
      } else {
        res = await axios.post(`/api/user/cart/${product._id}`,{action:{type:operation}},{headers:{authorization:utils.getLocalStorage('authToken')}});
      }

      console.log("increment", res.data.cart);
      if (res.status === 200) {
        // setUpdatingCart(false);
        toast.success("Successfully Updated cart");
        setCartProducts([...res.data.cart ]);
      }
    } catch (err) {
      toast.error("Could not update cart, try again later");
    }
  };
  // const findProduct = (product) => {
  //   const found = wishlist.wishlistProducts.find(
  //     (item) => item._id === product._id
  //   );
  //   found ? toast.info("Item already in wishlist") : addToWishlistServerCall();
  // };

  const handleMoveToWishlist = () => {
    removeFromCartServerCall();
    addToWishlistServerCall();
  };

  const handleMoveToCart = () => {
    removeProductWishlistServerCall();
    addToCartServerCall();
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
                  <button className="quantity-btn" onClick={()=>{cartCounterServerCall("decrement")}}>-</button>{" "}
                  <input
                    type="number"
                    name="product-quantity"
                    id="product-qyantity"
                    value={product.qty}
                    style={{width:'3rem'}}
                  />
                  <button class="quantity-btn" onClick={()=>{cartCounterServerCall("increment")}}>+</button>
                </div>
                |
                <Button
                  buttonText={"Delete"}
                  buttonStyle="btn-filled-primary secondary-button body-typo-sm"
                  onClick={() => removeFromCartServerCall()}
                />{" "}
                |
                <Button
                  buttonText={"Move to wishlist"}
                  buttonStyle="btn-filled-primary secondary-button body-typo-sm"
                  onClick={() => handleMoveToWishlist()}
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
                  user
                    ? inCart
                      ? navigate("/cart")
                      : handleMoveToCart()
                    : handleLogin()
                }
              />
              <Button
                buttonText={"Remove from Wishlist"}
                buttonStyle="margin-trb-16 btn btn-outline-primary"
                onClick={() => removeProductWishlistServerCall()}
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
              user
                ? inWishlist
                  ? removeProductWishlistServerCall()
                  : addToWishlistServerCall()
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
                <span class="primary-text-color"> {parseInt()}%</span>
              </span>
            )}
          </p>
        </div>

        <div class="card-action-btn-container">
          <Button
            buttonText={inCart ? "Go to Cart" : "Add to Cart"}
            buttonStyle="margin-trb-16 btn btn-filled-primary width-100"
            onClick={() =>
              user
                ? inCart
                  ? navigate("/cart")
                  : addToCartServerCall()
                : handleLogin()
            }
          />
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
