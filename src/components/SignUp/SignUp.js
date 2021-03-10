import "./styles.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";

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
    "Basektball",
    "Volleyball",
    "Handball",
    "Kubb",
    "Beach Volleyball",
    "Tennis",
    "American Footbal",
    "Rugby",
    "Badminton",
  ];

  const position = [51.35513728554116, 10.0529898448344];

  function LocationMarker() {
    const [position, setPosition] = useState(null);
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
      <Marker position={position}>
        <Popup>You are here</Popup>
      </Marker>
    );
  }

  const createAccount = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/users", {
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
      Create an account in just 2 minutes ;)
      <form onSubmit={(e) => createAccount(e)}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => {
            setUsername(e.target.value);
            console.log("THis is username: ", username);
          }}
          name="username"
          required
          id="username"
        />
        <br />
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            console.log("THis is email: ", email);
          }}
          name="email"
          required
          id="email"
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            console.log("This is password: ", password);
          }}
          name="password"
          required
          id="password"
        />
        <p>Choose your interests:</p>
        {interestsList.map((interest, index) => {
          return (
            <div>
              <label for={interest}>{interest}</label>
              <input
                type="checkbox"
                id={interest}
                name={interest}
                value={interest}
                onChange={(e) => {
                  if (interests.includes(e.target.value)) {
                    let filtered = interests.filter((interest, index) => {
                      return interest !== e.target.value;
                    });
                    setInterests(filtered);
                    console.log(interests);
                  } else {
                    setInterests([...interests, e.target.value]);
                    console.log(interests);
                  }
                }}
              />
            </div>
          );
        })}
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
          />
        </label>
        <p>Pin the center of your availability!</p>
        <MapContainer
          center={position}
          zoom={5}
          scrollWheelZoom={false}
          className="map"
          id="map"
        >
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            /*    url={icon} */
            class="tile"
          />
          <LocationMarker />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
        </MapContainer>
        <input type="submit" value="SIGN UP" />
      </form>
    </div>
  );
};

export default SignUp;
