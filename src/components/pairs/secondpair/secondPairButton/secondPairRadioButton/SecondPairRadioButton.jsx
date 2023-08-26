import React from "react";
import classes from "./SecondPairradioButton.module.css";

const SecondPairRadioButton = () => {
  return (
    <div>
    <div style={{display:"flex"}}>
    <div className={classes.radio}>
      <input type="radio" name="1pair"  />
    </div>
    <div  className={classes.radioPrice}>
      <p style={{marginBottom:"0rem"}}> 1 Pair </p>
      <h5 style={{marginTop:"0rem"}}>DKK 195.00</h5>
    </div>
    </div>
    
  </div>
  );
};

export default SecondPairRadioButton;
