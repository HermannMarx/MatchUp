import "./styles.css";
import { useParams, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const InvitePlayers = ({
  navCreate,
  players,
  invitedPlayers,
  addPlayer,
  removePlayer,
}) => {
  const { id } = useParams();
  /*   const [players, setPlayers] = useState(["Mary", "John", "Linda", "Anna"]);
  const [invitedPlayers, setInvitedPlayers] = useState([id]);

  const addPlayer = (invite, num) => {
    setInvitedPlayers([...invitedPlayers, invite]);
    const splicePlayer = players.splice(num, 1);
    setPlayers(players);
  };

  const removePlayer = (remove, num) => {
    setPlayers([...players, remove]);
    const splicePlayer = invitedPlayers.splice(num, 1);
    setInvitedPlayers(invitedPlayers);
  };

  useEffect(() => {
    console.log("This is invites: ", invitedPlayers);
    console.log("THis is players: ", players);
  }, [invitedPlayers]); */

  return (
    <div className="InvitePlayers">
      {invitedPlayers.map((player, index) => {
        return (
          <div>
            {player}
            <button
              className="addRemove"
              onClick={() => removePlayer(player, index)}
            >
              -
            </button>
          </div>
        );
      })}
      {players.map((player, index) => {
        return (
          <div>
            {player}
            <button
              className="addRemove"
              onClick={() => addPlayer(player, index)}
            >
              +
            </button>
          </div>
        );
      })}
      <button onClick={() => navCreate(false, true, false, false)}>Back</button>
      <button onClick={() => navCreate(false, false, false, true)}>Next</button>
    </div>
  );
};

export default InvitePlayers;
