import "./styles.css";
import LocationForm from "../../components/LocationForm/LocationForm";
import { useParams } from "react-router-dom";

const ChooseLocation = () => {
  const { id } = useParams();
  return (
    <div className="ChooseLocation">
      Hello ChooseLocation
      <LocationForm />
    </div>
  );
};

export default ChooseLocation;
