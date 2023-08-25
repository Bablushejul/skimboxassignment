import React from "react";
import classes from "./FirstPairButton.module.css";
import FirstPairRadioButton from "./firstpairRadioButton/FirstPairRadioButton";
import FirstPairOffer from "../firstpairOffer/FirstPairOffer";

const FirstPairButton = () => {
  return (
    <div className={classes.header}>
      <FirstPairRadioButton />
      <FirstPairOffer />
    </div>
  );
};

export default FirstPairButton;
