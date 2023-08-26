import React from "react";
import classes from "./SecondPairradioButton.module.css";

const SecondPairRadioButton = () => {
  return (
    <div>
    <div className={classes.SecondPairRadioButton}>
    <div className={classes.radio}>
      <input type="radio" name="1pair"  />
    </div>
    <div  className={classes.radioPrice}>
      <p className={classes.twopair}> 2 Pair </p>
      <h5 className={classes.price}>DKK 195.00</h5>
    </div>
    </div>
    
  </div>
  );
};

export default SecondPairRadioButton;
