import { useParams } from "react-router";
import "./styles.css";

const Event = ({ event }) => {
  const { id } = useParams();

  return (
    <div className="Event">
      Activity: {event.activity}
      <br />
      Location: {event.location.city}
      <br />
      Date: {event.starttime.split("T")[0]}
      <br />
      Start:{" "}
      {event.starttime.split("T")[1].split(":")[0] +
        ":" +
        event.starttime.split("T")[1].split(":")[1]}
      <br />
      End:{" "}
      {event.endtime.split("T")[1].split(":")[0] +
        ":" +
        event.endtime.split("T")[1].split(":")[1]}
      <br />
      Organizer: {event.organizer_name ? event.organizer_name : null}
      <br />
      Players:{" "}
      {event.players.map((name, index) => {
        return (
          <div>
            {index + 1}. {name.player_name}
          </div>
        );
      })}
      <br />
      Information:
      {event.information ? event.information : null}
      <br />
      Comments:
    </div>
  );
};

export default Event;
