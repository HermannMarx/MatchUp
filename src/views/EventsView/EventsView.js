import "./styles.css";
import Event from "../../components/Event/Event";
import { useParams, NavLink } from "react-router-dom";

const EventsView = ({ events }) => {
  const { id } = useParams();
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
          <button>+</button>
        </NavLink>
      </div>
    </div>
  );
};

export default EventsView;
