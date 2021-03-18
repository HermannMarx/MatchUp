import "./styles.css";
import icon from "../../icon.png";
import { useState } from "react";
import { NavLink, useParams, Link } from "react-router-dom";

const TopBar = () => {
  const { id } = useParams();
  const [dropDown, setDropDown] = useState(false);

  const toggleDropDown = () => {
    if (dropDown) setDropDown(false);
    else setDropDown(true);
  };
  return (
    <div className="TopBar">
      <div>
        <Link to={`/${id}/events`}>
          <img src={icon} />
        </Link>
      </div>
      <div>
        <p>MATCH UP</p>
      </div>

      <div>
        <button onClick={() => toggleDropDown()}>
          <div style={{ color: "#FDF637", fontFamily: "Arial" }}>.</div>
          <div style={{ color: "#FF092D", fontFamily: "Arial" }}>.</div>
          <div style={{ color: "#1239FF", fontFamily: "Arial" }}>.</div>
        </button>
        {dropDown ? (
          <ul class="dropdown">
            <NavLink to={`/${id}/profile`} onClick={() => toggleDropDown()}>
              <li href="#home" className="profile">
                PROFILE
              </li>
            </NavLink>
            <NavLink to={`/${id}/newleague`} onClick={() => toggleDropDown()}>
              <li href="#about" className="league">
                NEW LEAGUE
              </li>
            </NavLink>
            <NavLink to={`/logout`}>
              <li href="#contact" className="logout">
                LOGOUT
              </li>
            </NavLink>
          </ul>
        ) : null}
      </div>
    </div>
  );
};

export default TopBar;
