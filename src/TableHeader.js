import React from "react";

export function TableHeader({ columnNames }) {
  return (
    <thead className="table-heading">
      <tr>
        {columnNames.map((columnName, index) => (
          <th key={index}>{columnName}</th>
        ))}
      </tr>
    </thead>
  );
}
