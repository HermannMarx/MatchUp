import { useState } from "react";
import { useParams } from "react-router-dom";
import "./styles.css";
import axios from "axios";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import L from "leaflet";

const Invite = ({ invite, accept, cancel, user }) => {
  const { id } = useParams();
  const [info, setInfo] = useState(false);
  const [map, setMap] = useState(false);
  const [playersList, setPlayersList] = useState(false);
  const position = invite.location.latLng;

  const iconPin = new L.Icon({
    iconUrl:
      "https://cdn1.iconfinder.com/data/icons/business-488/128/18-512.png",
    iconRetinaUrl:
      "https://cdn1.iconfinder.com/data/icons/business-488/128/18-512.png",
    iconAnchor: position,
    popupAnchor: position,
    shadowUrl: null,
    shadowSize: null,
    shadowAnchor: null,
    iconSize: new L.Point(40, 50),
    className: "leaflet-div-icon",
  });

  const togglePlayers = () => {
    if (playersList) setPlayersList(false);
    else setPlayersList(true);
  };

  const toggleMap = () => {
    if (map) setMap(false);
    else setMap(true);
  };

  const toggleInfo = () => {
    if (info) setInfo(false);
    else setInfo(true);
  };

  const insertUser = async () => {
    await axios.post("/leagues/insertuser", {
      activity: invite.activity,
      player_id: user._id,
      player_name: user.username,
    });
    await axios.put("/leagues/attend", {
      activity: invite.activity,
      player_id: user._id,
    });
  };

  return (
    <div className="Invite">
      <div className="infoBlock">
        <div>Activity:</div>
        <div>{invite.activity}</div>
        <div>Location:</div>
        <div>{invite.location.city}</div>
        <div>Date:</div>
        <div>{invite.starttime.split("T")[0]}</div>
        <div>Start: </div>
        <div>
          {invite.starttime.split("T")[1].split(":")[0] +
            ":" +
            invite.starttime.split("T")[1].split(":")[1]}
        </div>
        <div>End: </div>
        <div>
          {invite.endtime.split("T")[1].split(":")[0] +
            ":" +
            invite.endtime.split("T")[1].split(":")[1]}
        </div>
        <div>Organizer:</div>
        <div>{invite.organizer_name ? invite.organizer_name : null}</div>
      </div>
      {/* Activity: {invite.activity}
      <br />
      Location: {invite.location.city}
      <br />
      Date: {invite.starttime.split("T")[0]}
      <br />
      Start:{" "}
      {invite.starttime.split("T")[1].split(":")[0] +
        ":" +
        invite.starttime.split("T")[1].split(":")[1]}
      <br />
      End:{" "}
      {invite.endtime.split("T")[1].split(":")[0] +
        ":" +
        invite.endtime.split("T")[1].split(":")[1]}
      <br />
      Organizer: {invite.organizer_name ? invite.organizer_name : null}
      <br /> */}
      <div className="infoButtonContainer">
        <button className="invitebutton" onClick={togglePlayers}>
          PLAYERS
        </button>
        <button className="invitebutton" onClick={toggleMap}>
          MAP
        </button>
        <button className="invitebutton" onClick={toggleInfo}>
          INFO
        </button>
      </div>
      <div className={playersList ? `inviteList` : ""}>
        {playersList === false
          ? null
          : invite.players.map((name, index) => {
              if (name.accept === true) {
                return <div className="accept">{name.player_name}</div>;
              } else if (name.answer === false) {
                return <div className="pending">{name.player_name}</div>;
              } else {
                return <div className="canceled">{name.player_name}</div>;
              }
              /*   return (
                <div>
                  {index + 1}. {name.player_name}
                </div>
              ); */
            })}
      </div>

      {map === false ? null : (
        <MapContainer
          center={position ? position : null}
          zoom={11}
          scrollWheelZoom={false}
          className="invitemap"
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            class="tile"
          />

          <Marker position={position} icon={iconPin}>
            <Popup>Event will be here!</Popup>
          </Marker>
        </MapContainer>
      )}
      <div className={info ? "infoInvite" : ""}>
        {info === false ? null : invite.information}
      </div>

      <div className="buttons">
        <button
          id="accept"
          onClick={() => {
            insertUser();
            accept(invite._id);
          }}
        >
          ACCEPT
        </button>
        <button className="cancel" onClick={() => cancel(invite._id)}>
          CANCEL
        </button>
      </div>
    </div>
  );
};

export default Invite;
