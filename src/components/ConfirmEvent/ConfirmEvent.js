import "./styles.css";
import { useParams, NavLink } from "react-router-dom";

const ConfirmEvent = ({ navCreate, postEvent }) => {
  const { id } = useParams();
  return (
    <div className="ConfirmEvent">
      <button onClick={() => navCreate(false, false, true, false)}>Back</button>
      <button onClick={() => postEvent()}>Confirm</button>
    </div>
  );
};

export default ConfirmEvent;
