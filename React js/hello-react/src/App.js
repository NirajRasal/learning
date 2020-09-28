import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';     //imported person.js file
 
class App extends Component {   //class based component
  state ={                      //class property which hold array of objects 
    person: [
      {name:"Niraj"},
      {name:"Vijay"}
    ]
  }
stateHandler = ( name ) => {    //ES6 method to listen to button click
this.setState({         //setState is special method which merges/overrides the new state with old state
                        // and then display the output on screen 
     person: [
      {name:"Nir"},
      {name:"Vijay Chavan"}
  ]
})
}
StateHandler = ( name ) => {    
  this.setState({         //passing name attribute dynamically using bind method 
       person: [
        {name:name},
        {name:"Vijay Chavan"}
    ]
  })
  }
nameChangeHandler = ( event ) => {    
  this.setState({        //used onChange event to change the name to user's choice 
       person: [
        {name: event.target.value },
        {name:"Vijay"}
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
        <button onClick={this.StateHandler.bind(this,'NIRAJ')}>Click to see full name</button>
        <Person
         name={this.state.person[0].name} changed={this.nameChangeHandler}/>
        <Person
          name={this.state.person[1].name} click={this.stateHandler}>and i'am 20 years old</Person>
      </div>
    ); 

    //return React.createElement('div',{className:'App'},React.createElement('h1',null,'random text'));
  }
}

export default App;
