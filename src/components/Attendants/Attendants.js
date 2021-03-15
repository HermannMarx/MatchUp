import "./styles.css";

const Attendants = ({
  players1,
  attendants,
  addAttendant,
  removeAttendant,
  toWinners,
}) => {
  return (
    <div>
      Select Attendants
      <div className="field">
        {players1 === null
          ? null
          : players1.map((player, index) => {
              return (
                <p>
                  {player.player_name}
                  <button onClick={() => addAttendant(player, index)}>+</button>
                </p>
              );
            })}
      </div>
      <div className="field">
        {attendants === null
          ? null
          : attendants.map((attendant, index) => {
              return (
                <p>
                  {attendant.player_name}
                  <button onClick={() => removeAttendant(attendant, index)}>
                    -
                  </button>
                </p>
              );
            })}
      </div>
      <button onClick={() => toWinners()}>To Winners</button>
    </div>
  );
};

export default Attendants;
