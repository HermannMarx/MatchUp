import "./styles.css";
import { useParams } from "react-router-dom";

const InvitePlayers = ({
  navCreate,
  players,
  invitedPlayers,
  addPlayer,
  removePlayer,
  updatePlayers,
}) => {
  const { id } = useParams();

  return (
    <div>
      <p className="title">Choose a player:</p>
      <div className="InvitePlayers">
        <div className="playerBlock">
          {players.isloading === true ||
          players.data === [] ||
          players.data === null
            ? null
            : players.data.map((player, index) => {
                if (player.player_id !== id) {
                  return (
                    <div className="playerSelect">
                      {player.username}
                      <button
                        className="addRemove"
                        onClick={() => addPlayer(player, index)}
                      >
                        +
                      </button>
                    </div>
                  );
                } else return null;
              })}
        </div>
      </div>
      <div className="title">Invited Players:</div>

      <div className="InvitePlayers">
        <div className="playerBlock">
          {invitedPlayers === []
            ? null
            : invitedPlayers.map((player, index) => {
                if (player._id === id) return null;
                else
                  return (
                    <div className="playerSelect">
                      {player.username}
                      <button
                        className="addRemove"
                        onClick={() => removePlayer(player, index)}
                      >
                        -
                      </button>
                    </div>
                  );
              })}
        </div>
      </div>
      <div className="navButtons">
        <button onClick={() => navCreate(false, true, false, false)}>
          Back
        </button>
        <button onClick={() => navCreate(false, false, false, true)}>
          Next
        </button>
      </div>
    </div>
  );
};

export default InvitePlayers;
