import "./styles.css";
import TopBar from "../../components/TopBar/TopBar";
import SelectView from "../SelectView/SelectView";
import { Route, Switch, NavLink, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const AccountView = () => {
  const [user, setUser] = useState(null);

  const getUser = () => {};

  return (
    <div className="AccountView">
      <TopBar />
      <div className="centered">
        <div className="buttonContainer">
          <NavLink
            to="/id/events"
            className="link"
            activeStyle={{
              color: "#FDF637",
              border: "6px solid #FDF637",
            }}
          >
            Events
          </NavLink>
          <NavLink
            to="/id/invites"
            className="link"
            activeStyle={{
              color: "#FF092D",
              border: "6px solid #FF092D",
            }}
          >
            Ivites
          </NavLink>
          <NavLink
            to="/id/leagues"
            className="link"
            activeStyle={{
              color: "#1239FF",
              border: "6px solid #1239FF",
            }}
          >
            Ranking
          </NavLink>
        </div>
        <SelectView />
      </div>
    </div>
  );
};

export default AccountView;
