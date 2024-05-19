import React, { useState } from "react";

const FoodRequestForm = ({ addRequest }) => {
  const [foodType, setFoodType] = useState("");
  const [specificFood, setSpecificFood] = useState("");
  const [quantity, setQuantity] = useState("");
  const [pickupDate, setPickupDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    addRequest({ foodType, specificFood, quantity, pickupDate });
    setFoodType("");
    setSpecificFood("");
    setQuantity("");
    setPickupDate("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      style={{
        backgroundColor: "#C36177",
        padding: "20px",
        borderRadius: "5px",
      }}
    >
      <div className="Food-input">
        <label>Food Type</label>
        <input
          type="text"
          value={foodType}
          onChange={(e) => setFoodType(e.target.value)}
          placeholder="Enter food type"
          required
        />
      </div>
      <div className="Food-input">
        <label>Specific Food</label>
        <input
          type="text"
          value={specificFood}
          onChange={(e) => setSpecificFood(e.target.value)}
          placeholder="Enter Specific Food"
          required
        />
      </div>
      <div className="Food-input">
        <label>Quantity</label>
        <input
          type="number"
          value={quantity}
          onChange={(e) => setQuantity(e.target.value)}
          placeholder="Enter quantity"
          required
        />
      </div>
      <div className="Food-input">
        <label>Pickup Date</label>
        <input
          type="date"
          value={pickupDate}
          onChange={(e) => setPickupDate(e.target.value)}
          placeholder="mm/dd/yyyy"
          required
        />
      </div>
      <button id="food-submit" type="submit">
        Submit
      </button>
    </form>
  );
};

export default FoodRequestForm;
