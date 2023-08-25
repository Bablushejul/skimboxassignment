import React from "react";
import classes from "./SecondPairOffer.module.css";

const SecondPairOffer = () => {
  return (
    <div className={classes.SecondPairOffer}>
      <p className={classes.popular}>Most Popular</p>
      <p className={classes.offer}> 40 % OFF </p>
    </div>
  );
};

export default SecondPairOffer;
