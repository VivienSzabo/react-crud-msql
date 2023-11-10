import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import apiUrl from '../api';

function EditUser() {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    name: "",
    email: "",
    mobile: "",
  });
  const { id } = useParams();

  useEffect(() => {
    function getUser() {
      axios
        .get(`${apiUrl}/user/${id}`)
        .then((response) => {
          console.log(response.data);
          setValues({ ...response.data[0] });
        })
        .catch((error) => {
          console.error(error);
        });
    }
  
    getUser();
  }, [id]);
  

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setValues((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .put(`${apiUrl}/user/${id}/edit`, values)
      .then((response) => {
        navigate("/");
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <h1>Edit</h1>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input
          value={values.name}
          type="text"
          name="name"
          onChange={handleChange}
        />
        <br />
        <label>Email:</label>
        <input
          value={values.email}
          type="email"
          name="email"
          onChange={handleChange}
        />
        <br />
        <label>Mobile:</label>
        <input
          value={values.mobile}
          type="text"
          name="mobile"
          onChange={handleChange}
        />
        <br />

        <button>Save</button>
      </form>
    </div>
  );
}

export default EditUser;
