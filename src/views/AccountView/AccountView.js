import "./styles.css";
import axios from "axios";
import TopBar from "../../components/TopBar/TopBar";
import SelectView from "../SelectView/SelectView";
import { Route, Switch, NavLink, Link, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const AccountView = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [events, setEvents] = useState(null);
  const [leagues, setLeagues] = useState(null);
  useEffect(() => {
    axios.get(`http://localhost:3000/users/${id}`).then((res) => {
      setUser(res.data[0]);
      console.log("This is the whole User", res.data[0]);
    });
  }, []);
  useEffect(() => {
    axios.get(`http://localhost:3000/events/${id}`).then((res) => {
      console.log("This is the whole EventData: ", res.data);
      setEvents(res.data);
    });
  }, []);
  useEffect(() => {
    axios.get(`http://localhost:3000/leagues/${id}`).then((res) => {
      setLeagues(res);
      console.log("This is leagues: ", res);
    });
  }, []);

  console.log("This is id: " + id);

  return (
    <div className="AccountView">
      <TopBar />
      <div className="centered">
        <div className="buttonContainer">
          <NavLink
            to={`/${id}/events`}
            className="link"
            activeStyle={{
              color: "#FDF637",
              border: "6px solid #FDF637",
            }}
          >
            Events
          </NavLink>
          <NavLink
            to={`/${id}/invites`}
            className="link"
            activeStyle={{
              color: "#FF092D",
              border: "6px solid #FF092D",
            }}
          >
            Ivites
          </NavLink>
          <NavLink
            to={`/${id}/leagues`}
            className="link"
            activeStyle={{
              color: "#1239FF",
              border: "6px solid #1239FF",
            }}
          >
            Ranking
          </NavLink>
        </div>
        <SelectView user={user} events={events} leagues={leagues} />
      </div>
    </div>
  );
};

export default AccountView;
