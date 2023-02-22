import React from "react";

export default function Calculation({ calculationData }) {
  const calculation = {
    monthly: Math.round(calculationData.amount / calculationData.years),
    insurance: Math.round(
      (calculationData.amount / 100) * (calculationData.percent / 360)
    ),
    yearlyPercent: calculationData.percent + "%",
    rpsn: calculationData.percent * 2 + "%",
    total:
      calculationData.amount +
      calculationData.years *
        Math.round(
          (calculationData.amount / 100) * (calculationData.percent / 360)
        ) +
      "Kč"
  };

  return (
    <div className="calculation-wrapper">
      <div className="result">
        <p>Měsíčně zaplatíte</p>
        <h1 id="resultCalculation">
          <span>{calculation.monthly}</span> Kč
        </h1>
        <h5>
          + pojistné <span id="insurance">{calculation.insurance}</span> Kč
        </h5>
        <hr />
        <div>
          <p>Roční úroková sazba</p>
          <strong id="rus">{calculation.yearlyPercent}</strong>
          <p>RPSN</p>
          <strong id="rpsn">{calculation.rpsn}</strong>
          <p>Celkem zaplatíte</p>
          <strong id="final">{calculation.total}</strong>
        </div>
        <strong>+ garance úroku na 60 dní na koupi nemovitosti</strong>
        <button>Získat certifikát s garancí nabídky</button>
      </div>
    </div>
  );
}
