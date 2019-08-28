import React, {Component} from 'react';
import Auxiliary from '../../hoc/Auxiliary';
import CssClasses from './Layout.css';
import Toolbar from '../Navigation/Toolbar/Toolbar';
import SideDrawer from '../Navigation/SideDrawer/SideDrawer';

class Layout extends Component{

    state={
        showSideDrawer:false
    }

    showSideDrawerCloseHandler=()=>{
        this.setState({showSideDrawer:false});
    }

    DrawerToggleHandler= ()=>{
        this.setState((prevState)=>{
            return{
                showSideDrawer: ! prevState.showSideDrawer
            }
        })
    }

    render(){
        return(
        <Auxiliary>
            <Toolbar DrawerToggle={this.DrawerToggleHandler}/>
            <SideDrawer show={this.state.showSideDrawer} closed={this.showSideDrawerCloseHandler}/>
            <main className={CssClasses.Content}>
            {this.props.children}
            </main>
            </Auxiliary>
            )}
        
}; 


export default Layout;