import "./styles.css";
import icon from "../../icon.png";
import { Link } from "react-router-dom";

const TopBarLogin = () => {
  return (
    <div className="TopBarLogin">
      <div>
        <Link to="/login">
          <img src={icon} />
        </Link>
      </div>
      <div>
        <p>MATCH UP</p>
      </div>

      <div className="emptyButton"></div>
    </div>
  );
};

export default TopBarLogin;
