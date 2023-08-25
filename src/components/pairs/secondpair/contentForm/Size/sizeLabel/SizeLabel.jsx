import React from "react";
import SizeList from "../sizeList/SizeList";

const SizeLabel = () => {
  return (
    <div>
      <label htmlFor="size">
        size <SizeList />
      </label>
    </div>
  );
};

export default SizeLabel;
