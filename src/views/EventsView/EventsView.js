import "./styles.css";
import Event from "../../components/Event/Event";

const EventsView = () => {
  return (
    <div className="EventsView">
      <div className="eventContainer">
        <Event />
        <Event />
        <Event />
      </div>
      <div className="sticky">
        <button>+</button>
      </div>
    </div>
  );
};

export default EventsView;
