import "./styles.css";
import { useParams, NavLink } from "react-router-dom";
import Activity from "../../components/Activity/Activity";
import ChooseLocation from "../../components/ChooseLocation/ChooseLocation";
import InvitePlayers from "../../components/InvitePlayers/InvitePlayers";
import ConfirmEvent from "../../components/ConfirmEvent/ConfirmEvent";
import { useState, useEffect } from "react";
import axios from "axios";

const CreateEvent = ({ user }) => {
  const { id } = useParams();
  // state variables to switch the components
  const [activityAndDate, setActivityAndDate] = useState(true);
  const [chooseLocation, setChooseLocation] = useState(false);
  const [invitePlayers, setInvitePlayers] = useState(false);
  const [confirmEvent, setConfirmEvent] = useState(false);
  // state variables for the POST of a new event
  const [activity, setActivity] = useState();
  const [city, setCity] = useState();
  const [lat, setLat] = useState();
  const [league_id, setLeague_id] = useState();
  const [lng, setLng] = useState();
  const [date, setDate] = useState();
  const [starttime, setStarttime] = useState();
  const [endtime, setEndtime] = useState();
  const [organizer, setOrganizer] = useState();
  const [players, setPlayers] = useState(null);
  const [invitedPlayers, setInvitedPlayers] = useState([user]);
  const [event_id, setEvent_id] = useState();

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

  useEffect(() => {
    console.log("This is invites: ", invitedPlayers);
    console.log("THis is players: ", players);
  }, [invitedPlayers, players]);

  //
  const navCreate = (bool1, bool2, bool3, bool4) => {
    setActivityAndDate(bool1);
    setChooseLocation(bool2);
    setInvitePlayers(bool3);
    setConfirmEvent(bool4);
  };

  const chooseActivity = (select) => {
    setActivity(select);
    console.log("This is activity: ", activity);
  };

  const chooseDate = (select) => {
    setDate(select);
    console.log("THIS is date: ", date);
  };

  const chooseStarttime = (select) => {
    setStarttime(select);
    console.log("THIS is Start: ", starttime);
  };

  const chooseEndtime = (select) => {
    setEndtime(select);
    console.log("THIS is Start: ", endtime);
  };

  useEffect(() => {
    axios
      .get("http://localhost:3000/users")
      .then((res) => setPlayers(res.data));
  }, []);
  //test

  const postEvent = async () => {
    console.log("Creating event");
    await axios
      .post("http://localhost:3000/events", {
        activity: activity,
        city: city,
        lat: lat,
        lng: lng,
        starttime: starttime,
        endtime: endtime,
        organizer: id,
        organizer_name: user.username,
        league_id: league_id,
      })
      .then((res) => {
        console.log(res.data._id);
        setEvent_id(res.data._id);
        //const resLength = res.data.players.length;
        //players: invitedPlayers,
      });
  };
  useEffect(async () => {
    console.log("This is event_id: ", event_id);
    await axios
      .post("http://localhost:3000/events/invite", {
        id: event_id,
        players: invitedPlayers,
      })
      .then((res) => console.log(res));
  }, [event_id]);

  /*   const tryLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/users/login", {
        username: username,
        password: password,
      })
      .then((res) => {
        userUpdate(res);
        console.log(res.data._id);
        history.push(`/${res.data._id}/events`);
      });
  }; */

  return (
    <div className="CreateEvent">
      {activityAndDate ? (
        <Activity
          chooseActivity={chooseActivity}
          chooseDate={chooseDate}
          chooseStarttime={chooseStarttime}
          chooseEndtime={chooseEndtime}
          navCreate={navCreate}
        />
      ) : null}
      {chooseLocation ? <ChooseLocation navCreate={navCreate} /> : null}
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
        <ConfirmEvent postEvent={postEvent} navCreate={navCreate} />
      ) : null}
    </div>
  );
};

export default CreateEvent;
