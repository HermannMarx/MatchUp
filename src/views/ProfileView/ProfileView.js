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
  const [newUsername, setNewUsername] = useState(null);
  const [newEmail, setNewEmail] = useState(null);
  const [newPW, setNewPW] = useState(null);
  const [deleteInterest, setDeleteInterest] = useState(null);
  const [newInterest, setNewInterest] = useState(allInterests[0]);
  const [newCity, setNewCity] = useState(null);

  const [position, setPosition] = useState(null);

  useEffect(() => {
    if (user !== null) {
      setNewUsername(user.username);
      setNewEmail(user.email);
      setNewPW(user.password);
      setDeleteInterest(user.interests[0]);
      setNewCity(user.location.city);
      setPosition(user.location.latLng);
    }
  }, [user]);

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
      .put("/users", {
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
      .put("/users/rmsport", {
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
      .put("/users/addsport", {
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
      <div className="profileGrid">
        <div>Username:</div>
        <div>
          <input
            type="text"
            placeholder={user === null ? null : user.username}
            value={newUsername}
            onChange={(e) => setNewUsername(e.target.value)}
          />
        </div>
        <div></div>
        <div>Email:</div>

        <div>
          <input
            type="text"
            placeholder={user === null ? null : user.email}
            value={newEmail}
            onChange={(e) => setNewEmail(e.target.value)}
          />
        </div>
        <div></div>
        <div>Password:</div>
        <div>
          <input
            type="password"
            placeholder="Type in a password"
            value={newPW}
            onChange={(e) => setNewPW(e.target.value)}
          />
        </div>
        <div></div>
        <div>Your Interests:</div>
        <div>
          <select onChange={(e) => setDeleteInterest(e.target.value)}>
            {user === null
              ? null
              : user.interests.map((sport, index) => {
                  return <option value={sport}>{sport}</option>;
                })}
          </select>
        </div>
        <div>
          <button onClick={() => removeInterest()}>Delete</button>
        </div>
        <div>New Interest:</div>
        <div>
          <select onChange={(e) => setNewInterest(e.target.value)}>
            {allInterests.map((sport, index) => {
              return <option value={sport}>{sport}</option>;
            })}
          </select>
        </div>
        <div>
          <button onClick={() => addInterest()}>Add</button>
        </div>
        <div>Your City:</div>
        <div>
          <input
            type="text"
            placeholder={user === null ? null : user.location.city}
            value={newCity}
            onChange={(e) => setNewCity(e.target.value)}
          />
        </div>
        <div></div>
      </div>
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      Your Location:
      {position === null ? null : (
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
      )}
      <button onClick={() => updateProfile()}>Save All</button>
    </div>
  );
};

export default ProfileView;
