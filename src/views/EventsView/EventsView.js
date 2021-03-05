import "./styles.css";
import Event from "../../components/Event/Event";
import { useParams } from "react-router-dom";

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
        <button>+</button>
      </div>
    </div>
  );
};

export default EventsView;
