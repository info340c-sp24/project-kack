import React from "react";

export function DonarRow({ donarData }) {
  return (
    <tr>
      <td>{donarData.donarName}</td>
      <td>{donarData.location}</td>
      <td>{donarData.date}</td>
      <td>{donarData.phoneNumber}</td>
      <td>{donarData.foodType}</td>
      <td>{donarData.specificFood}</td>
      <td>{donarData.status}</td>
    </tr>
  );
}
