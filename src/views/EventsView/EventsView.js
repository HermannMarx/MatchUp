import "./styles.css";
import Event from "../../components/Event/Event";
import { useParams, Route, NavLink, Switch } from "react-router-dom";

const EventsView = ({ events }) => {
  const { id } = useParams();
  return (
    <div className="EventsView">
      <div className="eventContainer">
        {events === null
          ? null
          : events.map((event, index) => {
              return <Event event={event} />;
            })}
      </div>
      <div className="sticky">
        <NavLink to={`/${id}/create`} className="EventsViewLink">
          <button>+</button>
        </NavLink>
      </div>
      {/*    {   <Switch>
        <Route></Route>
        <Route></Route>
        <Route></Route>
        <Route path={`/${id}/events`}>
        </Route>}
      </Switch> */}
    </div>
  );
};

export default EventsView;
