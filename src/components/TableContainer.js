import React, { Component } from "react";
import TableHeader from "./TableHeader"
import TableResults from "./TableResults";

class TableContainer extends Component {
  
  render() {
    return (
      <div>
        <table className="table table-striped" style={{textAlign: "center"}}>
          <TableHeader></TableHeader>
          <tbody>
            <TableResults></TableResults>
          </tbody>
        </table>
      </div>
    );
  }
}

export default TableContainer;
