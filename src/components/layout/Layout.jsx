import React from "react";
import classes from "./Layout.module.css";
import FirstPair from "../pairs/firstpair/FirstPair";
import SecondPair from "../pairs/secondpair/SecondPair";
import ThirdPair from "../pairs/thirdpair/ThirdPair";
import Bundle from "../bundle/Bundle";
import Container from "../container/Container";

const Layout = () => {
  return (
    <div className={classes.pairs}>
      <Bundle />
      <FirstPair />
      <SecondPair />
      <ThirdPair />
      <Container />
      <button> + Add To Cart</button>
    </div>
  );
};

export default Layout;
