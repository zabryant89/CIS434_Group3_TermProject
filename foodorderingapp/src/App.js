import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Checkout from './checkout.js';

function App() {
  const [showCheckout, setShowCheckout] = useState(false);

  console.log("running App() from App.js")
  return (
    <div className="App">
      {showCheckout ? (
        <Checkout />
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

          <button onClick={() => setShowCheckout(true)}>Click for checkout</button>
        </header>
      )}
    </div>
  );
}

export default App;
