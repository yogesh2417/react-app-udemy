import React from 'react';
import BurgerLogo from '../../assests/Images/burger-logo.png';
import CssClasses from './Logo.css';

const logo =(props)=>(
    <img className={CssClasses.Logo} src={BurgerLogo} alt="MyBurger"/>
);

export default logo;