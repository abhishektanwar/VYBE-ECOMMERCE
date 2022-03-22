import React from "react";
import Button from "../Header/Button";
import "./selected-filter.css";
const SelectedFilter = () => {
  return (
    <div className="selected-filter-container">
      <p className="typo-xs">Selected Filters :</p>
      <Button
        icon="fas fa-times"
        buttonText={"Color"}
        buttonStyle="btn-filled-primary cancel-filter-button"
      />
      <Button
        buttonText={"Clear All"}
        buttonStyle="btn-filled-primary secondary-button "
      />
    </div>
  );
};

export default SelectedFilter;
