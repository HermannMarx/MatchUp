import "./styles.css";
import { useParams, NavLink, useHistory } from "react-router-dom";
import Activity from "../../components/Activity/Activity";
import ChooseLocation from "../../components/ChooseLocation/ChooseLocation";
import InvitePlayers from "../../components/InvitePlayers/InvitePlayers";
import ConfirmEvent from "../../components/ConfirmEvent/ConfirmEvent";
import { useState, useEffect } from "react";
import axios from "axios";

const CreateEvent = ({ user }) => {
  const { id } = useParams();
  let history = useHistory();
  // state variables to switch the components
  const [activityAndDate, setActivityAndDate] = useState(true);
  const [chooseLocation, setChooseLocation] = useState(false);
  const [invitePlayers, setInvitePlayers] = useState(false);
  const [confirmEvent, setConfirmEvent] = useState(false);
  // state variables for the POST of a new event
  const [activity, setActivity] = useState();
  const [league_id, setLeague_id] = useState();
  const [date, setDate] = useState();
  const [starttime, setStarttime] = useState();
  const [endtime, setEndtime] = useState();
  const [city, setCity] = useState();
  const [latLng, setLatLng] = useState(null);
  const [organizer, setOrganizer] = useState();
  const [players, setPlayers] = useState(null);
  const [invitedPlayers, setInvitedPlayers] = useState([user]);
  const [event_id, setEvent_id] = useState();
  const [information, setInformation] = useState();

  console.log("this is user from create: ", user);

  const navCreate = (bool1, bool2, bool3, bool4) => {
    setActivityAndDate(bool1);
    setChooseLocation(bool2);
    setInvitePlayers(bool3);
    setConfirmEvent(bool4);
  };

  const chooseActivity = (select) => {
    setActivity(select);
  };

  const chooseDate = (select) => {
    setDate(select);
  };

  const chooseStarttime = (select) => {
    setStarttime(select);
  };

  const chooseEndtime = (select) => {
    setEndtime(select);
  };

  const chooseCity = (input) => {
    setCity(input);
    console.log(city);
  };

  const chooseLatLng = (nav) => {
    setLatLng(nav);
    console.log("THis is latlng: ", nav);
  };

  const newInformation = (info) => {
    setInformation(info);
  };

  const addPlayer = (invite, num) => {
    setInvitedPlayers([...invitedPlayers, invite]);
    const splicePlayer = players.splice(num, 1);
    setPlayers(players);
  };

  const removePlayer = (remove, num) => {
    setPlayers([...players, remove]);
    const splicePlayer = invitedPlayers.splice(num, 1);
    setInvitedPlayers(invitedPlayers);
  };

  const postEvent = async () => {
    console.log(Date.now());
    await axios
      .post("http://localhost:3000/events", {
        activity: activity,
        city: city,
        latLng: latLng,
        date: date,
        starttime: starttime,
        endtime: endtime,
        organizer: id,
        organizer_name: user.username,
        league_id: league_id,
        information: information,
      })
      .then((res) => {
        console.log(res.data._id);
        setEvent_id(res.data._id);
      });
    alert("Your event has been created");
    history.push(`/${id}/events`);
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => setPlayers(res.data));
  }, []);

  useEffect(async () => {
    console.log("This is event_id: ", event_id);
    await axios
      .post("http://localhost:3000/events/invite", {
        id: event_id,
        players: invitedPlayers,
      })
      .then((res) => console.log(res));
  }, [event_id]);

  return (
    <div className="CreateEvent">
      {activityAndDate ? (
        <Activity
          user={user}
          chooseActivity={chooseActivity}
          chooseDate={chooseDate}
          chooseStarttime={chooseStarttime}
          chooseEndtime={chooseEndtime}
          navCreate={navCreate}
        />
      ) : null}
      {chooseLocation ? (
        <ChooseLocation
          navCreate={navCreate}
          chooseCity={chooseCity}
          chooseLatLng={chooseLatLng}
        />
      ) : null}
      {invitePlayers ? (
        <InvitePlayers
          players={players}
          invitedPlayers={invitedPlayers}
          addPlayer={addPlayer}
          removePlayer={removePlayer}
          navCreate={navCreate}
        />
      ) : null}
      {confirmEvent ? (
        <ConfirmEvent
          postEvent={postEvent}
          navCreate={navCreate}
          activity={activity}
          date={date}
          starttime={starttime}
          endtime={endtime}
          city={city}
          latLng={latLng}
          invitedPlayers={invitedPlayers}
          newInformation={newInformation}
        />
      ) : null}
    </div>
  );
};

export default CreateEvent;
