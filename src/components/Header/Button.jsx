import React from "react";

const Button = (props) => {
  const { buttonText, buttonStyle, onClick } = props;
  return (
    <button
      onClick={onClick}
      class={`margin-trb-16 btn btn-filled-primary ${buttonStyle}`}
    >
      {buttonText}
    </button>
  );
};

export default Button;
