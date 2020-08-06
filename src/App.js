import React, { Component } from 'react';
import logo from './logo.svg';
import Header from './components/Header.js';
import Search from './components/Search.js';
import TableContainer from './components/TableContainer.js';
import './App.css';

const data = [
  {
    "id": 1,
    "avatar": "http://dummyimage.com/230x106.png/ff4444/ffffff",
    "name": "Ofella Ricarde",
    "phone": "(789) 1730224",
    "email": "oricarde0@sogou.com",
    "birthDate": "23/03/1996"
  },
  {
    "id": 2,
    "avatar": "http://dummyimage.com/136x182.bmp/5fa2dd/ffffff",
    "name": "Cobb Casiroli",
    "phone": "(460) 2794296",
    "email": "ccasiroli1@howstuffworks.com",
    "birthDate": "04/10/1981"
  }, 
  {
    "id": 3,
    "avatar": "http://dummyimage.com/210x104.png/5fa2dd/ffffff",
    "name": "Saw Glading",
    "phone": "(302) 5851442",
    "email": "sglading2@toplist.cz",
    "birthDate": "15/10/1983"
  }, 
  {
    "id": 4,
    "avatar": "http://dummyimage.com/118x234.jpg/cc0000/ffffff",
    "name": "Malinda Tidder",
    "phone": "(894) 5326539",
    "email": "mtidder3@ezinearticles.com",
    "birthDate": "06/06/1988"
  }, 
  {
    "id": 5,
    "avatar": "http://dummyimage.com/135x167.bmp/dddddd/000000",
    "name": "Les Rexworthy",
    "phone": "(985) 3122790",
    "email": "lrexworthy4@cocolog-nifty.com",
    "birthDate": "09/10/1946"
  }, 
  {
    "id": 6,
    "avatar": "http://dummyimage.com/183x194.jpg/5fa2dd/ffffff",
    "name": "Grethel Calderonello",
    "phone": "(813) 8841236",
    "email": "gcalderonello5@npr.org",
    "birthDate": "20/06/2001"
  }, 
  {
    "id": 7,
    "avatar": "http://dummyimage.com/175x233.jpg/ff4444/ffffff",
    "name": "Keith Billanie",
    "phone": "(385) 5163524",
    "email": "kbillanie6@ucoz.com",
    "birthDate": "11/02/1994"
  }, 
  {
    "id": 8,
    "avatar": "http://dummyimage.com/175x115.jpg/5fa2dd/ffffff",
    "name": "Chadd Heenan",
    "phone": "(339) 6091201",
    "email": "cheenan7@umn.edu",
    "birthDate": "21/04/1983"
  }, 
  {
    "id": 9,
    "avatar": "http://dummyimage.com/118x155.bmp/dddddd/000000",
    "name": "Freddy Isaksson",
    "phone": "(864) 7676884",
    "email": "fisaksson8@nytimes.com",
    "birthDate": "30/09/1951"
  }, 
  {
    "id": 10,
    "avatar": "http://dummyimage.com/213x129.jpg/cc0000/ffffff",
    "name": "Samara Tredget",
    "phone": "(134) 2900005",
    "email": "stredget9@amazonaws.com",
    "birthDate": "09/05/1980"
  }, 
  {
    "id": 11,
    "avatar": "http://dummyimage.com/172x118.jpg/dddddd/000000",
    "name": "Gabriele Guillond",
    "phone": "(978) 9543712",
    "email": "gguillonda@google.pl",
    "birthDate": "10/08/1979"
  }, 
  {
    "id": 12,
    "avatar": "http://dummyimage.com/249x196.jpg/cc0000/ffffff",
    "name": "Isidore Croughan",
    "phone": "(244) 6669765",
    "email": "icroughanb@ehow.com",
    "birthDate": "14/04/2002"
  }, 
  {
    "id": 13,
    "avatar": "http://dummyimage.com/119x136.bmp/ff4444/ffffff",
    "name": "Marshal Roydon",
    "phone": "(961) 1182532",
    "email": "mroydonc@mit.edu",
    "birthDate": "20/06/1949"
  }, 
  {
    "id": 14,
    "avatar": "http://dummyimage.com/238x132.bmp/dddddd/000000",
    "name": "Bonnibelle Truswell",
    "phone": "(210) 9009708",
    "email": "btruswelld@uiuc.edu",
    "birthDate": "19/11/1987"
  }, 
  {
    "id": 15,
    "avatar": "http://dummyimage.com/200x164.bmp/5fa2dd/ffffff",
    "name": "Petronille Cowell",
    "phone": "(243) 8821022",
    "email": "pcowelle@hao123.com",
    "birthDate": "16/08/1973"
  }, 
  {
    "id": 16,
    "avatar": "http://dummyimage.com/200x198.bmp/cc0000/ffffff",
    "name": "Kerk Hacket",
    "phone": "(332) 2636540",
    "email": "khacketf@51.la",
    "birthDate": "06/10/1964"
  }, 
  {
    "id": 17,
    "avatar": "http://dummyimage.com/223x224.jpg/ff4444/ffffff",
    "name": "De Bermingham",
    "phone": "(817) 9149761",
    "email": "dberminghamg@businessinsider.com",
    "birthDate": "21/05/1964"
  }, 
  {
    "id": 18,
    "avatar": "http://dummyimage.com/189x196.bmp/dddddd/000000",
    "name": "Bennett Higbin",
    "phone": "(502) 9147953",
    "email": "bhigbinh@bbc.co.uk",
    "birthDate": "06/08/1986"
  }, 
  {
    "id": 19,
    "avatar": "http://dummyimage.com/233x180.bmp/ff4444/ffffff",
    "name": "Abigael Littlepage",
    "phone": "(520) 8258160",
    "email": "alittlepagei@biglobe.ne.jp",
    "birthDate": "05/10/1950"
  }, 
  {
    "id": 20,
    "avatar": "http://dummyimage.com/142x142.jpg/cc0000/ffffff",
    "name": "Miller Elfitt",
    "phone": "(566) 6435109",
    "email": "melfittj@parallels.com",
    "birthDate": "02/06/1988"
  }
];

class App extends Component {
  // Set the component's initial state
  state = {
    search: "",
    sortCategory: "name",
    sortDirection: "asc",
    data: data
  };

  handleInputChange = event => {
    // Get the value and name of the input which triggered the change
    let { value, name } = event.target;

    // Update the input's state
    this.setState({
      [name]: value.toLowerCase()
    });
    
    const filteredData = data.filter(user => {
      return user.name.toLowerCase().includes(this.state.search) || user.phone.includes(this.state.search) || user.email.toLowerCase().includes(this.state.search) || user.birthDate.includes(this.state.search)
    });

    this.setState({
      data: filteredData
    })
  };
  
  changeSort = event => {
    let name;
    // Get the name of the heading which the user clicked
    if (event.target.nodeName === "BUTTON") {
      name = event.target.name;
    }
    else {
      name = event.target.parentElement.name;
    }
    
    // Set the state.sortCategory to the name of the header which was clicked
    // If the sortCategory clicked was already selected, toggle the sortDirection
    if (name === this.state.sortCategory && this.state.sortDirection === "asc") {
      this.setState({
        sortCategory: name,
        sortDirection: "desc"
      });
    }
    else {
      this.setState({
        sortCategory: name,
        sortDirection: "asc"
      });
    }

    // Sort the data by the sortCategory in ascending or descending order depending on sortDirection
    let sortedData;
    // If sorting by birthDate, convert into a number then compare the number
    if (this.state.sortCategory === "birthDate") {
      if (this.state.sortDirection === "asc") {
        sortedData = this.state.data.sort((a, b) => (
          (parseInt(a[this.state.sortCategory].substring(6,10) + a[this.state.sortCategory].substring(3,5) + a[this.state.sortCategory].substring(0,2)) > parseInt(b[this.state.sortCategory].substring(6,10) + b[this.state.sortCategory].substring(3,5) + b[this.state.sortCategory].substring(0,2))) ? 1 : -1
        ))
      }
      else {
        sortedData = this.state.data.sort((a, b) => (
          (parseInt(a[this.state.sortCategory].substring(6,10) + a[this.state.sortCategory].substring(3,5) + a[this.state.sortCategory].substring(0,2)) < parseInt(b[this.state.sortCategory].substring(6,10) + b[this.state.sortCategory].substring(3,5) + b[this.state.sortCategory].substring(0,2))) ? 1 : -1
        ))
      }
    }
    else {
      if (this.state.sortDirection === "asc") {
        sortedData = this.state.data.sort((a, b) => (
          (a[this.state.sortCategory] > b[this.state.sortCategory]) ? 1 : -1
        ))
      }
      else {
        sortedData = this.state.data.sort((a, b) => (
          (b[this.state.sortCategory] > a[this.state.sortCategory]) ? 1 : -1
        ))
      }
    }
    // Update the data state property
    this.setState({
      data: sortedData
    })
  }

  render() {
    return (
      <div>      
        <Header></Header>
        <Search search={this.state.search} handleInputChange={this.handleInputChange}></Search>
        <TableContainer data={this.state.data} search={this.state.search} changeSort={this.changeSort} sortCategory={this.state.sortCategory} sortDirection={this.state.sortDirection}>
        </TableContainer>
      </div>
    )
  }
}

export default App;
