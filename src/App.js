import "./styles.css";
import Form from "./Form";
import Calculation from "./Calculation";
import { useState } from "react";

export default function App() {
  const [calculationData, setCalculationData] = useState({
    amount: 1000000,
    years: 5,
    percent: 7.04
  });

  return (
    <div className="App">
      <Form
        calculationData={calculationData}
        setCalculationData={setCalculationData}
      />
      <Calculation calculationData={calculationData} />
    </div>
  );
}
