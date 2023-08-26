import React from "react";
import classes from "./ThirdPairRadioButton.module.css";

const ThirdPairRadioButton = () => {
  return (
    <div>
    <div style={{display:"flex"}}>
    <div className={classes.radio}>
      <input type="radio" name="1pair"  />
    </div>
    <div  className={classes.radioPrice}>
      <p style={{marginBottom:"0rem"}}> 3 Pair </p>
      <h5 style={{marginTop:"0rem"}}>DKK 528.00</h5>
    </div>
    </div>
    
  </div>
  );
};

export default ThirdPairRadioButton;
