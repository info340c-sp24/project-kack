import React from "react";

const TableHeader = ({ columnNames }) => {
  return (
    <thead>
      <tr>
        {columnNames.map((name) => (
          <th key={name}>{name}</th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
