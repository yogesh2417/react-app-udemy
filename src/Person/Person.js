import React from 'react';
// import Radium from 'radium';

const person =(props)=>{

    // const style={
    //     '@media (min-width: 500px)':{
    //         width:'450px'
    //     }
    // }

    return (
        <div className="Person" >
            {/* <div className="Person" style={style}> */}
            <p onClick={props.clickProp}>My name is {props.name}. I am {props.age} years old. </p>
            <p>{props.children}</p>
            <input type="Text" onChange={props.changeHandler} value={props.name}/>
        </div>
    )
}

//export default Radium(person);
export default person;