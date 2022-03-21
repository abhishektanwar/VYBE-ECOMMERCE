import React from "react";
import ProductCard from "../../components/ProductCard";
import TicketContainer from "../../components/TicketContainer";
import "./cart.css";
const Cart = () => {
  const imageUrl = "https://picsum.photos/200/300";

  return (
    <div>
      <div className="cart-container flex-row flex-justify-content-center">
        <div className="product-list-container flex-column">
          <ProductCard
            cartActionBtnContainer={false}
            imagePath={imageUrl}
            variant="horizontal"
            badgeText={"New Arrival"}
            title={"One ear 100 headphones black"}
            price={1890}
            actualPrice={2099}
            discountPercentage={10}
          />
          <ProductCard
            cartActionBtnContainer={false}
            imagePath={imageUrl}
            variant="horizontal"
            badgeText={"New Arrival"}
            title={"One ear 100 headphones black"}
            price={1890}
            actualPrice={2099}
            discountPercentage={10}
          />
          <ProductCard
            cartActionBtnContainer={false}
            imagePath={imageUrl}
            variant="horizontal"
            badgeText={"New Arrival"}
            title={"One ear 100 headphones black"}
            price={1890}
            actualPrice={2099}
            discountPercentage={10}
          />
          <ProductCard
            cartActionBtnContainer={false}
            imagePath={imageUrl}
            variant="horizontal"
            badgeText={"New Arrival"}
            title={"One ear 100 headphones black"}
            price={1890}
            actualPrice={2099}
            discountPercentage={10}
          />
        </div>
        <TicketContainer />
        </div>
      </div>
    
  );
};

export default Cart;
