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
    axios.get(`https://matchup-be.herokuapp.com/users/${id}`).then((res) => {
      console.log("This is the whole User", res.data[0]);
      setUser(res.data[0]);
    });
  }, []);
  useEffect(() => {
    axios.get(`https://matchup-be.herokuapp.com/events/${id}`).then((res) => {
      console.log("THis is events");
      setEvents(res.data);
    });
  }, []);
  useEffect(() => {
    axios
      .get(`https://matchup-be.herokuapp.com/events/${id}/getinvites`)
      .then((res) => {
        setInvites(res.data);
      });
  }, []);
  useEffect(() => {
    axios.get(`/leagues/${id}`).then((res) => {
      setLeagues(res.data);
      console.log("This is leagues: ", res);
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
