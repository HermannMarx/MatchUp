import "./styles.css";

const Invite = ({ invite }) => {
  return (
    <div className="Invite">
      Activity: {invite.activity}
      <br />
      Location: {invite.location.city}
      <br />
      Time: {invite.starttime}
      <br />
      Organizer: {invite.organizer_name ? invite.organizer_name : null}
      <br />
      Players:{" "}
      {invite.players.map((name, index) => {
        return (
          <div>
            {index + 1}. {name.player_name}
          </div>
        );
      })}
      <br />
      Information:
      <br />
      <div className="buttons">
        <button className="button">Accept</button>
        <button className="button">Cancel</button>
      </div>
    </div>
  );
};

export default Invite;
