import React from "react";
import HOC from "./HOC";
const Card = (x) => {
  console.log(x);

  return (
    <div>
      <h1>I am Card Compo</h1>
    </div>
  );
};

export default HOC(Card);
