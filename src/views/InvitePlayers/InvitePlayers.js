import "./styles.css";
import InviteForm from "../../components/InviteForm/InviteForm";
import { useParams, NavLink } from "react-router-dom";

const InvitePlayers = () => {
  const { id } = useParams();
  return (
    <div className="InvitePlayers">
      <InviteForm />
      <div className="sticky">
        <NavLink to={`/${id}/confirm`} className="EventsViewLink">
          <button className="buttonPlayers">Next</button>
        </NavLink>
      </div>
    </div>
  );
};

export default InvitePlayers;
