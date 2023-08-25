import React from "react";
import classes from "./LabelColorSize.module.css";
import SizeLabel from "../Size/sizeLabel/SizeLabel";
import ColorLabel from "../Color/colorLabel/ColorLabel";

const LabelColorSize = () => {
  return (
    <div className={classes.LabelColorSize}>
      <SizeLabel />
      <ColorLabel />
    </div>
  );
};

export default LabelColorSize;
