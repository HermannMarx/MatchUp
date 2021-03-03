import "./styles.css";
import EventsView from "../EventsView/EventsView";
import InvitesView from "../InvitesView/InvitesView";
import LeaguesView from "../LeaguesView/LeaguesView";
import CreateEvent from "../CreateEvent/CreateEvent";
import InvitePlayers from "../InvitePlayers/InvitePlayers";
import ChooseLocation from "../ChooseLocation/ChooseLocation";

const SelectView = () => {
  return (
    <div className="SelectView">
      Hello SelectView
      <EventsView />
      <InvitesView />
      <LeaguesView />
      <CreateEvent />
      <InvitePlayers />
      <ChooseLocation />
    </div>
  );
};

export default SelectView;
