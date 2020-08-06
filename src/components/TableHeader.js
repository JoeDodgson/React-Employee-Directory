import React, { Component } from "react";

class TableHeader extends Component {
  buttonStyle = {height: "20px", width: "20px", marginLeft: "20px", padding: "0", border: "none", backgroundColor: "unset"}
  headerData = [{
      key: "name",
      title: "Name",
      searchable: true
    },
    {
      key: "phone",
      title: "Phone",
      searchable: true
    },
    {
      key: "email",
      title: "Email",
      searchable: true
    },
    {
      key: "birthDate",
      title: "DOB",
      searchable: true
    }
  ]

  render() {
    return (
      <thead>
        <tr>
          <th scope="col">Image 
          </th>
          {this.headerData.map(heading => 
            <th scope="col">{heading.title}
              <button name={heading.key} onClick={this.props.changeSort} style={this.buttonStyle}>
                <i className="fas fa-sort"></i>
              </button>
            </th>
          )}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
