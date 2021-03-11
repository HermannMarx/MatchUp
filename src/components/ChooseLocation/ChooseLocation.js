import "./styles.css";
import { useParams, NavLink } from "react-router-dom";
import { useState } from "react";

import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
} from "react-leaflet";
import icon from "../ChooseLocation/pin.png";

const ChooseLocation = ({ navCreate, chooseCity, chooseLatLng }) => {
  const { id } = useParams();

  const position = [49.89932450930957, 10.89200371036407];
  const [location, setLocation] = useState("");

  function LocationMarker() {
    const [position, setPosition] = useState(null);
    const map = useMapEvents({
      click(e) {
        chooseLatLng(e.latlng);
        setPosition(e.latlng);
        console.log(e.latlng);
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

  return (
    <div className="chooseLocation">
      <form>
        <label>
          Location:
          <input
            type="text"
            name="location"
            maxlength="50"
            value={location}
            onChange={(e) => {
              setLocation(e.target.value);
              chooseCity(e.target.value);
            }}
          />
        </label>
      </form>
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

      <div className="navButtons">
        <button onClick={() => navCreate(true, false, false, false)}>
          Back
        </button>
        <button onClick={() => navCreate(false, false, true, false)}>
          Next
        </button>
      </div>
    </div>
  );
};

export default ChooseLocation;
