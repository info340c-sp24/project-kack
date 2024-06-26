import React, { useState } from "react";
import { format, parse } from "date-fns";
import { MobileSidebar, Sidebar } from "./MobileSidebar";
import Footer from "./Footer";
import donors from "./data/donors.json";
import { DonorTable } from "./DonorTable";

const Table = () => {
  const [filteredDonors, setFilteredDonors] = useState(donors);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [inputPage, setInputPage] = useState("");
  const itemsPerPage = 10;

  const handleFilter = () => {
    if (startDate && endDate) {
      const filtered = donors.filter((donor) => {
        const donorDate = parse(donor.Date, "yyyy-MM-dd", new Date());
        const parsedStartDate = parse(startDate, "yyyy-MM-dd", new Date());
        const parsedEndDate = parse(endDate, "yyyy-MM-dd", new Date());

        return donorDate >= parsedStartDate && donorDate <= parsedEndDate;
      });
      setFilteredDonors(filtered);
      setCurrentPage(1); // Reset to the first page after filtering
    }
  };

  const handleNextPage = () => {
    if (currentPage < Math.ceil(filteredDonors.length / itemsPerPage)) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handlePageInput = (e) => {
    const page = parseInt(e.target.value, 10);
    if (
      !isNaN(page) &&
      page > 0 &&
      page <= Math.ceil(filteredDonors.length / itemsPerPage)
    ) {
      setCurrentPage(page);
    }
  };

  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredDonors.slice(
    startIndex,
    startIndex + itemsPerPage
  );

  return (
    <div className="table-page">
      <MobileSidebar />
      <Sidebar />
      <div className="table-container">
        <h1 className="donor-title">Donor</h1>
        <div className="date-range-filter">
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            placeholder="Start Date"
          />
          <input
            type="date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            placeholder="End Date"
          />
          <button onClick={handleFilter} className="filter-table-button">
            Filter
          </button>
        </div>
        <DonorTable donorsList={currentItems} className="DonorTable" />
        <div className="pagination">
          <button onClick={handlePreviousPage} disabled={currentPage === 1}>
            Previous
          </button>
          <input
            type="number"
            value={inputPage}
            onChange={(e) => setInputPage(e.target.value)}
            onBlur={handlePageInput}
            placeholder={currentPage}
            min="1"
            max={Math.ceil(filteredDonors.length / itemsPerPage)}
          />
          <span> / {Math.ceil(filteredDonors.length / itemsPerPage)}</span>
          <button
            onClick={handleNextPage}
            disabled={
              currentPage >= Math.ceil(filteredDonors.length / itemsPerPage)
            }
          >
            Next
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Table;
