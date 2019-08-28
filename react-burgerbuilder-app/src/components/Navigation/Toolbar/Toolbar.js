import React from 'react';
import CssClasses from './Toolbar.css';
import Logo from '../../Logo/Logo';
import NavigationItems from '../NavigationItems/NavigationItems';
import DrawerToggle from '../SideDrawer/DrawerToggle/DrawerToggle';


const toolbar=(props)=>(
    <header className={CssClasses.Toolbar}>
        <DrawerToggle ClickedDrawerToggle={props.DrawerToggle}/>
        <div className={CssClasses.Logo}>
            <Logo/>
        </div>
        <nav className={CssClasses.DesktopOnly}>
            <NavigationItems/>
        </nav>
    </header>
)

export default toolbar;