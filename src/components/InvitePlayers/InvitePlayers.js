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
      <p>Invited Players:</p>
      <div className="InvitePlayers">
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
      <p>Choose a player:</p>
      <div className="InvitePlayers">
        {players.isloading || players.data === []
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
