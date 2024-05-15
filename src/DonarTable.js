import React from "react";
import { TableHeader } from "./TableHeader";
import { DonarRow } from "./DonarRow";

const DonarTable = ({ donarsList }) => {
  return (
    <table className="table table-bordered">
      <TableHeader columnNames={["Name", "State", "Phone", "Twitter"]} />
      <tbody>
        {donarsList.map((donar) => (
          <DonarRow key={donar.id} senatorData={donar} />
        ))}
      </tbody>
    </table>
  );
};

export default DonarTable;
