import "./styles.css";
import icon from "../../icon.png";

const TopBarLogin = () => {
  return (
    <div className="TopBarLogin">
      <div>
        <img src={icon} />
      </div>
      <div>
        <p>MATCH UP</p>
      </div>

      <div className="emptyButton"></div>
    </div>
  );
};

export default TopBarLogin;
