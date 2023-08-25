import React from "react";
import classes from "./ColorSize.module.css";
import SizeList from "../Size/sizeList/SizeList";
import ColorList from "../Color/colorList/ColorList";

const ColorSize = () => {
  return (
    <div className={classes.ColorSize}>
      <SizeList />
      <ColorList />
    </div>
  );
};

export default ColorSize;
