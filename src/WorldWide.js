
const WordWide = ({ data }) => {
  let playerList = [];

  for (let key in data) {
    for (let player of data[key].scores) {
      playerList.push(player);
    }
  }

  let highToLow = playerList.sort((playerX, playerY) => {
    return playerX.s > playerY.s ? -1 : 1;
  });

  return (
    <>
      <h1 className="header">World-Wide Player Score Table</h1>
      <div className="table-wrapper ">
        <ul className="table">
          {highToLow.map((player, ind) => {
            return (
              <li className="result" key={ind}>
                <span className="name">{player.n}</span>{" "}
                <span className="score">{player.s}</span>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
};

export default WordWide;