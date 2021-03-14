import { useParams } from "react-router-dom";
import "./styles.css";
import axios from "axios";

const Invite = ({ invite, accept, cancel, user }) => {
  const { id } = useParams();
  const insertUser = async () => {
    await axios.post("http://localhost:3000/leagues/insertuser", {
      activity: invite.activity,
      player_id: user._id,
      player_name: user.username,
    });
    await axios.put("http://localhost:3000/leagues/attend", {
      activity: invite.activity,
      player_id: user._id,
    });
  };

  return (
    <div className="Invite">
      Activity: {invite.activity}
      <br />
      Location: {invite.location.city}
      <br />
      Date: {invite.starttime.split("T")[0]}
      <br />
      Start:{" "}
      {invite.starttime.split("T")[1].split(":")[0] +
        ":" +
        invite.starttime.split("T")[1].split(":")[1]}
      <br />
      End:{" "}
      {invite.endtime.split("T")[1].split(":")[0] +
        ":" +
        invite.endtime.split("T")[1].split(":")[1]}
      <br />
      Organizer: {invite.organizer_name ? invite.organizer_name : null}
      <br />
      Players:{" "}
      {invite.players.map((name, index) => {
        return (
          <div>
            {index + 1}. {name.player_name}
          </div>
        );
      })}
      <br />
      Information:
      {invite.information ? invite.information : null}
      <br />
      <div className="buttons">
        <button
          className="button"
          onClick={() => {
            insertUser();
            accept(invite._id);
          }}
        >
          Accept
        </button>
        <button className="button" onClick={() => cancel(invite._id)}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Invite;
