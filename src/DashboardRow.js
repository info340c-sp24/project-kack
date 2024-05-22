import React from "react";

export function DashboardRow({ donorData }) {
  return (
    <tr className="table-rows">
      <td>{donorData.name}</td>
      <td>{donorData.email}</td>
      <td>{donorData.phone}</td>
      <td>{donorData.address}</td>
      <td>{donorData.city}</td>
      <td>{donorData.userState}</td>
      <td>{donorData.zip}</td>
      <td>{donorData.donation}</td>
    </tr>
  );
}
