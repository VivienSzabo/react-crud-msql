import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import apiUrl from '../api';


function ListUser() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getUsers();
  }, []);

  function getUsers() {
    axios
      .get(apiUrl+'/user')
      .then((response) => {
        console.log(response.data);
        setUsers(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }

  function deleteUser(id) {
    axios
      .delete(`${apiUrl}/user/${id}/delete`)
      .then((response) => {
        console.log(response.data);
        getUsers();
      })
      .catch((error) => {
        console.error(error);
      });
  }





  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Mobile</th>
            <th>Actions</th>
          </tr>
        </thead>

        <tbody>
        {Array.isArray(users) && users.length > 0 ? (
            users.map((user, key) => (
              <tr key={key}>
                <td>{user.id}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.mobile}</td>
                <td>
                  <Link to={`user/${user.id}/edit`} style={{marginRight:"10px"}}>Edit</Link>
                  <button onClick={() => deleteUser(user.id)}>Delete</button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="5">Nincs elérhető adat.</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}

export default ListUser;
