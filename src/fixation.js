import React from "react";

export default function Calculation({
  years,
  percent,
  currentPercent,
  setPercent
}) {
  return (
    <button
      className={percent === currentPercent ? "selected" : ""}
      onClick={() => setPercent(percent)}
    >
      <p>{years}</p>
      <h3>{percent} %</h3>
    </button>
  );
}
