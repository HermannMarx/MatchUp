import "./styles.css";
import icon from "../../icon.png";
import { useState } from "react";

const TopBar = () => {
  const [dropDown, setDropDown] = useState(false);

  const toggleDropDown = () => {
    if (dropDown) setDropDown(false);
    else setDropDown(true);
  };
  return (
    <div className="TopBar">
      <div>
        <img src={icon} />
      </div>
      <div>
        <p>MATCH UP</p>
      </div>

      <div>
        <button onClick={() => toggleDropDown()}>
          <div style={{ color: "#FDF637" }}>.</div>
          <div style={{ color: "#FF092D" }}>.</div>
          <div style={{ color: "#1239FF" }}>.</div>
        </button>
        {dropDown ? (
          <ul class="dropdown">
            <li href="#home" className="profile">
              PROFILE
            </li>
            <li href="#about" className="league">
              NEW LEAGUE
            </li>
            <li href="#contact" className="logout">
              LOGOUT
            </li>
          </ul>
        ) : null}
      </div>
    </div>
  );
};

export default TopBar;
