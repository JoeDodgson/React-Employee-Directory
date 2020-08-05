import React, { Component } from "react";

class Search extends Component {

  render() {
    return (
      <div style={{backgroundColor: "#e9ecef", height: "100px", textAlign: "center"}}>
        <form style={{paddingTop: "30px"}}>
          <input
            name="filter"
            type="text"
            placeholder="Search"
          />
        </form>
      </div>
    );
  }
}

export default Search;
