import React from 'react';

const person =(props)=>{
    return (
        <div className="Person">
            <p onClick={props.clickProp}>My name is {props.name}. I am {props.age} years old. </p>
            <p>{props.children}</p>
            <input type="Text" onChange={props.changeHandler} value={props.name}/>
        </div>
    )
}

export default person;