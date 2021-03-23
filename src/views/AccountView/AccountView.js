import "./styles.css";
import axios from "axios";
import TopBar from "../../components/TopBar/TopBar";
import SelectView from "../SelectView/SelectView";
import { NavLink, useParams } from "react-router-dom";
import { useState, useEffect } from "react";

const AccountView = () => {
  const { id } = useParams();
  const [user, setUser] = useState(null);
  const [events, setEvents] = useState(null);
  const [invites, setInvites] = useState(null);
  const [leagues, setLeagues] = useState(null);
  useEffect(() => {
    axios.get(`/users/${id}`).then((res) => {
      setUser(res.data[0]);
    });
  }, []);
  useEffect(() => {
    axios.get(`/events/${id}`).then((res) => {
      setEvents(res.data);
    });
  }, []);
  useEffect(() => {
    axios.get(`/events/${id}/getinvites`).then((res) => {
      setInvites(res.data);
    });
  }, []);
  useEffect(() => {
    axios.get(`/leagues/${id}`).then((res) => {
      setLeagues(res.data);
    });
  }, []);

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
            EVENTS
          </NavLink>
          <NavLink
            to={`/${id}/invites`}
            className="link"
            activeStyle={{
              color: "#FF092D",
              border: "6px solid #FF092D",
            }}
          >
            INVITES
          </NavLink>
          <NavLink
            to={`/${id}/leagues`}
            className="link"
            activeStyle={{
              color: "#1239FF",
              border: "6px solid #1239FF",
            }}
          >
            RANKING
          </NavLink>
        </div>
        <SelectView
          user={user}
          events={events}
          invites={invites}
          leagues={leagues}
        />
      </div>
    </div>
  );
};

export default AccountView;
