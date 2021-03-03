import "./styles.css";
import TopBar from "../../components/TopBar/TopBar";
import SelectView from "../SelectView/SelectView";

const AccountView = () => {
  return (
    <div className="AccountView">
      Hello AccountView
      <TopBar />
      <div className="buttonContainer">
        Hello buttonContainer
        <button>Events</button>
        <button>Invites</button>
        <button>Ranking</button>
      </div>
      <SelectView />
    </div>
  );
};

export default AccountView;
