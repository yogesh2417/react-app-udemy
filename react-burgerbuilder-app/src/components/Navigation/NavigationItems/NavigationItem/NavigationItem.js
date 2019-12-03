import React from 'react';
import CssClasses from './NavigationItem.css';
import {NavLink} from 'react-router-dom';

const navigationItem =(props)=>(
  
        <li className={CssClasses.NavigationItem}>
            <NavLink to={props.link} activeClassName={CssClasses.active} exact={props.exact}>{props.children}</NavLink>
        </li>
  
);

export default navigationItem;