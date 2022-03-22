import React, { useContext, useState } from "react";
import { useAuth } from "../../Contexts/AuthDialogContext";
import { useAuthDialog } from "../../Contexts/AuthDialogContext/useAuthDialog";
import { useModal } from "../../Contexts/ModalContext";
import utils from "../../utils";
import BadgeIconButton from "./BadgeIconButton";
import Button from "./Button";
import Logo from "./Logo";
import SearchBar from "./SearchBar";

const Header = () => {
  const {setAuthType,logoutHandler,user} = useAuth();
  const {showModal} = useModal()
  const handleLoginBtnClick = () => {
    showModal();
    setAuthType('login')
  }
  return (
    <>
      <Logo />
      <SearchBar />
      <div className="nav-section">
        <BadgeIconButton
          badgeIconButtonWrapper={"badge-icon-button-wrapper"}
          badgeNumber={2}
          icon={"far fa-heart"}
        />

        <BadgeIconButton
          badgeIconButtonWrapper={"badge-icon-button-wrapper"}
          badgeNumber={2}
          icon={"fas fa-shopping-cart badge-icon-class"}
          onClick={() => {}}
        />

        <Button
          buttonText={user ? "Logout" : "Login"}
          buttonStyle={"headerButton typo-sm"}
          onClick={()=> user ? logoutHandler() : handleLoginBtnClick() }
        />
      </div>
    </>
  );
};

export default Header;
