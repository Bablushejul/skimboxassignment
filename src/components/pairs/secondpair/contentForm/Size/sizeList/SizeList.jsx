import React from "react";
import classes from "./SizeList.module.css";

const SizeList = () => {
  return (
    <div className={classes.SizeList}>
      <select>
        <option>S</option>
        <option>L</option>
        <option>M</option>
      </select>
    </div>
  );
};

export default SizeList;
