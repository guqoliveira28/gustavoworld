import Styles from "./InvestmentCalculator.module.scss";
import { calculateInvestmentResults, formatter } from "./Investment.js";

export default function Results({ calculatorInputs }) {
  let tableRows = calculateInvestmentResults(calculatorInputs);

  return (
    <div id={Styles.result}>
      <table>
        <thead>
          <tr>
            <th>Year</th>
            <th>Investment Value</th>
            <th>Interest (Year)</th>
            <th>Total Interest</th>
            <th>Invested Capital</th>
          </tr>
        </thead>
        <tbody>
          {tableRows.map((row, index) => (
            <tr key={index}>
              <td>{row.year}</td>
              <td>{formatter.format(row.valueEndOfYear)}</td>
              <td>{formatter.format(row.interest)}</td>
              <td>
                {formatter.format(
                  row.valueEndOfYear -
                    (calculatorInputs.initialInvestment +
                      row.annualInvestment * row.year)
                )}
              </td>
              <td>
                {formatter.format(
                  calculatorInputs.initialInvestment +
                    row.annualInvestment * row.year
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
