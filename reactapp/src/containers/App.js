import React, { Component } from 'react';
import Radium,{StyleRoot} from 'radium';
//import logo from './logo.svg';
import classes from './App.css';

import Persons from '../components/Persons/Persons'; 
import Cockpit from '../components/Cockpit/Cockpit';
import WithClass from '../hoc/WithClass';

class App extends Component {

  constructor(props){
    super(props);
    console.log('inside const');
    this.state= {
      person:[
        {id:'1', name:"Max", age: 24},
        {id:'2', name:"Manu", age:25},
        {id:'3',name:"Stephan", age:26}
      ],
      showPerson:false
    }
  }

  componentWillMount(){
    console.log('inside willmount');
  }

  componentDidMount(){
    console.log('inside didmount');
  }

  shouldComponentUpdate(){
    console.log('should compo update');
    return true;
  }
  // state = {
  //   person:[
  //     {id:'1', name:"Max", age: 24},
  //     {id:'2', name:"Manu", age:25},
  //     {id:'3',name:"Stephan", age:26}
  //   ],
  //   showPerson:false
  // }

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
  nameChangedHandler = (event, id) => {
    const personIndex = this.state.person.findIndex(p => {
      return p.id === id;
    });

    const person = {
      ...this.state.person[personIndex]
    };
    person.name = event.target.value;
    const persons = [...this.state.person];
    persons[personIndex] = person;
    
    this.setState({
      person:[
        {name:"newName", age:24}, 
        {name:event.target.value, age:25},
        {name:"Stephan", age:26}
      ]
     })   
  }

  togglePersonHandler = () => {
      const doesShow = this.state.showPerson;
      this.setState({showPerson:!doesShow })
  }

  deleteHandler = (personIndex) =>{
    const persons = this.state.person.slice();
    persons.splice(personIndex,1);
    this.setState({person:persons});
  }

  render() {
    console.log('inside render');
    let person = null;
    

    if(this.state.showPerson){
      person =(
          <div>
            <Persons person={this.state.person}
            clicked={this.state.deleteHandler}
            changed={this.state.nameChangedHandler}/>

            {/* {this.state.person.map((person, index) => {
              return <Person 
                click={() => this.deleteHandler(index)}
                name={person.name} 
                age={person.age} 
                key={person.id} 
                changed= {(event) => this.nameChangedHandler(event, person.id)}/>
            })} */}
            </div>
      );
      
      // style.backgroundColor='red';

    }

    // let assignedClasses = [];
    // if(this.state.person.length <= 2){
    //   assignedClasses.push(classes.red);
    // }
    // if(this.state.person.length <= 1){
    //   assignedClasses.push(classes.bold);
    // }
    
    return (
      <div className={classes.App}>
      <button onClick={() =>{this.setState({showPerson:true})}}>Show Person</button>
        <Cockpit 
          showPerson={this.state.showPerson}
          person={this.state.person}
          clicked={this.togglePersonHandler}/>
        {person}
      </div>

    );
  }
}

export default Radium(App);
