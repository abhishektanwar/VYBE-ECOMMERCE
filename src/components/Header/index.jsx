import React from "react";
import BadgeIconButton from "./BadgeIconButton";
import Button from "./Button";
import Logo from "./Logo";
import SearchBar from "./SearchBar";

const Header = () => {
  return (
    <>
      <Logo />
      <SearchBar />
      <div className="nav-section">
        <BadgeIconButton
          badgeIconButtonWrapper={"badge-icon-button-wrapper"}
          badgeNumber={2}
          icon={"far fa-heart"}
          onClick={() => {
            console.log("a");
          }}
        />

        <BadgeIconButton
          badgeIconButtonWrapper={"badge-icon-button-wrapper"}
          badgeNumber={2}
          icon={"fas fa-shopping-cart badge-icon-class"}
          onClick={() => {}}
        />

        <Button
          buttonText={"Login"}
          buttonStyle={"headerButton typo-sm"}
          onClick={() => {}}
        />
      </div>
    </>
  );
};

export default Header;
