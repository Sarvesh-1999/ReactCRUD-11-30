import React, { useState } from "react";
import { createContext } from "react";

export let GLOBALDATA = createContext();

const Context = (props) => {
  console.log(props);

  let [registerUsers, setRegisterUsers] = useState({
    email: "",
    password: "",
  });

  let handleRegisterUsers = (e) => {
    let { name, value } = e.target;
    setRegisterUsers({ ...registerUsers, [name]: value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(registerUsers);
  };

  return (
    <GLOBALDATA.Provider
      value={{ registerUsers, handleSubmit, handleRegisterUsers }}
    >
      {props.children}
    </GLOBALDATA.Provider>
  );
};

export default Context;
