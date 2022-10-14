import React from "react";
import allCountryScores from "./scores";
import HighScores from "./High-scores";
import "./App.css"

function App() {
  
      return (
        <div>
          <HighScores scores={allCountryScores} />
        </div>
      );
  
}










export default App