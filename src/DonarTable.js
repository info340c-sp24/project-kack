import React from "react";
import { TableHeader } from "./TableHeader";
import { DonarRow } from "./DonarRow";

export function DonarTable({ donarsList }) {
  return (
    <table className="table">
      <TableHeader
        columnNames={[
          "Donar Name",
          "Location",
          "Date",
          "Phone Number",
          "Type of Food",
          "Specific Food",
          "Status",
        ]}
      />
      <tbody>
        {donarsList.map((donar) => (
          <DonarRow key={donar.id} donarData={donar} />
        ))}
      </tbody>
    </table>
  );
}
