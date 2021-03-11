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

import L from "leaflet";

const ChooseLocation = ({ navCreate, chooseCity, chooseLatLng }) => {
  const { id } = useParams();

  const [position, setPosition] = useState({
    lat: 49.900962961356534,
    lng: 10.895021610169728,
  });
  const [location, setLocation] = useState("");
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
        chooseLatLng(e.latlng);
        /*        console.log("This is LAtLNG: ", e.latlng);
        console.log("This is postion: ", position); */
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
        <Popup>Choose the location of your event!</Popup>
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
          class="tile"
        />

        <LocationMarker />
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
