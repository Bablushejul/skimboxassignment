import React from "react";
import classes from "./ColorList.module.css";

const ColorList = () => {
  return (
    <div className={classes.ColorList}>
      <select>
        <option>COLOUR</option>
        <option>RED</option>
        <option>BLUE</option>
      </select>
    </div>
  );
};

export default ColorList;
