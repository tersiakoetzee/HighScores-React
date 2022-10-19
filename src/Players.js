
const Player = ({ data }) => {
  return (
    <>
      {data.map((person, ind) => {
        return (
          <li key={ind} className="result">
            <span className="name">{person.n.toUpperCase()} </span>
            <span className="score">{person.s}</span>
          </li>
        );
      })}
    </>
  );
};

export default Player;