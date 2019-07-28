import React from 'react';
import logo from './logo.svg';
import './App.css';

class Addd extends React.Component {
  render() {
    return (
      <button>thu pham</button>

    );
  }
}


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Addd/>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          HELLO THU
        </a>
      </header>
    </div>
  );
}

export default App;
