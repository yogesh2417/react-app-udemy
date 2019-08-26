import React from 'react';
import CssClasses from './NavigationItems.css';
import NavigationItem from './NavigationItem/NavigationItem';

const navigationItems =()=>(
    <ul className={CssClasses.NavigationItems}>
    <NavigationItem link="/" active>Burger Builder</NavigationItem>
    <NavigationItem link="/">Checkout</NavigationItem>
    </ul>
);

export default navigationItems;