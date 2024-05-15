import React from "react";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import donars from "./data/donars.json";
import { DonarTable } from "./DonarTable";

const Table = () => {
  return (
    <div className="container">
      <h1>Donar</h1>
      <Sidebar />
      <DonarTable donarsList={donars} />
      <Footer />
    </div>
  );
};

export default Table;
