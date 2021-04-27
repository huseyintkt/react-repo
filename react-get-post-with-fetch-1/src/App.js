import logo from './logo.svg';
import './App.css';
import React, { useState, useEffect } from 'react';

import Form from './component/Form'
import List from './component/List'




function App() {
  const [list, setList] = useState([]);

  function readPersonListFromBackend(){
    fetch('http://174.138.103.233/api/employees')
         .then(response => response.json())
         .then(data => setList(data));
  }

  function handleFormSubmit(formData){
    fetch("http://174.138.103.233/api/employees", {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(formData)
    })
    .then(() => readPersonListFromBackend())
    .catch(error => console.log(error));
  }

  useEffect(() => {
    readPersonListFromBackend();
  }, []);

  return (
    <div className="App">
      <Form data-testid="form-container" onSubmitForm={handleFormSubmit}/>
      <List data-testid="list-container" list={list}/>
    </div>
  );
}

export default App;
