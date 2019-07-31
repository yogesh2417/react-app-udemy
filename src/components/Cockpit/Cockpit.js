import React from 'react';
import CssClasses from './Cockpit.css';

const cockpit = (props) =>{
    const classes=[];
    let CssStyle ='';

    if(props.showPerson){
    CssStyle = CssClasses.Red;
    }

    if(props.persons.length<=1){
      classes.push(CssClasses.red);
    }
    if(props.persons.length<=0){
      classes.push(CssClasses.bold);
    }

    return(
        <div className={CssClasses.Cockpit}>
        <h1>{props.title}</h1>
      <p className={classes.join(" ")}>Binding Css classes dynamically</p>     
      <button className={CssStyle} onClick={props.clicked}>Toggle Persons</button>
      </div>
    )
}

export default cockpit;