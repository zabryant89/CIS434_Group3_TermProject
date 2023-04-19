import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react';
import axios from 'axios';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>


function ReservationForm() {
  // Set up state to track the form data
  const [name, setName] = useState('');
  const [table, setTable] = useState('');

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send a POST request to the server with the form data
      await axios.post('/api/reservation', { name, table });
      // Clear the form
      setName('');
      setTable('');
      // Show a success message
      alert('Reservation successful!');
    } catch (err) {
      // Show an error message if something went wrong
      alert('Error creating reservation');
    }
  };

  // Render the form
  return (
    <div className="reservation-form">
      <h2>Make a Reservation</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="table">Table:</label>
          <select
            id="table"
            value={table}
            onChange={(e) => setTable(e.target.value)}
            required
          >
            <option value="" disabled>
              Select a table
            </option>
            <option value="table1">Table 1</option>
            <option value="table2">Table 2</option>
            <option value="table3">Table 3</option>
            <option value="table4">Table 4</option>
            <option value="table5">Table 5</option>
          </select>
        </div>
        <button type="submit">Make Reservation</button>
      </form>
    </div>
  );
}

export default ReservationForm;
  );
}

export default App;
