import React, { Component } from "react";

class Search extends Component {

  render() {
    return (
      <div style={{backgroundColor: "#e9ecef", height: "100px", textAlign: "center"}}>
        <form style={{paddingTop: "30px"}}>
          <input
            value={this.props.search}
            name="search"
            onChange={this.props.handleInputChange}
            type="text"
            placeholder="Search"
          />
        </form>
      </div>
    );
  }
}

export default Search;
