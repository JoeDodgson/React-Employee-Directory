import React, { Component } from "react";

class Header extends Component {

  render() {
    return (
      <div style={{width: "100%", color: "#fff", textAlign: "center", fontFamily: "'Raleway', sans-serif"}}>
        <div style={{backgroundColor: "#000", height: "125px", padding: "20px"}}>
          <h1>
            Employee Directory
          </h1>
          <p>
            Click on the carrots to filter by heading or use the search box to narrow your results
          </p>
        </div>
        <div style={{backgroundColor: "#ff0000", height: "5px"}}>
        </div>
      </div>
    );
  }
}

export default Header;
