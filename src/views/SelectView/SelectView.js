import "./styles.css";
import { Route, Switch, Link, useParams } from "react-router-dom";
import EventsView from "../EventsView/EventsView";
import InvitesView from "../InvitesView/InvitesView";
import LeaguesView from "../LeaguesView/LeaguesView";
import CreateEvent from "../CreateEvent/CreateEvent";

const SelectView = ({ user, events, invites, leagues }) => {
  const { id } = useParams();
  console.log("This is event from Select", events);
  return (
    <div className="SelectView">
      <Switch>
        <Route exact path="/:id/invites">
          <InvitesView invites={invites} />
        </Route>
        <Route exact path="/:id/events">
          <EventsView events={events} />
        </Route>
        <Route exact path="/:id/leagues">
          <LeaguesView leagues={leagues} />
        </Route>
        <Route exact path="/:id/create">
          <CreateEvent user={user} />
        </Route>
        <Route path="/:id/events"></Route>
      </Switch>
    </div>
  );
};

export default SelectView;
