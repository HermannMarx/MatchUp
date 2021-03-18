import "./styles.css";
import Invite from "../../components/Invite/Invite";
import { useParams, useHistory } from "react-router-dom";
import axios from "axios";

const InvitesView = ({ invites, user }) => {
  const { id } = useParams();

  const accept = async (event_id) => {
    await axios
      .post(`https://matchup-be.herokuapp.com/events/${id}/accept`, {
        event_id: event_id,
      })
      .then((res) => {
        console.log(res);
        window.location.reload();
      });
  };

  const cancel = (event_id) => {
    axios
      .post(`https://matchup-be.herokuapp.com/events/${id}/cancel`, {
        event_id: event_id,
      })
      .then((res) => {
        console.log(res);
        window.location.reload();
      });
  };

  return (
    <div className="InvitesView ContentView">
      {invites === null
        ? null
        : invites.map((invite, index) => {
            return (
              <Invite
                invite={invite}
                accept={accept}
                cancel={cancel}
                user={user}
              />
            );
          })}
    </div>
  );
};

export default InvitesView;
