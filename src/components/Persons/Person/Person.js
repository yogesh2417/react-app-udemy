import React,{Component} from 'react';
// import Radium from 'radium';
import CssClasses from './Person.css';

class Person extends Component{

    // const style={
    //     '@media (min-width: 500px)':{
    //         width:'450px'
    //     }
    // }
    
    render(){
        return (
            <div className={CssClasses.Person} >
                {/* <div className="Person" style={style}> */}
                <p onClick={this.props.click}>My name is {this.props.name}. I am {this.props.age} years old. </p>
                <p>{this.props.children}</p>
                <input type="Text" onChange={this.props.changed} value={this.props.name}/>
            </div>
        )
    }

    
}

//export default Radium(person);
export default Person;