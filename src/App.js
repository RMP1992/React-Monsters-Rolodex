import React, { Component }from 'react';
import { CardList } from './component/card-list/card-list.component';
import {SearchBox} from './component/search-box/search-box.component';
import './App.css';

class App extends Component{
  constructor(){
    super();

    this.state = {
      monsters: [],
      searchField: ""
    };

    // this.handleChange = this.handleChange.bind(this)

  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => this.setState({ monsters: users}));
  }

  handleChange = (e) =>{
    this.setState({searchField: e.target.value})
  }
  //arrow functions allows you to use the 'this' keyword inside a function, it sets the context of 'this' to be the App component, they bind the context to the place where 'this' was defined.
  render() {

    //destructuring - this allows us to pull properties off an objects and set them to constants, in this case we are pulling from the state object
    const { monsters, searchField } = this.state;
    //filter gives back a new array
    const filteredMonsters = monsters.filter(monster =>
      //we use toLowerCase because we don't want the search to be case sensitive
      //includes- checks if the string value is present in the objects, it returns true or false
      monster.name.toLowerCase().includes(searchField.toLowerCase())
      )
      //when you use setState, react re-renders the component,
    return(
      <div className="App">
        <h1>Monsters Rolodex</h1>
        <SearchBox placeholder="Search Monster" handleChange={this.handleChange} />
        <CardList monsters={filteredMonsters}/>
          
        
      </div>
    )
  }
}

export default App;
