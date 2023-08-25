import React from "react";
import ColorList from "../colorList/ColorList";

const ColorLabel = () => {
  return (
    <div>
      <label htmlFor="size">
        color <ColorList />
      </label>
    </div>
  );
};

export default ColorLabel;
