import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Checkout from './checkout';

function App() {
  const [showCheckout, setShowCheckout] = useState(false);

  const handleCheckout = () => {
    setShowCheckout(!showCheckout);
  };

  return (
    <div className="App">
      {showCheckout ? (
        <Checkout handleCheckout={handleCheckout} />
      ) : (
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
          <button onClick={handleCheckout}>I'm a button</button>
        </header>
      )}
    </div>
  );
}

export default App;
