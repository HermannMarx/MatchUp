import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./styles.css";

const League = ({ league }) => {
  const { id } = useParams();
  const [ranking, setRanking] = useState(null);
  useEffect(() => {
    league.players.sort((a, b) => {
      return b.wins - a.wins;
    });
    setRanking(league.players);
    console.log("This is id from useParams: ", id);
    console.log("This is player_id: ", league.players[0].player_id);

    /*    numbers.sort(function(a, b) {
      return a - b;
    });
    console.log(numbers); */
  }, []);
  return (
    <div className="League">
      <p>{league.activity}</p>
      {ranking === null
        ? null
        : ranking.map((player, index) => {
            if (player.player_id == id)
              return (
                <p style={{ color: "red" }}>
                  {index + 1}. You Wins:{player.wins} Attended:
                  {player.attend}
                </p>
              );
            return (
              <p>
                {index + 1}. {player.player_name} Wins:{player.wins} Attended:
                {player.attend}
              </p>
            );
          })}
    </div>
  );
};

export default League;
