import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'; 

class App extends Component {
  state = {
    person:[
      {name:"Max", age:24},
      {name:"Manu", age:25},
      {name:"Stephan", age:26}
    ]
  }

  switchHandler = (newName) =>{
   // console.log("Switch button clicked");
   this.setState({
    person:[
      {name:newName, age:24},
      {name:"Manu", age:25},
      {name:"Stephan", age:26}
    ]
   })
  }
  nameChangedHandler = (event) => {
    this.setState({
      person:[
        {name:"newName", age:24}, 
        {name:event.target.value, age:25},
        {name:"Stephan", age:26}
      ]
     })   
  }
  render() {
    const style = {
      backgroundColor:'white',
      font:'inherit',
      border:'3px solid blue',
      padding:'10px'
    };

    return (
      <div className="App">
        <h1>Welcome to React</h1>
        <button 
          style={style}
          onClick={this.switchHandler.bind(this,'Maximilian')}>Demo Switch Name</button>
        <Person 
          name={this.state.person[0].name} 
          age={this.state.person[0].age} />
        <Person 
          name={this.state.person[1].name} 
          age={this.state.person[1].age}
          click={this.switchHandler} 
          changed = {this.nameChangedHandler }/>
        <Person 
          name={this.state.person[2].name} 
          age={this.state.person[2].age} />
      </div>
    );
  }
}

export default App;
