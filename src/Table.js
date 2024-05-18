import React from "react";
import { Sidebar } from "./Sidebar";
import Footer from "./Footer";
import donars from "./data/donars.json";
import { DonarTable } from "./DonarTable";

const Table = () => {
  return (
    <div className="table-container">
      <Sidebar />
      <h1 className="donar-title">Donar</h1>
      <DonarTable donarsList={donars} />
      <Footer />
    </div>
  );
};

export default Table;
