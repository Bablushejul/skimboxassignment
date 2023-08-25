import React from "react";
import classes from "./FirstPairRadioButton.module.css";

const FirstPairRadioButton = () => {
  return (
    <div>
      <input type="radio" name="1pair" className={classes.radio} />
      <label> 1 Pair </label>
      <h5 className={classes.radioPrice}>DKK 195.00</h5>
    </div>
  );
};

export default FirstPairRadioButton;
