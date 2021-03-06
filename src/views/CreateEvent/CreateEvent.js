import "./styles.css";
import EventForm from "../../components/EventForm/EventForm";
import { useParams, NavLink } from "react-router-dom";

const CreateEvent = () => {
  const { id } = useParams();
  return (
    <div className="CreateEvent">
      <EventForm />
      <div className="sticky">
        <NavLink to={`/${id}/location`} className="EventsViewLink">
          <button className="buttonCreate">Next</button>
        </NavLink>
      </div>
    </div>
  );
};

export default CreateEvent;
