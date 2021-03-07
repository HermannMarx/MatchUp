import "./styles.css";
import { Route, Switch, Link, useParams } from "react-router-dom";
import EventsView from "../EventsView/EventsView";
import InvitesView from "../InvitesView/InvitesView";
import LeaguesView from "../LeaguesView/LeaguesView";
import CreateEvent from "../CreateEvent/CreateEvent";

const SelectView = ({ user, events, leagues }) => {
  const { id } = useParams();
  return (
    <div className="SelectView">
      <Switch>
        <Route exact path="/:id/invites">
          <InvitesView />
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
        {/*  <Route exact path="/:id/players">
          <InvitePlayers />
        </Route> */}
        {/*    <Route exact path="/:id/location">
          <ChooseLocation />
        </Route> */}
        {/*   <Route exact path="/:id/confirm">
          <ConfirmEvent />
        </Route> */}
        <Route path="/:id/events"></Route>
      </Switch>
    </div>
  );
};

export default SelectView;
