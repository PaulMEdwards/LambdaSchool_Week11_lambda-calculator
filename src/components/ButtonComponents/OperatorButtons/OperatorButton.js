import React from "react";

export const OperatorButton = (props) => {
  const { operatorChar, operatorValue, clickHandler } = props;

  return (
    <button onClick={clickHandler(operatorChar)} className={"button-operator"}>
      {/* Display a button element rendering the data being passed down from the parent container on props. */}
      {operatorValue}
    </button>
  );
};

export default OperatorButton;
