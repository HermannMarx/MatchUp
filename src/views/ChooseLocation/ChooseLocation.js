import "./styles.css";
import LocationForm from "../../components/LocationForm/LocationForm";
import { useParams, NavLink } from "react-router-dom";

const ChooseLocation = () => {
  const { id } = useParams();
  return (
    <div className="ChooseLocation">
      <LocationForm />
      <div className="sticky">
        <NavLink to={`/${id}/players`} className="EventsViewLink">
          <button className="buttonLocation">Next</button>
        </NavLink>
      </div>
    </div>
  );
};

export default ChooseLocation;
