import React from "react";
import classes from "./SecondPair.module.css";
import SecondPairButton from "./secondPairButton/SecondPairButton";
import ContentForm from "./contentForm/ContentForm";

const SecondPair = () => {
  return (
    <div className={classes.secondpair}>
      <SecondPairButton />
      <ContentForm />
    </div>
  );
};

export default SecondPair;
