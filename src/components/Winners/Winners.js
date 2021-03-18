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
      <p className="selectwinners">Select Winners</p>
      <div className="field">
        <div className="winnerBlock">
          {players2 === null
            ? null
            : players2.map((player, index) => {
                return (
                  <div className="inRow">
                    <div>{player.player_name}</div>
                    <div>
                      <button onClick={() => addWinner(player, index)}>
                        +
                      </button>
                    </div>
                  </div>
                );
              })}
        </div>
      </div>
      <div className="field">
        <div className="winnerBlock">
          {winners === null
            ? null
            : winners.map((winner, index) => {
                return (
                  <div className="inRow">
                    <div>{winner.player_name}</div>
                    <div>
                      <button onClick={() => removeWinner(winner, index)}>
                        -
                      </button>
                    </div>
                  </div>
                );
              })}
        </div>
      </div>
      <button onClick={() => submitResults()} className="submitButton">
        Submit
      </button>
    </div>
  );
};

export default Winners;
