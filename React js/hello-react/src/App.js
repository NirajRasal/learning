import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <Person name="Niraj" />
        <Person name="Vijay">and i'am 20 years old</Person>
      </div>
    ); 

    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'random text'));
  }
}

export default App;
