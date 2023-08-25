import React from "react";
import classes from "./ThirdPairButton.module.css";
import ThirdPairRadioButton from "./thirdPairRadioButton/ThirdPairRadioButton";
import ThirdPairOffer from "../thirdPairOffer/ThirdPairOffer";

const ThirdPairButton = () => {
  return (
    <div className={classes.header}>
      <ThirdPairRadioButton />
      <ThirdPairOffer />
    </div>
  );
};

export default ThirdPairButton;
