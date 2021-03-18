import "./styles.css";
import { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";

import L from "leaflet";

const SignUp = ({ userUpdate }) => {
  let history = useHistory();
  const [username, setUsername] = useState(null);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [interests, setInterests] = useState([]);
  const [city, setCity] = useState("");
  const [latLng, setLatLng] = useState(null);
  const interestsList = [
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
  ];

  const [position, setPosition] = useState({
    lat: 51.554001946981145,
    lng: 9.61995069695039,
  });

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
        setLatLng(e.latlng);
        console.log(latLng);
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
        <Popup>You want to play here!</Popup>
      </Marker>
    );
  }

  const createAccount = (e) => {
    e.preventDefault();
    axios
      .post("/users", {
        username: username,
        email: email,
        password: password,
        city: city,
        latLng: latLng,
        interests: interests,
      })
      .then((res) => {
        console.log(res);
        history.push(`/login`);
      });
  };

  return (
    <div className="SignUp">
      <div className="title">Create an account in just 2 minutes ;)</div>
      <form onSubmit={(e) => createAccount(e)}>
        <div className="inputContainer">
          <label for="username">Choose a username: </label>{" "}
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              console.log("THis is username: ", username);
            }}
            name="username"
            className="input"
            required
            id="username"
          />
        </div>
        <div className="inputContainer">
          <label for="email">Type in your email: </label>{" "}
          <input
            type="text"
            placeholder="Email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              console.log("THis is email: ", email);
            }}
            name="email"
            className="input"
            required
            id="email"
          />
        </div>
        <div className="inputContainer">
          <label for="passeword">Choose a password: </label>{" "}
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              console.log("This is password: ", password);
            }}
            name="password"
            className="input"
            required
            id="password"
          />
        </div>
        <div className="interestAndLocation">
          <div className="interests">
            <p>Choose your interests:</p>
            <br />
            <div className="profileGridSignUp">
              {interestsList.map((interest, index) => {
                return (
                  <div className="checkboxGrid">
                    <div>
                      <label for={interest}>{interest}</label>
                    </div>
                    <div>
                      <input
                        type="checkbox"
                        id={interest}
                        name={interest}
                        value={interest}
                        onChange={(e) => {
                          if (interests.includes(e.target.value)) {
                            let filtered = interests.filter(
                              (interest, index) => {
                                return interest !== e.target.value;
                              }
                            );
                            setInterests(filtered);
                            console.log(interests);
                          } else {
                            setInterests([...interests, e.target.value]);
                            console.log(interests);
                          }
                        }}
                      />
                    </div>
                  </div>
                );
              })}
            </div>
            <input type="submit" value="SIGN UP" id="submit" />
          </div>

          <div className="location">
            <label>
              Name your Location to play:
              <input
                type="text"
                name="city"
                maxlength="50"
                value={city}
                onChange={(e) => {
                  setCity(e.target.value);
                  console.log(city);
                }}
                className="input"
              />
            </label>
            <br />
            <br />

            <p>Pin the center of your availability!</p>
            <MapContainer
              center={position}
              zoom={4.5}
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
          </div>
        </div>
      </form>
    </div>
  );
};

export default SignUp;
