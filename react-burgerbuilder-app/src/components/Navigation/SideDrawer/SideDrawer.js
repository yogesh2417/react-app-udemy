import React from 'react';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import CssClasses from './SideDrawer.css';
import Auxiliary from '../../../hoc/Auxiliary';
import Backdrop from '../../UI/Backdrop/Backdrop';

const sideDrawer =(props)=>{

    let attachedCss=[CssClasses.SideDrawer,CssClasses.Close];
    if(props.show){
        attachedCss=[CssClasses.SideDrawer,CssClasses.Open];
    }
    return(
        <Auxiliary>
            <Backdrop show={props.show} showBackdrop={props.closed}/>
        <div className={attachedCss.join(" ")}>
            <div className={CssClasses.Logo}>
               <Logo/>
            </div>
            <nav>
                <NavigationItems/>
            </nav>
        </div>
        </Auxiliary>
    );
}

export default sideDrawer;