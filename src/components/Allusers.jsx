import axios from "axios";
import React, { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const Allusers = () => {
  let [users, setUsers] = useState(null);
  let navigate = useNavigate()
  useEffect(() => {
    async function fetchUsers() {
      try {
        let { data } = await axios.get("http://localhost:5000/users");
        console.log(data);
        setUsers(data);
      } catch (error) {
        console.log(error);
      }
    }
    fetchUsers();
  }, []);

  function deleteUser(id) {
    console.log(id);
    try {
      axios.delete(`http://localhost:5000/users/${id}`).then(() => {
        toast.success("user deleted");
        window.location.reload()
      });
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div>
      <h1>All Users</h1>

      <section>
        {users?.map((user) => {
          let { id, username, email } = user;
          return (
            <article key={id}>
              <h5>ID {id}</h5>
              <h1>Name {username}</h1>
              <p>Email {email}</p>
              <div>
                <button>edit</button>
                <button onClick={() => deleteUser(id)}>delete</button>
              </div>
            </article>
          );
        })}
      </section>
    </div>
  );
};

export default Allusers;
