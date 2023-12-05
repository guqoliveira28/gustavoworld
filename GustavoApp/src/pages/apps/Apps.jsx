import { useState } from "react";
import SelectionBlock from "../../components/SelectionBlock";
import BackArrow from "../../components/BackArrow";
import InvestmentCalculator from "./InvestmentCalculator/InvestmentCalculator";
import investmentLogo from "../../img/investment-calculator-logo.png";

export default function Apps() {
  const [selectedAppId, setSelectedAppId] = useState();

  const apps = [
    {
      image: investmentLogo,
      imageAlt: "Investment Calculator App",
      title: "Investment Calculator",
      id: "invest",
    },
  ];

  let appSelection;

  function handleSelectedApp(app) {
    setSelectedAppId(app);
  }

  if (!selectedAppId) {
    appSelection = (
      <>
        {apps.map((app, index) => {
          return (
            <SelectionBlock
              key={index}
              image={app.image}
              imageAlt={app.imageAlt}
              title={app.title}
              onClick={() => handleSelectedApp(app.id)}
            />
          );
        })}
      </>
    );
  } else {
    switch (selectedAppId) {
      case "invest":
        appSelection = (
          <>
            <BackArrow clickEvent={() => setSelectedAppId()} />
            <InvestmentCalculator />
          </>
        );
        break;
      default:
        appSelection = (
          <>
            <BackArrow clickEvent={() => setSelectedAppId()} />
          </>
        );
    }
  }

  return appSelection;
}
