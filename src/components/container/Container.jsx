import React from "react";
import classes from "./Container.module.css";

const Container = () => {
  return (
    <div className={classes.Container}>
      <div className={classes.Containerone}>
        <h5>Free 2 Days Shipping </h5>
      </div>
      <div>
        <h5>Total : DKK 360.00 </h5>
      </div>
    </div>
  );
};

export default Container;
