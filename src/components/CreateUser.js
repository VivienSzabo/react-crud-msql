import React, { useState } from "react";

function CreateUser() {
  const [values, setValues] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setValues((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(values);
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
