import React, {useEffect,useRef,useContext} from 'react';
import CssClasses from './Cockpit.css';
import AuthContext from '../../context/auth-context';

const Cockpit = (props) =>{

  const toggleBtnRef = useRef(null);

  const authcontext=useContext(AuthContext);

    useEffect(()=>{
        console.log("it runs in every render cycle.use [] to run this for the first time else it will depend on value passed in []");
        // setTimeout(() => {
        //     alert('Save Data');
        // }, 1000);

        toggleBtnRef.current.click();

        return (()=>{
            alert('return statement from useEffect.');
            console.log('it will call before the useEffect other functionality works.');
        })
    },[]); //},[props.persons]);

    const classes=[];
    let CssStyle ='';

    if(props.showPerson){
    CssStyle = CssClasses.Red;
    }

    if(props.persons.length<=1){
      classes.push(CssClasses.red);
    }
    if(props.persons.length<=0){
      classes.push(CssClasses.bold);
    }

    return(
        <div className={CssClasses.Cockpit}>
        <h1>{props.title}</h1>
      <p className={classes.join(" ")}>Binding Css classes dynamically</p>     
      <button ref={toggleBtnRef} className={CssStyle} onClick={props.clicked}>Toggle Persons</button>
      {/* <AuthContext.Consumer>
        {
          context=><button onClick={context.login}>Log In</button>
        }
        </AuthContext.Consumer> */}
        <button onClick={authcontext.login}>Log In</button>
      </div>
    )
}

export default React.memo(Cockpit);