import React, { Component } from 'react';
import './App.css';
import Person from './Person/person'

class App extends Component {
  state = {
    persons: [
      {
        id: '11' ,name: 'Max', age: 28
      },
      {
        id: '12' ,name: 'Soumik', age: 25
      },
      {
        id: '13' ,name: 'Andrew', age: 25
      }
    ],
    showPersons :false
  }
  switchNameHandler = (Name) => {
    this.setState({
      persons: [
        {
          name: Name, age: 28
        },
        {
          name: 'Soumik', age: 25
        },
        {
          name: 'Andrew', age: 27
        }
      ]
    });
  }
  nameChangedhandler = (event ,PersonIndex) => {
    const personId = this.state.persons.findIndex(p => {
      return p.id === PersonIndex
    })
    personId = {
      ...this.state.persons[personId]
    };
    personId.name = event.target.value;
    const persons = [...this.state.persons];
    persons[personId] = persons;
    this.setState({
      persons: [
        {
          name: 'Max', age: 28
        },
        {
          name: event.target.value, age: 25
        },
        {
          name: 'Andrew', age: 27
        }
      ]
    });
  }
  togglePersonsHandler = () => {
    const show = this.state.showPersons;
 this.setState({
   showPersons :!show
 })
  }
  deletePersonHandler = (personsIndex) => {
const persons = [...this.state.persons];
persons.splice(personsIndex, 1);
this.setState({persons :persons
})
  }
  render() {
  const style = {
    backgroundColor:'green',
    font :'inherit',
    border : '1px solid blue',
    padding : '16px'
  }
  let persons = null;

  if(this.state.showPersons) {
    persons = (
      <div>
        {this.state.persons.map((person , index) => {
           return ( <Person
           click = {() =>this.deletePersonHandler(index)}
            name = {person.name}
           age = {person.age}
           key ={person.id}
           changed = {(event) => {this.nameChangedhandler(event , person.id)} }/> )
        }
        )
      }
      </div>
    )   
    style.backgroundColor = 'red';
  }
  let classes = [];
  if(this.state.persons.length <= 2) {
    classes.push('red');

  } 
   if (this.state.persons.length <=1) {
classes.push('bold');
  }
    return (
      
      <div className="App">
      <p className = {classes.join(' ')}>This is really working</p>
        <button
        style = {style} onClick={this.togglePersonsHandler}>Switch Name </button>
        {persons}
      </div>

    );
  }
}

export default App;
