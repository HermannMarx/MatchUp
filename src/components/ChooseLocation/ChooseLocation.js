import "./styles.css";
import { useParams, NavLink } from "react-router-dom";
import GoogleMapReact from "google-map-react";
import { useState } from "react";

//API Maps  Key: AIzaSyBxTZO3Cxscv2j6YpQPATO7WUbZZs3m4uw

const AnyReactComponent = ({ text }) => <div>{text}</div>;

const ChooseLocation = ({ navCreate }) => {
  const { id } = useParams();
  const [lat, setlat] = useState(59.95);
  const [lng, setLng] = useState(30.33);
  return (
    <div className="ChooseLocation">
      <GoogleMapReact
        bootstrapURLKeys={{ key: "AIzaSyBxTZO3Cxscv2j6YpQPATO7WUbZZs3m4uw" }}
        defaultCenter={{
          lat: 59.95,
          lng: 30.33,
        }}
        defaultZoom={11}
      >
        <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
      </GoogleMapReact>
      <button onClick={() => navCreate(true, false, false, false)}>Back</button>
      <button onClick={() => navCreate(false, false, true, false)}>Next</button>
    </div>
  );
};

export default ChooseLocation;
