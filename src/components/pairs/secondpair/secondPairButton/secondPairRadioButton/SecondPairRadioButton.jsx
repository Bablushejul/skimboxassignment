import React from "react";
import classes from "./SecondPairradioButton.module.css";

const SecondPairRadioButton = () => {
  return (
    <div>
      <input type="radio" name="1pair" className={classes.radio} />
      <label> 2 Pair </label>
      <h5 className={classes.radioPrice}>DKK 345.00</h5>
    </div>
  );
};

export default SecondPairRadioButton;
