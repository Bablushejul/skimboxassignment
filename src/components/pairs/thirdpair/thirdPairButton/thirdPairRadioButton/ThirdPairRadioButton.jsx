import React from "react";
import classes from "./ThirdPairRadioButton.module.css";

const ThirdPairRadioButton = () => {
  return (
    <div>
      <input type="radio" name="1pair" className={classes.radio} />
      <label> 3 Pair </label>
      <h5 className={classes.radioPrice}>DKK 528.00</h5>
    </div>
  );
};

export default ThirdPairRadioButton;
