import React from "react";
import { useContext } from "react";
import { GLOBALDATA } from "../context/Context";
const RegisterUser = () => {
  let { registerUsers,handleSubmit, handleRegisterUsers } = useContext(GLOBALDATA);
  console.log(registerUsers);


  return (
    <div>
      <h1>Register</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="enter email"
          name="email"
          value={registerUsers.email}
          onChange={handleRegisterUsers}
        />
        <br />
        <input
          type="password"
          placeholder="enter password"
          name="password"
          value={registerUsers.password}
          onChange={handleRegisterUsers}

        />
        <br />
        <input type="submit" />
      </form>
    </div>
  );
};

export default RegisterUser;
