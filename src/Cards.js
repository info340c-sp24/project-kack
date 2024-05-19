import React from "react";
import { CircularProgressbar, buildStyles } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

const CardComponent = ({ percentage, amount, label, timePeriod }) => {
  return (
    <div className="card col-3">
      <h2 className="cardTitle">{amount}</h2>
      <h4>{label}</h4>
      <p>{timePeriod}</p>
      <div className="card-progress">
        <CircularProgressbar
          className="circular-progressbar"
          value={percentage}
          text={`${percentage}%`}
          styles={buildStyles({
            textColor: "#c55c78",
            pathColor: "#c55c78",
            trailColor: "rgba(255, 255, 255, 0.2)",
          })}
        />
      </div>
    </div>
  );
};

export default CardComponent;
