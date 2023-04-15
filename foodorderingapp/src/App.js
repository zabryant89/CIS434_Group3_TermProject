import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';
import Checkout from './checkout';

function App() {
  const [showCheckout, setShowCheckout] = useState(false);

  const handleCheckout = () =>{
    setShowCheckout(true);
  };

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
        <button onClick={handleCheckout}>I'm a button</button>
      </header>
      {showCheckout && <Checkout />}
    </div>
  );
}

export default App;
