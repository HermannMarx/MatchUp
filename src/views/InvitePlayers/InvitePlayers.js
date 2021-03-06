import "./styles.css";
import InviteForm from "../../components/InviteForm/InviteForm";
import { useParams } from "react-router-dom";

const InvitePlayers = () => {
  const { id } = useParams();
  return (
    <div className="InvitePlayers">
      Hello InvitePlayers
      <InviteForm />
    </div>
  );
};

export default InvitePlayers;
