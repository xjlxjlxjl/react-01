import React from 'react';
import logo from './logo.svg';
import './App.css';

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
  );
}

const
name = 'Josh Perez',
user = {
  firstName: 'Harper',
  lastName: 'Perez'
},
cname = 'acc',
element = <h1 class={ cname }>Hello, { formatName(user) }!</h1>;

function helloWorld() {
  console.log(element)
  return element
}

function formatName(user) {
  return `${ user.firstName } ${ user.lastName }`;
}

export default helloWorld;

class aaa {
  x = 0;
  y = 0;

  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  speak() {
    return this;
  }

  static eat() {
    return this;
  }
}