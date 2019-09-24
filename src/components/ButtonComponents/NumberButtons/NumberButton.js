import React from "react";

export const NumberButton = (props) => {
  const { number, clickHandler, setNumberState } = props;
  const setClassZero = () => { return number === "0" ? "button-number-zero" : ""; };
  const buttonClass = setClassZero();

  return (
    <button onClick={clickHandler(number)} className={`button button-number `+buttonClass}>
      {/* Display a button element rendering the data being passed down from the parent container on props. */}
      {number}
    </button>
  );
};

export default NumberButton;