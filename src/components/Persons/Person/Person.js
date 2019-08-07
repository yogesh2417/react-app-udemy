import React,{Component} from 'react';
// import Radium from 'radium';
import CssClasses from './Person.css';
import Auxiliary from '../../../hoc/Auxiliary';
import PropTypes from 'prop-types';
import AuthContext from '../../../context/auth-context';

class Person extends Component{

    // const style={
    //     '@media (min-width: 500px)':{
    //         width:'450px'
    //     }
    // }

    constructor(props){
        super(props);
        this.inpElementRef=React.createRef();
    }

    static contextType = AuthContext;

    componentDidMount(){
        //this.inputElement.focus();
        this.inpElementRef.current.focus();
        console.log(contextType.authenticated);
    }
    
    render(){
        return (
            <Auxiliary>
                {/* <AuthContext.Consumer>
                    {
                        context=>context.authenticated? <p>Authenticated!</p> : <p>Please Log in</p>
                    }
                </AuthContext.Consumer> */}
                {this.context.authenticated?(
                <p>Authenticated!</p>) : (<p>Please Log in</p>
                )}
            <div className={CssClasses.Person} >
                {/* <div className="Person" style={style}> */}
                <p onClick={this.props.click}>My name is {this.props.name}. I am {this.props.age} years old. </p>
                <p>{this.props.children}</p>
                <input type="Text" 
                //ref={(inpEle)=>{this.inputElement=inpEle}}
                ref={this.inpElementRef}
                onChange={this.props.changed} 
                value={this.props.name}/>
            </div>
            </Auxiliary>
        )
    }  
}

Person.propTypes={
    click: PropTypes.func,
    name:PropTypes.string,
    age:PropTypes.number,
    changed:PropTypes.func
};

//export default Radium(person);
export default Person;