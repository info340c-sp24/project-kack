import React from "react";
import { TableHeader } from "./TableHeader";
import { DonorRow } from "./DonorRow";

export function DonorTable({ donorsList }) {
  return (
    <table>
      <TableHeader
        columnNames={[
          "Donor Name",
          "Location",
          "Date",
          "Phone Number",
          "Type of Food",
          "Specific Food",
          "Status",
        ]}
      />
      <tbody>
        {donorsList.map((donor) => (
          <DonorRow key={donor.id} donorData={donor} />
        ))}
      </tbody>
    </table>
  );
}
