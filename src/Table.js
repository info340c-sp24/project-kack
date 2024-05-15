import React from "react";
import Sidebar from "./Sidebar";
import Footer from "./Footer";
import donars from "./data/donars.json";

const Table = ({ donarList = [] }) => {
  return (
    <div className="container">
      <h1>Donar</h1>
      <Sidebar />
      <DonarTable donarsList={donarList} />
      <Footer />
    </div>
  );
};

export default Table;
