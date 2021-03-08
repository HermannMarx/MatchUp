import "./styles.css";
import Event from "../../components/Event/Event";
import { useParams, Route, NavLink, Switch } from "react-router-dom";

const EventsView = ({ events }) => {
  const expire = () => {
    /*  const date = end.split("T")[0];
    const time = end.split("T")[1];
    const year = date.split("-")[0];
    const month = date.split("-")[1];
    const day = date.split("-")[2];
    const hour = time.split(":")[0];
    const minutes = time.split(":")[1]; */
    //2021-03-21T18:59:00.000+00:00

    // ('0' + MyDate.getDate()).slice(-2)
    const date = new Date();
    const yr = date.getFullYear();
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const day = ("0" + date.getDate()).slice(-2);
    const hrs = ("0" + date.getHours()).slice(-2);
    const minutes = ("0" + date.getMinutes()).slice(-2);
    const expire =
      yr +
      "-" +
      month +
      "-" +
      day +
      "T" +
      hrs +
      ":" +
      minutes +
      ":00.000+00:00";
    console.log("THis is expire: ", expire);
    return expire;
  };
  expire();

  const date = new Date();

  const { id } = useParams();
  return (
    <div className="EventsView">
      <div className="eventContainer">
        {events === null
          ? null
          : events.map((event, index) => {
              console.log("This is endtime: ", event.endtime);
              console.log("This is expire: ", expire());
              return <Event event={event} />;
            })}
      </div>
      <div className="sticky">
        <NavLink to={`/${id}/create`} className="EventsViewLink">
          <button>+</button>
        </NavLink>
      </div>
    </div>
  );
};

export default EventsView;
