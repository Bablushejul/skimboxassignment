import React from "react";
import classes from "./ThirdPairRadioButton.module.css";

const ThirdPairRadioButton = () => {
  return (
    <div>
    <div className={classes.SecondPairRadioButton}>
    <div className={classes.radio}>
      <input type="radio" name="1pair"  />
    </div>
    <div  className={classes.radioPrice}>
      <p className={classes.twopair}> 3 Pair </p>
      <h5 className={classes.price}>DKK 528.00</h5>
    </div>
    </div>
    
  </div>
  );
};

export default ThirdPairRadioButton;
