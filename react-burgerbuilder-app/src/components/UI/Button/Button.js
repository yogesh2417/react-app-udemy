import React from 'react';
import CssClasses from './Button.css';

const button = (props)=>(
    <button className={[CssClasses.Button,CssClasses[props.btnType]].join(' ')} onClick={props.clicked}>
        {props.children}
    </button>
)

export default button;