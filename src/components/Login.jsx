import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const Login = () => {
  let [loginUser, setLoginUser] = useState({
    email: "",
    password: "",
  });
  let [registredUser, setRegisteredUser] = useState(null);

  let navigate = useNavigate()

  useEffect(() => {
    async function fetchUsers() {
      let { data } = await axios.get("http://localhost:5000/users");
      console.log(data);
      setRegisteredUser(data);
    }
    fetchUsers();
  }, []);

  let handleChange = (e) => {
    let { name, value } = e.target;
    setLoginUser({ ...loginUser, [name]: value });
  };

  function handleSubmit(e) {
    e.preventDefault();
    console.log(loginUser); //{}
    console.log(registredUser); //[{},{},{}.....]

    let authUser = registredUser.find((user) => {
      return (
        user.email === loginUser.email && user.password === loginUser.password
      );
    });

    console.log(authUser);

    if (authUser) {
      navigate("/profile")
    }else{
      navigate("/register")
    }
  }
  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="email">Email</label>

        <input
          type="text"
          placeholder="enter email"
          value={loginUser.email}
          onChange={handleChange}
          name="email"
        />
        <br />
        <br />
        <label htmlFor="password">Password</label>
        <input
          type="password"
          placeholder="enter password"
          value={loginUser.password}
          onChange={handleChange}
          name="password"
        />
        <br />
        <br />
        <input type="submit" value="login" />
      </form>
    </div>
  );
};

export default Login;
