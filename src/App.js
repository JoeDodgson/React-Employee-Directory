import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './components/Header.js';
import Search from './components/Search.js';
import TableContainer from './components/TableContainer.js';
import TableHeader from './components/TableHeader.js';
import TableResults from './components/TableResults.js';
import './App.css';

class App extends Component {
  // Set the component's initial state
  state = {
    search: ""
  };

  handleInputChange = event => {
    // Get the value and name of the input which triggered the change
    let { value, name } = event.target;

    // Update the input's state
    this.setState({
      [name]: value.toLowerCase()
    });
  };

  render() {
    return (
      <div>      
        <Header></Header>
        <Search search={this.state.search} handleInputChange={this.handleInputChange}></Search>
        <TableContainer search={this.state.search}>
        </TableContainer>
      </div>
    )
  }
}

export default App;
