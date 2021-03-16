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
      Activity: {invite.activity}
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
      <br />
      <button className="button" onClick={togglePlayers}>
        Players
      </button>
      {playersList === false
        ? null
        : invite.players.map((name, index) => {
            return (
              <div>
                {index + 1}. {name.player_name}
              </div>
            );
          })}
      <br />
      <button className="button" onClick={toggleMap}>
        See Map
      </button>
      {map === false ? null : (
        <MapContainer
          center={position ? position : null}
          zoom={11}
          scrollWheelZoom={false}
          className="map"
          id="map"
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
      <button className="button" onClick={toggleInfo}>
        See Info
      </button>
      {info === false ? null : invite.information}
      <br />
      <div className="buttons">
        <button
          className="button"
          onClick={() => {
            insertUser();
            accept(invite._id);
          }}
        >
          Accept
        </button>
        <button className="button" onClick={() => cancel(invite._id)}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Invite;
