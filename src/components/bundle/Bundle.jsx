import React from "react";
import classes from "./Bundle.module.css";

const Bundle = () => {
  return (
    <div className={classes.bundle}>
      <div className={classes.bundleone}></div>
      <h5 className={classes.bundletwo}>Bundle & Save</h5>
      <div className={classes.bundlethree}></div>
    </div>
  );
};

export default Bundle;
