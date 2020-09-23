import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state ={                      //class property which hold array of objects
    person: [
      {name:"Niraj"},
      {name:"Vijay"}
    ]
  }
stateHandler = () => {    //ES6 method to listen to button click
this.setState({         //setState is special method which merges/overrides the new state with old state
                        // and then display the output on screen 
     person: [
      {name:"Niraj Rasal"},
      {name:"Vijay Chavan"}
  ]
})
}

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
        <button onClick={this.stateHandler}>Click to see full name</button>
        <Person name={this.state.person[0].name} />
        <Person name={this.state.person[1].name}>and i'am 20 years old</Person>
      </div>
    ); 

    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'random text'));
  }
}

export default App;
