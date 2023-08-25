import React from "react";
import classes from "./FirstPair.module.css";
import FirstPairButton from "./firstpairButton/FirstPairButton";

const FirstPair = () => {
  return (
    <div className={classes.firstpar}>
      <FirstPairButton />
    </div>
  );
};

export default FirstPair;
