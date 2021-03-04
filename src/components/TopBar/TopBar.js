import "./styles.css";
import icon from "../../icon.png";

const TopBar = () => {
  return (
    <div className="TopBar">
      <div>
        <img src={icon} />
      </div>
      <div>
        <p>MATCH UP</p>
      </div>

      <div>
        <button>...</button>
      </div>
    </div>
  );
};

export default TopBar;
