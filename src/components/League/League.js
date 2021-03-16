import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./styles.css";
import axios from "axios";

const League = ({ league, user }) => {
  const { id } = useParams();
  const [ranking, setRanking] = useState(null);

  useEffect(() => {
    axios
      .post("/users/filter", {
        latLng: user.location.latLng,
        activity: league.activity,
      })
      .then((res) => {
        const filtered = [];
        console.log("Proxytest: ", res);
        league.players.map((player, index) => {
          for (let i = 0; i < res.data.length; i++) {
            if (player.player_id == res.data[i]._id) {
              filtered.push(player);
            }
          }
        });
        filtered.sort((a, b) => {
          return b.wins - a.wins;
        });
        setRanking(filtered);
      });
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
