import "./styles.css";
import Invite from "../../components/Invite/Invite";
import { useParams } from "react-router-dom";

const InvitesView = () => {
  const { id } = useParams();
  return (
    <div className="InvitesView">
      <Invite />
      <Invite />

      <Invite />
    </div>
  );
};

export default InvitesView;
