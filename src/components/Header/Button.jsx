import React from "react";

const Button = (props) => {
  const { buttonText, buttonStyle, onClick, icon } = props;
  return (
    <button
      onClick={onClick}
      class={`margin-trb-16 btn btn-filled-primary ${buttonStyle}`}
    >
      {icon ? <i className={icon}></i> : null}
      {" "}
      {buttonText}
    </button>
  );
};

export default Button;
