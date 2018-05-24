import React from 'react';
import classes from './Cockpit.css';
import Aux from '../../hoc/Aux';

const cockpit = (props) => {
    let assignedClasses = [];
    let btnClass = '';
    if(props.showPerson){
        btnClass = classes.Red;
    }
    if(props.person.length <= 2){
      assignedClasses.push(classes.red);
    }
    if(props.person.length <= 1){
      assignedClasses.push(classes.bold);
    }
    return (
        <Aux>
            <h1>Welcome to React</h1>
            <p className={assignedClasses.join(' ')}>This is really working!</p>
            <button 
            className={btnClass}
            onClick={props.clicked}>Toggle Persons
            </button>
        </Aux>
    );
}
export default cockpit;