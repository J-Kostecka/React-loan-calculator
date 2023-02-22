import Fixation from "./fixation";

const fixations = [
  {
    years: "1 rok",
    percent: 7.04
  },
  {
    years: "3 roky",
    percent: 6.44
  },
  {
    years: "5 let",
    percent: 5.79
  },
  {
    years: "7 let",
    percent: 5.69
  },
  {
    years: "10 let",
    percent: 5.59
  }
];

export default function Form({ calculationData, setCalculationData }) {
  const onInputChange = (e) => {
    Array.from(e.target.parentNode.getElementsByTagName("input")).forEach(
      (element) => {
        element.value = e.target.value;
      }
    );

    setCalculationData({
      ...calculationData,
      [e.target.dataset.name]: e.target.value
    });
  };

  const setPercent = (newPercent) => {
    setCalculationData({
      ...calculationData,
      percent: newPercent
    });
  };

  return (
    <div className="form-wrapper">
      <div className="notification">
        <strong>
          Jsme první bankou, u které si hypotéku sjednáte plně online.
        </strong>
        <p>Od první kalkulace, přes podpis, tak i kompletní správu hypotéky.</p>
      </div>
      <div className="form">
        <div className="inputs">
          <div>Chci si půjčit</div>
          <input
            type="range"
            min="1000000"
            max="30000000"
            step="10000"
            data-name="amount"
            defaultValue={calculationData.amount}
            onChange={onInputChange}
          />
          <input
            type="number"
            min="1000000"
            max="30000000"
            step="10000"
            data-name="amount"
            defaultValue={calculationData.amount}
            onChange={onInputChange}
          />
          <span>Kč</span>
          <p>1 mil. Kč</p>
          <p>30 mil. Kč</p>
        </div>
        <div className="inputs">
          <div>Doba splácení</div>
          <input
            type="range"
            min="1"
            max="30"
            data-name="years"
            defaultValue={calculationData.years}
            onChange={onInputChange}
          />
          <input
            type="number"
            min="1"
            max="30"
            data-name="years"
            defaultValue={calculationData.years}
            onChange={onInputChange}
          />
          <span>let</span>
          <p>5 let</p>
          <p>30 let</p>
        </div>
      </div>
      <div className="fixations">
        <div>Fixace</div>
        {fixations.map((fixation) => {
          return (
            <Fixation
              years={fixation.years}
              percent={fixation.percent}
              currentPercent={calculationData.percent}
              setPercent={setPercent}
            />
          );
        })}
      </div>
    </div>
  );
}
