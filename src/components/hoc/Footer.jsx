import React from "react";
import HOC from "./HOC";
const Footer = (x) => {
  console.log(x);

  return (
    <div>
      <h1>I am Footer Compo</h1>
    </div>
  );
};

export default HOC(Footer);
