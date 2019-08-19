import React from 'react';
import CssClasses from './Backdrop.css';

const backdrop = (props) =>(
    props.show?<div className={CssClasses.Backdrop} onClick={props.showBackdrop}></div>:null
)

export default backdrop;