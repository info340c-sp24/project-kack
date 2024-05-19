import React from "react";

export function FoodRow({ donarData }) {
  return (
    <tr className="table-rows">
      <td>{donarData.foodType}</td>
      <td>{donarData.specificFood}</td>
      <td>{donarData.Quantity}</td>
      <td>{donarData.PickupDate}</td>
      <td>{donarData.Status}</td>
    </tr>
  );
}
