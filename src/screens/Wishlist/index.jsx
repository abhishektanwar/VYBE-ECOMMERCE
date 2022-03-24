import React from "react";
import PageHeroHeader from "../../components/PageHeroHeader";
import ProductCard from "../../components/ProductCard";
import { useWishlist } from "../../Contexts/WishlistContext";
import {useNavigate} from 'react-router-dom'
import "./wishlist.css";
import Button from "../../components/Header/Button";
const Wishlist = () => {
  const { wishlistProducts, isWishlistLoading, wishlistError } = useWishlist();
  const navigate = useNavigate();
  return (
    <div>
      {/* <PageHeroHeader title={"Your wishlist"} /> */}
      {isWishlistLoading && <h1 className="margin-top-60">Loading...</h1>}
        {wishlistError.errorExists && (
          <h1 className="invalid-field-color margin-top-60">
            {wishlistError.errorMessage}
          </h1>
        )}
      {wishlistProducts.length > 0 ?
      <section className="wishlist-container margin-top-60">
        
        {wishlistProducts.map((product, index) => {
          return (
            <ProductCard
              variant="horizontal"
              cartActionBtnContainer={false}
              product={product}
              key={product._id}
            />
          );
        })}
      </section> : 
      <div className="flex-column flex-align-item-center flex-justify-content-center margin-top-60">
      <h2>Your cart is empty!</h2>
      <Button buttonText="Start Shopping" onClick={()=>navigate('/products')}></Button>
    </div>}
    </div>
  );
};

export default Wishlist;
