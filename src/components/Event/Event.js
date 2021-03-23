import "./styles.css";
import { Link, useParams, useHistory } from "react-router-dom";
import { useState } from "react";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import L from "leaflet";

const Event = ({ event }) => {
  const { id } = useParams();
  const history = useHistory();

  const [info, setInfo] = useState(false);
  const [map, setMap] = useState(false);
  const [playersList, setPlayersList] = useState(false);
  const position = event.location.latLng;

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

  const date = new Date();
  const yr = date.getFullYear();
  const month = ("0" + (date.getMonth() + 1)).slice(-2);
  const day = ("0" + date.getDate()).slice(-2);
  const hrs = ("0" + date.getHours()).slice(-2);
  const mins = ("0" + date.getMinutes()).slice(-2);

  const expDate =
    yr + "-" + month + "-" + day + "T" + hrs + ":" + mins + ":00.000+00:00";

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

  return (
    <div className="Event">
      <div className="feedbackContainer">
        {event.feedback === false &&
        event.organizer == id &&
        event.endtime < expDate ? (
          <Link to={`/${id}/feedback/${event._id}`} className="feedback">
            <button>Feedback</button>
          </Link>
        ) : null}
      </div>

      <div className="infoBlock">
        <div>Activity:</div>
        <div>{event.activity}</div>
        <div>Location:</div>
        <div>{event.location.city}</div>
        <div>Date:</div>
        <div>{event.starttime.split("T")[0]}</div>
        <div>Start: </div>
        <div>
          {event.starttime.split("T")[1].split(":")[0] +
            ":" +
            event.starttime.split("T")[1].split(":")[1]}
        </div>
        <div>End: </div>
        <div>
          {event.endtime.split("T")[1].split(":")[0] +
            ":" +
            event.endtime.split("T")[1].split(":")[1]}
        </div>
        <div>Organizer:</div>
        <div>{event.organizer_name ? event.organizer_name : null}</div>
      </div>
      <div className="infoButtonContainer">
        <button className="infobutton" onClick={togglePlayers}>
          PLAYERS
        </button>
        <button className="infobutton" onClick={toggleMap}>
          MAP
        </button>
        <button className="infobutton" onClick={toggleInfo}>
          INFO
        </button>
      </div>
      <div className={playersList ? `playerList` : ""}>
        {playersList === false
          ? null
          : event.players.map((name, index) => {
              if (name.accept === true) {
                return <div className="accept">{name.player_name}</div>;
              } else if (name.answer === false) {
                return <div className="pending">{name.player_name}</div>;
              } else {
                return <div className="canceled">{name.player_name}</div>;
              }
            })}
      </div>
      {map === false ? null : (
        <MapContainer
          center={position ? position : null}
          zoom={11}
          scrollWheelZoom={false}
          className="eventmap"
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
      <div className={info ? "infoField" : ""}>
        {info
          ? event.information === null
            ? "No informaton"
            : event.information
          : null}
      </div>
    </div>
  );
};

export default Event;
