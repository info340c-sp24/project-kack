import React from "react";

export function DonarRow({ donarData }) {
  return (
    <tr className="table-rows">
      <td>{donarData.DonarName}</td>
      <td>{donarData.Location}</td>
      <td>{donarData.Date}</td>
      <td>{donarData.PhoneNumber}</td>
      <td>{donarData.TypeofFood}</td>
      <td>{donarData.SpecificFood}</td>
      <td>{donarData.Status}</td>
    </tr>
  );
}
