import React from "react";
import classes from "./ContentForm.module.css";
import LabelColorSize from "./withlabel/LabelColorSize";
import ColorSize from "./withoutlabel/ColorSize";

const ContentForm = () => {
  return (
    <div className={classes.ContentForm}>
      <LabelColorSize />
      <ColorSize />
    </div>
  );
};

export default ContentForm;
