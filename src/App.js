
import React, { useState } from "react";
import allCountryScores from "./Scores";
import HighScores from "./HighSores";
import WordWide from "./WorldWide";

import "./App.css";

function App() {
  const [isOrdered, setIsOrdered] = useState(true);

  let alphabeticalOrder = [...allCountryScores].sort((a, b) => {
    return a.name < b.name ? -1 : 1;
  });

  alphabeticalOrder.map((country) => {
    return country.scores.sort((personA, personB) => {
      return isOrdered
        ? personA.s > personB.s
          ? -1
          : 1
        : personA.s < personB.s
        ? -1
        : 1;
    });
  });

  const handleClick = () => {
    setIsOrdered(!isOrdered);
  };

  return (
    <div className="mainContainer">
      <WordWide data={allCountryScores} />
      <button className="button" onClick={handleClick}>
        Reverse Player Score Order
      </button>
      <HighScores scores={alphabeticalOrder} />
    </div>
  );
}

export default App;
