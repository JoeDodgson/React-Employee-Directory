import React, { Component } from "react";

class Search extends Component {

  render() {
    return (
      <div style={{"background-color": "#e9ecef", height: "100px", "text-align": "center"}}>
        <form style={{"padding-top": "30px"}}>
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
