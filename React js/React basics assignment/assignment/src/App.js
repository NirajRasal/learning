import React,{ Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Userinput from './User/Userinput';
import Useroutput from './User/Useroutput';

class App extends Component{    //statefull component
  state ={                      //class property which hold array of objects 
    userinput: [                //state and nameChangeHandler is variables that's why they are outsite render() method
      {name:""}
    ]
  }
  nameChangeHandler = ( event ) => 
  {    
    this.setState({        //used onChange event to change the name to user's choice 
         userinput: [
          {name: event.target.value }
      ]
    })
  }
  
  render(){
    return(
      <div className="App">
    
      <p className="App-intro">
        To get started, edit <code>src/App.js</code> and save to reload.
      </p>
      <Userinput name={this.state.userinput[0].name} changed={this.nameChangeHandler}/>
      <Useroutput name={this.state.userinput[0].name} friend={"Sumit"} />
      </div>
    ) 
  }
}

export default App;
