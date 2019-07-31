import React from 'react';
// import Radium from 'radium';
import CssClasses from './Person.css';

const person =(props)=>{

    // const style={
    //     '@media (min-width: 500px)':{
    //         width:'450px'
    //     }
    // }

    return (
        <div className={CssClasses.Person} >
            {/* <div className="Person" style={style}> */}
            <p onClick={props.click}>My name is {props.name}. I am {props.age} years old. </p>
            <p>{props.children}</p>
            <input type="Text" onChange={props.changed} value={props.name}/>
        </div>
    )
}

//export default Radium(person);
export default person;