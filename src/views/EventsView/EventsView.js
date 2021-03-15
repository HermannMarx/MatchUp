import "./styles.css";
import Event from "../../components/Event/Event";
import { useParams, NavLink } from "react-router-dom";
import { useEffect, useState } from "react";

const EventsView = ({ events }) => {
  const { id } = useParams();
  /*  const [eventOrder, setEventOrder] = useState(null);
  useEffect(() => {
    if (events === null) return null;
    else {
      events.sort();
      setEventOrder(events);
      console.log("Is t his order?", events);
    }
  }, [events]); */
  return (
    <div className="EventsView">
      <div className="eventContainer">
        {events === null
          ? null
          : events.map((event, index) => {
              return <Event event={event} />;
            })}
      </div>
      <div className="sticky">
        <NavLink to={`/${id}/create`} className="EventsViewLink">
          <button className="selectbutton">+</button>
        </NavLink>
      </div>
    </div>
  );
};

export default EventsView;
