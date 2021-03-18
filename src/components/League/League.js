import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./styles.css";
import axios from "axios";

const League = ({ league, user }) => {
  const { id } = useParams();
  const [ranking, setRanking] = useState(null);

  useEffect(() => {
    axios
      .post("https://matchup-be.herokuapp.com/users/filter", {
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
      <div className="leagueName">
        <p>{league.activity}</p>
      </div>
      <div>
        {ranking === null
          ? null
          : ranking.map((player, index) => {
              if (player.player_id == id)
                return (
                  <div className="infoBlock marked">
                    <div>
                      <p className="you">{index + 1}. You</p>
                    </div>
                    <div className="you">Wins:{player.wins}</div>
                  </div>
                );
              return (
                <div className="infoBlock">
                  <div>
                    {index + 1}. {player.player_name}
                  </div>
                  <div>
                    <p>Wins:{player.wins}</p>
                  </div>
                </div>
              );
            })}
      </div>
    </div>
  );
};

export default League;
