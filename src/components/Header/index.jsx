import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../Contexts/AuthDialogContext";
import { useModal } from "../../Contexts/ModalContext";
import { useWishlist } from "../../Contexts/WishlistContext";
import utils from "../../utils";
import BadgeIconButton from "./BadgeIconButton";
import Button from "./Button";
import Logo from "./Logo";
import SearchBar from "./SearchBar";
import {useNavigate} from 'react-router-dom'
import { useCart } from "../../Contexts/CartContext";

const Header = () => {
  const { setAuthType, logoutHandler, user } = useAuth();
  const { showModal } = useModal();
  const {wishlistProducts}= useWishlist();
  const {cartProducts} = useCart();
  const navigate = useNavigate();
  
  const handleLoginBtnClick = () => {
    showModal();
    setAuthType("login");
  };
  return (
    <>
      <Link to="/">
        <Logo />
      </Link>
      <SearchBar />
      <div className="nav-section">

        <BadgeIconButton
          badgeIconButtonWrapper={"badge-icon-button-wrapper"}
          badgeNumber={wishlistProducts.length}
          icon={"far fa-heart"}
          onClick={()=> user.isAuthenticated ? navigate('/wishlist') : handleLoginBtnClick()}
        />

        <BadgeIconButton
          badgeIconButtonWrapper={"badge-icon-button-wrapper"}
          badgeNumber={cartProducts.length}
          icon={"fas fa-shopping-cart badge-icon-class"}
          onClick={()=> user.isAuthenticated ? navigate('/cart') : handleLoginBtnClick()}
        />

        <Button
          buttonText={user.isAuthenticated ? "Logout" : "Login"}
          buttonStyle={"headerButton typo-sm"}
          onClick={() => (user.isAuthenticated ? logoutHandler() : handleLoginBtnClick())}
        />
      </div>
    </>
  );
};

export default Header;
