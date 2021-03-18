import axios from "axios";
import { useEffect, useState } from "react";
import { useParams, useHistory } from "react-router-dom";
import "./styles.css";
import ChooseAttendants from "../../components/ChooseAttendants/ChooseAttendants";
import ChooseWinners from "../../components/ChooseWinners/ChooseWinners";
import Attendant from "../../components/Attendants/Attendants";
import Attendants from "../../components/Attendants/Attendants";
import Winners from "../../components/Winners/Winners";

const FeedbackView = ({ events }) => {
  const { id } = useParams();
  const history = useHistory();
  // states to switch between attendants and winners
  // const [chooseAttendants, setChooseAttendants] = useState(true);
  // const [chooseWinners, setChooseWinners] = useState(false);

  const { event_id } = useParams();
  const [event, setEvent] = useState(null);
  //const [players1, setPlayers1] = useState(null);
  const [players2, setPlayers2] = useState(null);
  const [attendants, setAttendants] = useState([]);
  const [winners, setWinners] = useState([]);

  useEffect(() => {
    if (events !== null) {
      const filter = events.filter((event, index) => event._id === event_id);
      const accFilter = [];
      console.log("This is accept from feedback: ", filter[0].players);
      filter[0].players.map((player, index) => {
        if (player.accept === true) accFilter.push(player);
      });

      setEvent(filter[0]);

      setPlayers2(accFilter);
    }
  }, [events]);

  /*  const toWinners = () => {
    setChooseAttendants(false);
    setChooseWinners(true);
  }; */

  /*   const addAttendant = (attendant, num) => {
    setAttendants([...attendants, attendant]);
    const splicePlayer1 = players1.splice(num, 1);
    setPlayers1(players1);
  }; */

  /*   const removeAttendant = (attendant, num) => {
    setPlayers1([...players1, attendant]);
    const splicePlayer2 = attendants.splice(num, 1);
    setAttendants(attendants);
  }; */
  const addWinner = (winner, num) => {
    setWinners([...winners, winner]);
    const splicePlayer3 = players2.splice(num, 1);
    setPlayers2(players2);
  };

  const removeWinner = (winner, num) => {
    setPlayers2([...players2, winner]);
    const splicePlayer4 = winners.splice(num, 1);
    setWinners(winners);
  };

  const submitResults = async () => {
    /*     await axios.post("http://localhost:3000/leagues/insertuser", {
      activity: event.activity,
      attendants: attendants,
    });
    await axios
      .put("http://localhost:3000/leagues/attend", {
        activity: event.activity,
        attendants: attendants,
      })
      .then((res) => console.log(res)); */
    await axios
      .put("https://matchup-be.herokuapp.com/leagues/win", {
        activity: event.activity,
        winners: winners,
      })
      .then((res) => console.log("THis is winners: ", res));
    await axios
      .put("https://matchup-be.herokuapp.com/events/feedback", {
        id: event._id,
      })
      .then((res) => {
        console.log(res);
        history.push(`/${id}/events`);
        window.location.reload();
      });
  };

  return (
    <div className="FeedbackView">
      {/*    {chooseAttendants === false ? null : (
        <Attendants
          players1={players1}
          attendants={attendants}
          addAttendant={addAttendant}
          removeAttendant={removeAttendant}
          toWinners={toWinners}
        />
      )} */}
      {players2 === null ? null : (
        <Winners
          players2={players2}
          winners={winners}
          addWinner={addWinner}
          removeWinner={removeWinner}
          submitResults={submitResults}
        />
      )}
    </div>
  );
};

export default FeedbackView;
