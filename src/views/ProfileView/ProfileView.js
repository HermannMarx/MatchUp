import "./styles.css";
import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";

import L from "leaflet";
import axios from "axios";

const ProfileView = ({ user }) => {
  const { id } = useParams();
  const history = useHistory();
  const allInterests = [
    "Football",
    "Basketball",
    "Volleyball",
    "Handball",
    "Kubb",
    "Beach Volleyball",
    "Tennis",
    "American Football",
    "Rugby",
    "Badminton",
    "Ping Pong",
    "Boules",
    "Ice Hockey",
    "Wrestling",
  ];
  const [newUsername, setNewUsername] = useState(user.username);
  const [newEmail, setNewEmail] = useState(user.email);
  const [newPW, setNewPW] = useState(user.password);
  const [deleteInterest, setDeleteInterest] = useState(user.interests[0]);
  const [newInterest, setNewInterest] = useState(allInterests[0]);
  const [newCity, setNewCity] = useState(user.location.city);

  const [position, setPosition] = useState(user.location.latLng);

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

  function LocationMarker() {
    const map = useMapEvents({
      click(e) {
        setPosition(e.latlng);

        map.flyTo(e.latlng, map.getZoom());
        return <Popup>Play here!</Popup>;
      },
      locationfound(e) {
        setPosition(e.latlng);
        map.flyTo(e.latlng, map.getZoom());
      },
    });

    return position === null ? null : (
      <Marker position={position} icon={iconPin}>
        <Popup>Choose the the main area you wanna play in!</Popup>
      </Marker>
    );
  }

  const updateProfile = () => {
    axios
      .put("http://localhost:3000/users", {
        id: id,
        username: newUsername,
        email: newEmail,
        password: newPW,
        city: newCity,
        latLng: position,
      })
      .then((res) => {
        console.log(res);
        history.push(`/${id}/events`);
        window.location.reload();
      });
  };

  const removeInterest = async () => {
    let remove = user.interests;
    const spliceIt = user.interests.map((interest, index) => {
      if (interest === deleteInterest) remove.splice(index, 1);
    });
    await axios
      .put("http://localhost:3000/users/rmsport", {
        id: id,
        interests: remove,
      })
      .then((res) => {
        console.log(res);
        alert(`${deleteInterest} has been removed from your interests!`);
      });
  };

  const addInterest = async () => {
    let add = user.interests;
    if (!add.includes(newInterest)) add.push(newInterest);

    await axios
      .put("http://localhost:3000/users/addsport", {
        id: id,
        interests: add,
      })
      .then((res) => {
        console.log(res);
        alert(`${newInterest} has been added to your interests!`);
      });
  };

  return (
    <div className="ProfileView">
      Edit your Profile!
      <br />
      Username
      <input
        type="text"
        placeholder={user.username}
        value={newUsername}
        onChange={(e) => setNewUsername(e.target.value)}
      />
      <br />
      Email
      <input
        type="text"
        placeholder={user.email}
        value={newEmail}
        onChange={(e) => setNewEmail(e.target.value)}
      />
      <br />
      Password
      <input
        type="password"
        placeholder="Type in a password"
        value={newPW}
        onChange={(e) => setNewPW(e.target.value)}
      />
      <br />
      <div className="row">
        Your Interests
        <select onChange={(e) => setDeleteInterest(e.target.value)}>
          {user.interests.map((sport, index) => {
            return <option value={sport}>{sport}</option>;
          })}
        </select>
        <button onClick={() => removeInterest()}>Delete</button>
      </div>
      <div className="row">
        <br />
        Choose Interest
        <select onChange={(e) => setNewInterest(e.target.value)}>
          {allInterests.map((sport, index) => {
            return <option value={sport}>{sport}</option>;
          })}
        </select>
        <button onClick={() => addInterest()}>Add</button>
      </div>
      <br />
      Your Location:
      <input
        type="text"
        placeholder={user.location.city}
        value={newCity}
        onChange={(e) => setNewCity(e.target.value)}
      />
      <br />
      Your Location:
      <MapContainer
        center={position}
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

        <LocationMarker />
      </MapContainer>
      <button onClick={() => updateProfile()}>Save All</button>
    </div>
  );
};

export default ProfileView;
