import React from "react";

export function DonorRow({ donorData }) {
  return (
    <tr className="table-rows">
      <td>{donorData.DonorName}</td>
      <td>{donorData.Location}</td>
      <td>{donorData.Date}</td>
      <td>{donorData.PhoneNumber}</td>
      <td>{donorData.TypeofFood}</td>
      <td>{donorData.SpecificFood}</td>
      <td>{donorData.Status}</td>
    </tr>
  );
}
