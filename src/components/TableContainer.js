import React, { Component } from "react";
import TableHeader from "./TableHeader"
import TableResults from "./TableResults";

class TableContainer extends Component {

  render() {
    return (
      <table id="employeeTable" className="table table-striped" style={{textAlign: "center"}}>
        <TableHeader data={this.props.data} changeSort={this.props.changeSort} sortCategory={this.props.sortCategory} sortDirection={this.props.sortDirection}/>
        <tbody>
          <TableResults data={this.props.data} search={this.props.search} sortCategory={this.props.sortCategory} sortDirection={this.props.sortDirection}/>
        </tbody>
      </table>
    );
  }
}

export default TableContainer;
