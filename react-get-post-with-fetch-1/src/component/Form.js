import React, { useReducer, useState } from 'react';


const formReducer = (state, event) => {
 return {
   ...state,
   [event.name]: event.value
 }
}

export default function Form(props) {
  const [formData, setFormData] = useReducer(formReducer, {});

  const handleSubmit = event => {
    event.preventDefault();
    props.onSubmitForm(formData);
  }

  const handleChange = event => {
    setFormData({
      name: event.target.name,
      value: event.target.value,
    });
  }


  return(
    <div className="wrapper">
      <h1>Person List</h1>

      <form onSubmit={handleSubmit}>
        <fieldset>
          <label>
            <p>First Name</p>
            <input name="firstName" onChange={handleChange}/>
          </label>

          <label>
            <p>Last Name</p>
            <input name="lastName" onChange={handleChange}/>
          </label>

          <label>
            <p>Gender</p>
            <input name="gender" onChange={handleChange}/>
          </label>

          <label>
            <p>Birthday</p>
            <input name="birthday" type="date" onChange={handleChange}/>
          </label>

          <label>
            <p>Email</p>
            <input name="email" type="email" onChange={handleChange}/>
          </label>

          <label>
            <p>Password</p>
            <input name="password" type="password" onChange={handleChange}/>
          </label>

          <label>
            <p>About</p>
            <textarea name="about" onChange={handleChange}></textarea>
          </label>


        </fieldset>
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}

