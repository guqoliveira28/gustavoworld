import Styles from "./InvestmentCalculator.module.scss";
import logo from "../../../img/investment-calculator-logo.png";
import InvestmentUI from "./InvestmentUI";
import Results from "./Results";
import { useState } from "react";

const calculator = {
  initialInvestment: 10000,
  annualInvestment: 1200,
  expectedReturn: 6,
  duration: 10,
};

export default function InvestmentCalculator() {
  const [currentCalculator, setCurrentCalulator] = useState(calculator);

  function handleCalculatorChanges(field, value) {
    setCurrentCalulator((prevCalculator) => {
      return { ...prevCalculator, [field]: value };
    });
  }

  return (
    <div className={Styles.investment}>
      <header id={Styles.header}>
        <img src={logo} alt="Investment calculator logo" />
        <h1>Investment Calculator</h1>
      </header>
      <InvestmentUI
        calculator={currentCalculator}
        handleChange={(field, value) => handleCalculatorChanges(field, value)}
      />
      <Results calculatorInputs={currentCalculator} />
    </div>
  );
}
