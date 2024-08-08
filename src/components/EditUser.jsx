import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate, useParams } from "react-router-dom";

const EditUser = () => {
  let [edituser, setEditUser] = useState({
    username: "",
    email: "",
    password: "",
  });
  let { userID } = useParams();
  console.log(userID);

  let navigate = useNavigate()

  useEffect(() => {
    async function getUser() {
      let { data } = await axios.get(`http://localhost:5000/users/${userID}`);
      console.log(data);
      setEditUser(data);
    }
    getUser();
  }, []);

  let handleEditUser = (e) => {
    let { name, value } = e.target;
    setEditUser({ ...edituser, [name]: value });
  };

  let formSubmit = (e) => {
    e.preventDefault();
    try {
        axios.put(`http://localhost:5000/users/${userID}`,edituser).then(()=>{
            toast.success("user updated")
            navigate("/allusers")
        }).catch(()=>{
            toast.fail("not updated")
        })
    } catch (error) {
        console.log(error);
        
    }
  };

  return (
    <div>
      <form action="" onSubmit={formSubmit}>
        <h1>Edit User</h1>
        <label htmlFor="">name</label>
        <input
          type="text"
          name="username"
          placeholder="enter name"
          value={edituser.username}
          onChange={handleEditUser}
        />
        <br />
        <br />
        <label htmlFor="">email</label>
        <input
          type="text"
          name="email"
          placeholder="enter email"
          value={edituser.email}
          onChange={handleEditUser}
        />
        <br />
        <br />
        <label htmlFor="">password</label>
        <input
          type="password"
          name="password"
          placeholder="enter password"
          value={edituser.password}
          onChange={handleEditUser}
        />
        <br />
        <br />
        <input type="submit" value="update" />
      </form>
    </div>
  );
};

export default EditUser;
