import "./styles.css";
//import LocationForm from "../../components/LocationForm/LocationForm";
import { useParams, NavLink } from "react-router-dom";

const ConfirmEvent = () => {
  const { id } = useParams();
  return (
    <div className="ConfirmEvent">
      <div className="sticky">
        <NavLink to={`/${id}/players`} className="EventsViewLink">
          <button className="buttonConfirm">Confirm</button>
        </NavLink>
      </div>
    </div>
  );
};

export default ConfirmEvent;
