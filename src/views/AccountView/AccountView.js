import "./styles.css";
import TopBar from "../../components/TopBar/TopBar";
import SelectView from "../SelectView/SelectView";

const AccountView = () => {
  return (
    <div className="AccountView">
      <TopBar />
      <div className="centered">
        <div className="buttonContainer">
          <button>Events</button>
          <button>Invites</button>
          <button>Ranking</button>
        </div>
        <SelectView />
      </div>
    </div>
  );
};

export default AccountView;
