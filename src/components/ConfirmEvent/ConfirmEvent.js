import "./styles.css";
import { useParams, NavLink } from "react-router-dom";
import { useState } from "react";

const ConfirmEvent = ({
  navCreate,
  postEvent,
  activity,
  date,
  starttime,
  endtime,
  city,
  latLng,
  invitedPlayers,
  newInformation,
}) => {
  const { id } = useParams();
  const [info, setInfo] = useState("");
  return (
    <div>
      <div className="ConfirmEvent">
        <p>Summary:</p>
        Activity: {activity ? activity : `Activity is still empty!`}
        <br />
        Date:{date ? date : `Date is still empty!`}
        <br />
        Start:{starttime ? starttime : `Start time is still empty! `}
        <br />
        End:{endtime ? endtime : `End time is still empty!`}
        <br />
        Location:{city ? city : `Location is still empty!`}
        <br />
        {latLng ? (
          <a
            href={`https://www.google.de/maps/@${latLng.lat},${latLng.lng},20z`}
          >
            See on maps
          </a>
        ) : (
          `Choose a point on the map!`
        )}
        <br />
        InvitedPlayers:
        {invitedPlayers
          ? invitedPlayers.map((player, index) => {
              return <p>{`${index + 1}. ${player.username}`}</p>;
            })
          : `No players invited!`}
        <br />
        <label for="t-area">Information:</label>
        <textarea
          id="t-area"
          name="information"
          rows="4"
          cols="50"
          className="textarea"
          maxlength="200"
          placeholder="Give usefull information to the attendants of your event!"
          value={info}
          onChange={(e) => {
            setInfo(e.target.value);
            newInformation(e.target.value);
          }}
        ></textarea>
      </div>
      <div className="navButtons">
        <button onClick={() => navCreate(false, false, true, false)}>
          Back
        </button>
        <button
          onClick={(e) => {
            postEvent();
          }}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default ConfirmEvent;
