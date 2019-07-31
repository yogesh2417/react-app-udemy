import React,{Component} from 'react';
import CssClasses from './App.css'
import '../components/Persons/Person/Person.css';
//import Radium, {StyleRoot} from 'radium';
import Persons from '../components/Persons/Persons';
import Cockpit from '../components/Cockpit/Cockpit';

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

    //this is the alternative way to achieve conditional rendering
    let persons = null;
    if(this.state.showPerson){
      persons=(
       
          <Persons
          persons={this.state.persons}
          clicked={this.deletePerson}
          changed={this.onChangeHandler} />
      )
    }



  return (
    // <StyleRoot>
    <div className={CssClasses.App}>
      <Cockpit
      title={this.props.appTitle}
      showPerson={this.state.showPerson}
      persons={this.state.persons}
      clicked={this.togglePerons}/>

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
