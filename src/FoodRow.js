import React from "react";

export function FoodRow({ donorData }) {
  return (
    <tr className="table-rows">
      <td>{donorData.foodType}</td>
      <td>{donorData.specificFood}</td>
      <td>{donorData.Quantity}</td>
      <td>{donorData.PickupDate}</td>
      <td>{donorData.Status}</td>
    </tr>
  );
}
