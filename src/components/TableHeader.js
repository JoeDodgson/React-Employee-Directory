import React, { Component } from "react";

class TableHeader extends Component {
  iconsStyle = {height: "20px", width: "20px", marginLeft: "20px", padding: "0"}
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
              <i className="fas fa-sort" style={this.iconsStyle}></i>
            </th>
          )}
        </tr>
      </thead>
    );
  }
}

export default TableHeader;
