import "./styles.css";
import EventForm from "../../components/EventForm/EventForm";
import { useParams } from "react-router-dom";

const CreateEvent = () => {
  const { id } = useParams();
  return (
    <div className="CreateEvent">
      Hello CreateEvent
      <EventForm />
    </div>
  );
};

export default CreateEvent;
