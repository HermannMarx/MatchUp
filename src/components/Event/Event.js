import { useEffect, useState } from "react";
import { useParams } from "react-router";
import EventsView from "../../views/EventsView/EventsView";
import "./styles.css";

const Event = ({ event }) => {
  const { id } = useParams();

  return (
    <div className="Event">
      Activity: {event.activity}
      <br />
      Location: {event.location.city}
      <br />
      Time: {event.starttime}
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
      <br />
      Comments:
    </div>
  );
};

export default Event;
