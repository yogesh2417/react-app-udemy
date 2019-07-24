import React,{Component} from 'react';
import './App.css'
import './Person/Person.css';
import Person from './Person/Person';

class App extends Component {
  state={
    persons:[
      {name:"Jai",age:"35"},
      {name:"Vir",age:"40"}
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

  onChangeHandler=(event)=>{
    this.setState({
      persons:[
        {name:"Jai",age:"35"},
        {name:event.target.value,age:"40"}
      ]
    })
  }

  togglePerons =()=>{
    this.setState({showPerson:!this.state.showPerson})
  }

  deletePerson =(index)=>{
    this.setState({persons: this.state.persons.splice(index,1)})
  }


//two ways to pass parameters using bind() or ()
  render(){
    const style={
      backgroundColor:'white',
      font:'inherit',
      border:'1px solid blue',
      padding:'8px',
      cursor:'pointer'
    }

    //this is the alternative way to achieve conditional rendering
    let persons = null;
    if(this.state.showPerson){
      persons=(
        <div>
          {this.state.persons.map((person,index) =>{
            return <Person clickProp={()=>this.deletePerson(index)} name={person.name} age={person.age}/>
          })}
{/* 
      <Person name={this.state.persons[0].name} age={this.state.persons[0].age}/>
      <Person clickProp={this.SwitchNames.bind(this,'Sam','50')} changeHandler={this.onChangeHandler} 
      name={this.state.persons[1].name} age={this.state.persons[1].age}>My Hobbies: Running</Person>
      <Person name="Mary" age="30"/> */}
      </div>
      )
    }



  return (
    <div className="App">
      <h1>Hi React app</h1>
      <button style={style} onClick={()=>this.SwitchNames('Max','45')}>Switch Names</button>
      <button style={style} onClick={this.togglePerons}>Toggle Persons</button>
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
  );
  }

}

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
