import React from "react";
import { memo } from "react";
const ChildA = ({ display }) => {
  console.log("i am Child A");

  return <div></div>;
};

export default memo(ChildA);
