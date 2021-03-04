import "./styles.css";
import { Route, Switch, Link } from "react-router-dom";
import EventsView from "../EventsView/EventsView";
import InvitesView from "../InvitesView/InvitesView";
import LeaguesView from "../LeaguesView/LeaguesView";
import CreateEvent from "../CreateEvent/CreateEvent";
import InvitePlayers from "../InvitePlayers/InvitePlayers";
import ChooseLocation from "../ChooseLocation/ChooseLocation";

const SelectView = () => {
  return (
    <div className="SelectView">
      <Switch>
        <Route exact path="/:id/invites">
          <InvitesView />
        </Route>
        <Route exact path="/:id/events">
          <EventsView />
        </Route>
        <Route exact path="/:id/leagues">
          <LeaguesView />
        </Route>
        <Route exact path="/:id/create">
          <CreateEvent />
        </Route>
        <Route exact path="/:id/players">
          <InvitePlayers />
        </Route>
        <Route exact path="/:id/location">
          <ChooseLocation />
        </Route>
        <Route path="/id"></Route>
      </Switch>
    </div>
  );
};

export default SelectView;
