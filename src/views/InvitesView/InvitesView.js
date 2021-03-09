import "./styles.css";
import Invite from "../../components/Invite/Invite";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

const InvitesView = ({ invites }) => {
  const { id } = useParams();

  const history = useHistory();

  const accept = (event_id) => {
    axios
      .post(`http://localhost:3000/events/${id}/accept`, {
        event_id: event_id,
      })
      .then((res) => {
        console.log(res);
        window.location.reload();
      });
  };

  const cancel = (event_id) => {
    axios
      .post(`http://localhost:3000/events/${id}/cancel`, {
        event_id: event_id,
      })
      .then((res) => {
        console.log(res);
        window.location.reload();
      });
  };

  return (
    <div className="InvitesView">
      {invites === null
        ? null
        : invites.map((invite, index) => {
            return <Invite invite={invite} accept={accept} cancel={cancel} />;
          })}
    </div>
  );
};

export default InvitesView;
