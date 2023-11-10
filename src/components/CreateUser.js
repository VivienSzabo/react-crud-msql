import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import apiUrl from '../api';

function CreateUser() { 
const navigate = useNavigate();

  const [values, setValues] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setValues((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    axios
      .post(apiUrl+'/user/save', values)
      .then((response) => {
        console.log(response.data);
        navigate('/');
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <label>Name:</label>
        <input type="text" name="name" onChange={handleChange} />
        <br />
        <label>Email:</label>
        <input type="email" name="email" onChange={handleChange} />
        <br />
        <label>Mobile:</label>
        <input type="text" name="mobile" onChange={handleChange} />
        <br />

        <button>Save</button>
      </form>
    </div>
  );
}

export default CreateUser;
