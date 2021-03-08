import "./styles.css";
import Invite from "../../components/Invite/Invite";
import { useParams } from "react-router-dom";

const InvitesView = ({ invites }) => {
  const { id } = useParams();
  return (
    <div className="InvitesView">
      {invites === null
        ? null
        : invites.map((invite, index) => {
            return <Invite invite={invite} />;
          })}
    </div>
  );
};

export default InvitesView;
