import "./styles.css";

const Winners = ({
  players2,
  winners,
  addWinner,
  removeWinner,
  submitResults,
}) => {
  return (
    <div>
      Select Winners
      <div className="field">
        {players2 === null
          ? null
          : players2.map((player, index) => {
              return (
                <p>
                  {player.player_name}
                  <button onClick={() => addWinner(player, index)}>+</button>
                </p>
              );
            })}
      </div>
      <div className="field">
        {winners === null
          ? null
          : winners.map((winner, index) => {
              return (
                <p>
                  {winner.player_name}
                  <button onClick={() => removeWinner(winner, index)}>-</button>
                </p>
              );
            })}
      </div>
      <button onClick={() => submitResults()}>Submit</button>
    </div>
  );
};

export default Winners;
