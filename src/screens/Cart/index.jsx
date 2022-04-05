import React from "react";
import Button from "../../components/Header/Button";
import ProductCard from "../../components/ProductCard";
import TicketContainer from "../../components/TicketContainer";
import { useCart } from "../../Contexts/CartContext";
import { useNavigate } from "react-router-dom";
import { useDocumentTitle } from "../../helpers/helpers";
import "./cart.css";
const Cart = () => {
  const { cartProducts, isCartLoading, cartError } = useCart();
  const navigate = useNavigate();
  useDocumentTitle("Trek Shark | Cart");
  
  return (
    <div>
      {isCartLoading && <h1 className="margin-top-60">Loading...</h1>}
      {cartError.errorExists && (
        <h1 className="invalid-field-color margin-top-60">
          {cartError.errorMessage}
        </h1>
      )}
      {cartProducts.length > 0 ? (
        <div className="cart-container flex-row flex-justify-content-center">
          <div className="product-list-container flex-column">
            {cartProducts.map((product, index) => {
              return (
                <ProductCard
                  variant="horizontal"
                  cartActionBtnContainer={true}
                  product={product}
                  key={product._id}
                />
              );
            })}
          </div>
          <TicketContainer />
        </div>
      ) : (
        <div className="flex-column flex-align-item-center flex-justify-content-center margin-top-60">
          <h2>Your cart is empty!</h2>
          <Button
            buttonText="Start Shopping"
            onClick={() => navigate("/products")}
          ></Button>
        </div>
      )}
    </div>
  );
};

export default Cart;
