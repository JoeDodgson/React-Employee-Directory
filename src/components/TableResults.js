import React from "react";

export default function TableResults(props) {
  return (
    <>
      {props.data.map(user => 
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