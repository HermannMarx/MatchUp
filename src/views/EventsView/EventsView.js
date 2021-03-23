import "./styles.css";
import Event from "../../components/Event/Event";
import { useParams, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const EventsView = ({ events }) => {
  const { id } = useParams();

  return (
    <div className="ContentView">
      <div className="eventContainer">
        {events === null
          ? null
          : events.map((event, index) => {
              return <Event event={event} />;
            })}
      </div>
      <div>
        <NavLink to={`/${id}/create`} className="EventsViewLink">
          <button className="selectbutton sticky">+</button>
        </NavLink>
      </div>
    </div>
  );
};

export default EventsView;
