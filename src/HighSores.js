
import Player from "./Players";

const HighScores = ({ scores }) => {
  return (
    <div>
      <h1 className="header">High Scores per Country</h1>
      {scores.map(({ name, scores }, ind) => {
        return (
          <div key={ind} className="table-wrapper">
            <h3 className="country">HIGH SCORES: {name}</h3>
            <ul className="table">
              <Player data={scores} />
            </ul>
          </div>
        );
      })}
    </div>
  );
};

export default HighScores;