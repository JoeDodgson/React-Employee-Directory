import React from 'react';
import logo from './logo.svg';
import Header from './components/Header.js';
import Search from './components/Search.js';
import TableContainer from './components/TableContainer.js';
import TableHeader from './components/TableHeader.js';
import TableResults from './components/TableResults.js';
import './App.css';

function App() {
  return (
    <div>      
      <Header></Header>
      <Search></Search>
      <TableContainer>
        <TableHeader></TableHeader>
        <TableResults></TableResults>
      </TableContainer>
    </div>
  );
}

export default App;
