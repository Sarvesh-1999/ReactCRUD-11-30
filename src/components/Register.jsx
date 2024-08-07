import axios from "axios";
import React, { useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Register = () => {
  let [username, setUsername] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  let navigate = useNavigate();

  let handleUsername = (e) => {
    setUsername(e.target.value);
  };
  let handleEmail = (e) => {
    setEmail(e.target.value);
  };
  let handlePassword = (e) => {
    setPassword(e.target.value);
  };

  let formSubmit = (e) => {
    e.preventDefault();
    console.log(username, email, password);

    let registerUser = {
      username: username,
      email: email,
      password: password,
    };

    console.log(registerUser); //payload

    try {
      if (registerUser.email !== "" && registerUser.password !== "") {
        axios
          .post("http://localhost:5000/users", registerUser)
          .then(() => {
            console.log("data sent succussfully");
            toast.success("registered successfully");
            setUsername("");
            setEmail("");
            setPassword("");

            navigate("/login");
          })
          .catch(() => {
            console.log("something went wrong while sending data");
          });
      } else {
        alert("empty input fields");
      }
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div>
      <form onSubmit={formSubmit}>
        <label htmlFor="username">Username</label>
        <input
          type="text"
          id="username"
          value={username}
          onChange={handleUsername}
        />
        <br />
        <br />
        <label htmlFor="email">Email</label>
        <input type="text" id="email" value={email} onChange={handleEmail} />
        <br />
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          id="password"
          value={password}
          onChange={handlePassword}
        />
        <br />
        <br />
        <input type="submit" value="register" />
      </form>
    </div>
  );
};

export default Register;
