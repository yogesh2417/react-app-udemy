import React from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import CssClasses from './Layout.css';

const layout = (props) =>(
    <Auxiliary>
    <div>Toolbar,SideDrawer,BackDrop</div>
    <main className={CssClasses.Content}>
    {props.children}
    </main>
    </Auxiliary>
)

export default layout;