import React from "react";

export function TableHeader({ columnNames }) {
  return (
    <thead>
      <tr>
        {columnNames.map((columnName, index) => (
          <th key={index}>{columnName}</th>
        ))}
      </tr>
    </thead>
  );
}
