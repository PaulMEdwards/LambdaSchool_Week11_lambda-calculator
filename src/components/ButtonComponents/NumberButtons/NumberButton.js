import React from "react";

export const NumberButton = (props) => {
  const { number, clickHandler, setNumberState } = props;
  const buttonClass = () => { return number === "0" ? "button-number-zero" : "button-number"; };

  return (
    <button onClick={clickHandler(number)} className={buttonClass}>
      {/* Display a button element rendering the data being passed down from the parent container on props. */}
      {number}
    </button>
  );
};

export default NumberButton;