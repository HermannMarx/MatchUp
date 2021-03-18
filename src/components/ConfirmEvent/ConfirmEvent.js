import "./styles.css";
import { useParams } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

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
  user,
}) => {
  const { id } = useParams();
  const [info, setInfo] = useState("");
  const insertUser = async () => {
    await axios.post("/leagues/insertuser", {
      activity: activity,
      player_id: user._id,
      player_name: user.username,
    });
    await axios.put("/leagues/attend", {
      activity: activity,
      player_id: user._id,
    });
  };
  return (
    <div>
      <div className="ConfirmEvent">
        <p className="title">Summary:</p>
        <div className="innerCircle">
          <div className="summaryBlock">
            <div>Activity:</div>
            <div>{activity ? activity : `Activity is still empty!`}</div>
            <div>Date:</div>
            <div>{date ? date : `Date is still empty!`}</div>
            <div>Start:</div>
            <div>{starttime ? starttime : `Start time is still empty! `}</div>
            <div>End:</div>
            <div>{endtime ? endtime : `End time is still empty!`}</div>
            <div>Location:</div>
            <div>{city ? city : `Location is still empty!`}</div>

            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </div>
          <div className="summaryBlock">
            <div>
              {latLng ? (
                <a
                  href={`https://www.google.de/maps/@${latLng.lat},${latLng.lng},20z`}
                >
                  See on maps
                </a>
              ) : (
                `Choose a point on the map!`
              )}
            </div>
          </div>

          <div className="summaryBlock">
            <div>Players:</div>
            <div></div>
            {invitedPlayers
              ? invitedPlayers.map((player, index) => {
                  return <div>{`${index + 1}. ${player.username}`}</div>;
                })
              : `No players invited!`}
          </div>

          <div className="summaryBlock">
            <label for="t-area">Information:</label>
          </div>
          <textarea
            id="t-area"
            name="information"
            rows="4"
            cols="50"
            className="textarea"
            maxlength="300"
            placeholder="Give usefull information to the attendants of your event!"
            value={info}
            onChange={(e) => {
              setInfo(e.target.value);
              newInformation(e.target.value);
            }}
          ></textarea>
        </div>
      </div>
      <div className="navButtons">
        <button onClick={() => navCreate(false, false, true, false)}>
          Back
        </button>
        <button
          onClick={(e) => {
            postEvent();
            insertUser();
          }}
        >
          Confirm
        </button>
      </div>
    </div>
  );
};

export default ConfirmEvent;
