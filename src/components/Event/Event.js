import { useEffect, useState } from "react";
import EventsView from "../../views/EventsView/EventsView";
import "./styles.css";

const Event = ({ event }) => {
  const [organizer, setOrganizer] = useState();

  console.log(event.player_details[0].username);

  useEffect(() => setOrganizer(event.organizer), []);
  useEffect(
    () =>
      event.player_details.map((player, index) => {
        if (player._id === event.organizer) setOrganizer(player.username);
      }),
    [organizer]
  );

  return (
    <div className="Event">
      Activity: {event.activity}
      <br />
      Location: {event.location.city}
      <br />
      Time: {event.starttime}
      <br />
      Organizer: {organizer ? organizer : null}
      <br />
      Players:{" "}
      {event.player_details.map((name, index) => {
        return (
          <div>
            {index + 1}. {name.username}
          </div>
        );
      })}
      <br />
      Information:
      <br />
      Comments:
    </div>
  );
};

export default Event;
