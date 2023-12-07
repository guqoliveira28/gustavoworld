import { useState } from "react";
import Styles from "./InvestmentCalculator.module.scss";

const inputErrors = {
  initialInvestment: false,
  annualInvestment: false,
  expectedReturn: false,
  duration: false,
};

export default function InvestmentUI({ calculator, handleChange }) {
  const [negativeValueError, setNegativeValueError] = useState(false);

  function handleInput(event, field) {
    let value;
    inputErrors[field] = false;
    setNegativeValueError(false);
    if (event.target.value === "") {
      value = 0;
    } else {
      value = Number.parseInt(event.target.value);
      if (value < 0) {
        value = 0;
        inputErrors[field] = true;
        setNegativeValueError(true);
      }
    }
    handleChange(field, value);
  }

  return (
    <div id={Styles["user-input"]}>
      <div className={Styles["input-group"]}>
        <div>
          <label>Initial Investment</label>
          <input
            type="number"
            value={calculator.initialInvestment}
            onChange={(event) => handleInput(event, "initialInvestment")}
            id={inputErrors.initialInvestment ? Styles.error : undefined}
          />
        </div>
        <div>
          <label>Annual Investment</label>
          <input
            type="number"
            value={calculator.annualInvestment}
            onChange={(event) => handleInput(event, "annualInvestment")}
            id={inputErrors.annualInvestment ? Styles.error : undefined}
          />
        </div>
      </div>
      <div className={Styles["input-group"]}>
        <div>
          <label>Expected Return</label>
          <input
            type="number"
            value={calculator.expectedReturn}
            onChange={(event) => handleInput(event, "expectedReturn")}
            id={inputErrors.expectedReturn ? Styles.error : undefined}
          />
        </div>
        <div>
          <label>Duration</label>
          <input
            type="number"
            value={calculator.duration}
            onChange={(event) => handleInput(event, "duration")}
            id={inputErrors.duration ? Styles.error : undefined}
          />
        </div>
      </div>
      {negativeValueError && (
        <p className={Styles.error}>The value can't be negative!</p>
      )}
    </div>
  );
}
