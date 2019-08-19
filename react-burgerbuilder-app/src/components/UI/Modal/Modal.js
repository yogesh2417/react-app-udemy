import React from 'react';
import CssClasses from './Modal.css';
import Auxiliary from '../../../hoc/Auxiliary';
import Backdrop from '../Backdrop/Backdrop';

const modal=(props)=>(
    <Auxiliary>
        <Backdrop show={props.show} showBackdrop={props.backdropShow}/>
    <div className ={CssClasses.Modal}
    style={{transform:props.show?'translateY(0)':'translateY(-100vh)',
        opacity:props.show?'1':'0'
        }}>
        {props.children}
    </div>
    </Auxiliary>
);

export default modal;

