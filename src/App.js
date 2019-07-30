import React,{Component} from 'react';
import CssClasses from './App.css'
import './Person/Person.css';
//import Radium, {StyleRoot} from 'radium';
import Person from './Person/Person';

class App extends Component {
  state={
    persons:[
      {id:"1",name:"Jai",age:"35"},
      {id:"2",name:"Vir",age:"40"}
    ],
    showPerson:false
  }

  SwitchNames=(newName,newAge)=>{
    this.setState({
      persons:[
        {name:newName,age:"35"},
        {name:"Vir",age:newAge}
      ]
    })
  }

  onChangeHandler=(event,id)=>{
    const personIndex= this.state.persons.findIndex(p=>{
      return p.id===id;
    });

    const person={ ...this.state.persons[personIndex]};

    person.name=event.target.value;

    const persons=[...this.state.persons];

    persons[personIndex]=person;
    
    this.setState({persons:persons});
  }

  togglePerons =()=>{
    this.setState({showPerson:!this.state.showPerson})
  }

  deletePerson =(index)=>{
    //this.setState({persons: this.state.persons.splice(index,1)});
    //const persons=this.state.persons.splice();
    const persons= [...this.state.persons];
    persons.splice(index,1);
    this.setState({persons:persons});
  }


//two ways to pass parameters using bind() or ()
  render(){
    // const style={
    //   backgroundColor:'green',
    //   color:'white',
    //   font:'inherit',
    //   border:'1px solid blue',
    //   padding:'8px',
    //   cursor:'pointer'
    //   // ':hover':{
    //   //   backgroundColor:'lightgreen',
    //   //   color:'black'
    //   // }
    // }

    let CssStyle ='';

    const classes=[];
    if(this.state.persons.length<=1){
      classes.push(CssClasses.red);
    }
    if(this.state.persons.length<=0){
      classes.push(CssClasses.bold);
    }


    //this is the alternative way to achieve conditional rendering
    let persons = null;
    if(this.state.showPerson){
      persons=(
        <div>
          {this.state.persons.map((person,index) =>{
            return <Person clickProp={()=>this.deletePerson(index)} key={person.id} name={person.name} age={person.age}
            changeHandler={(event)=>this.onChangeHandler(event,person.id)}/>
          })}
{/* 
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
      <Person clickProp={this.SwitchNames.bind(this,'Sam','50')} changeHandler={this.onChangeHandler} 
      name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Running</Person>
      <Person name="Mary" age="30"/> */}
      </div>
      )

      //style.backgroundColor='red';
      // style[':hover']={
      //   backgroundColor:'salmon',
      //   color:'black'
      // };

      CssStyle = CssClasses.Red;
    }



  return (
    // <StyleRoot>
    <div className={CssClasses.App}>
      <h1>Hi React app</h1>
      <p className={classes.join(" ")}>Binding Css classes dynamically</p>
      {/* <button style={style} onClick={()=>this.SwitchNames('Max','45')}>Switch Names</button> */}
      <button className={CssStyle} onClick={this.togglePerons}>Toggle Persons</button>
      {/* {
        this.state.showPerson ?
      <div>
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
      <Person clickProp={this.SwitchNames.bind(this,'Sam','50')} changeHandler={this.onChangeHandler} 
      name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Running</Person>
      <Person name="Mary" age="30"/>
      </div> : null
    } */}
    {persons}
 
    </div>
    //</StyleRoot>
  );
  }

}

//export default Radium(App);
export default App;



// const App = ()=> {
//   const [personsState,setPersonsState] = useState({   //useState hook replaces old state with new whereas this.setState merge new state with old.
//     persons:[
//           {name:"Jai",age:"35"},
//           {name:"Vir",age:"40"}
//         ]
//   });

//   const SwitchNames=(newName,newAge)=>{
//       setPersonsState({
//         persons:[
//           {name:newName,age:"35"},
//           {name:"Vir",age:newAge}
//         ]
//       })
//     }

//     const [otherStates,setOtherStates]=useState("other values. we can use useState hook multiple times to protect updating whole state at a time.'useState' is for functions and 'state' is for classes' ");
  
//   return (
//     <div className="App">
//       <h1>Hi React app</h1>
//       <button onClick={SwitchNames}>Switch Names</button>
//       <Person name={personsState.persons[0].name} age={personsState.persons[0].age}/>
//       <Person name={personsState.persons[1].name} age={personsState.persons[1].age}>My Hobbies: Running</Person>
//       <Person name="Mary" age="30"/>
//     </div>
//   );
  

// }

// export default App;
