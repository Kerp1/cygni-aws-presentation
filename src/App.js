import React, { Component } from 'react';
import logo from './cygni-logo.png';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://aws.amazon.com/getting-started/"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn AWS
          </a>
        </header>
      </div>
    );
  }
}

export default App;
