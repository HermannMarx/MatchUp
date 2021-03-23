import "./styles.css";
import { Route, Switch, useParams } from "react-router-dom";
import EventsView from "../EventsView/EventsView";
import InvitesView from "../InvitesView/InvitesView";
import LeaguesView from "../LeaguesView/LeaguesView";
import CreateEvent from "../CreateEvent/CreateEvent";
import ProfileView from "../ProfileView/ProfileView";
import NewLeagueView from "../NewLeagueView/NewLeagueView";
import FeedbackView from "../FeedbackView/FeedbackView";

const SelectView = ({ user, events, invites, leagues }) => {
  const { id } = useParams();

  return (
    <div className="SelectView">
      <Switch>
        <Route exact path="/:id/invites">
          <InvitesView invites={invites} user={user} />
        </Route>
        <Route exact path="/:id/events">
          <EventsView events={events} />
        </Route>
        <Route exact path="/:id/leagues">
          <LeaguesView leagues={leagues} user={user} />
        </Route>
        <Route exact path="/:id/create">
          <CreateEvent user={user} />
        </Route>
        <Route path="/:id/feedback/:event_id">
          <FeedbackView events={events} />
        </Route>
        <Route path="/:id/profile">
          <ProfileView user={user} />
        </Route>
        <Route path="/:id/newleague">
          <NewLeagueView />
        </Route>
      </Switch>
    </div>
  );
};

export default SelectView;
