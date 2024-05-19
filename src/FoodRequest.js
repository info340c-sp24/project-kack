import React from "react";
import { MobileSidebar, Sidebar } from "./MobileSidebar";
import { TableHeader } from "./TableHeader";
import { FoodRow } from "./FoodRow";
import foodList from "./data/food.json";
import FoodRequestForm from "./FoodRequestForm";

const FoodRequest = () => {
  return (
    <div>
      <MobileSidebar />
      <Sidebar />
      <div className="Food-Form">
        <h1>Food Request</h1>
        <FoodRequestForm />
      </div>
      <div className="Food-table">
        <h1>Current Request</h1>
        <table>
          <TableHeader
            columnNames={[
              "Food Type",
              "Specific Food",
              "Quantity",
              "Pickup Date",
              "Status",
            ]}
          />
          <tbody>
            {foodList.map((foodList) => (
              <FoodRow key={foodList.id} donarData={foodList} />
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default FoodRequest;
