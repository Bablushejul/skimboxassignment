import React from "react";
import classes from "./SecondPairButton.module.css";
import SecondPairRadioButton from "./secondPairRadioButton/SecondPairRadioButton";
import SecondPairOffer from "./secondPairOffer/SecondPairOffer";

const SecondPairButton = () => {
  return (
    <div className={classes.header}>
      <SecondPairRadioButton />
      <SecondPairOffer />
    </div>
  );
};

export default SecondPairButton;
