import React from "react";

export default function TableResults(props) {
  const { data, search } = props;
  const filteredData = data.filter(user => {
    return user.name.toLowerCase().includes(search) || user.phone.includes(search) || user.email.toLowerCase().includes(search) || user.birthDate.includes(search)
  });
  return (
    <>
      {filteredData.map(user => 
        <tr key={user.id} style={{verticalAlign: "middle"}}>
          <>
          <td className ="align-middle">
            <img src={user.avatar} alt={`${user.name}'s avatar`} style={{height: "64px", width: "64px"}}>
            </img>
          </td>
          <td className ="align-middle">{user.name}</td>
          <td className ="align-middle">{user.phone}</td>
          <td className ="align-middle">{user.email}</td> 
          <td className ="align-middle">{user.birthDate}</td>
          </>
        </tr>
      )}
    </>
  );
}