import "./styles.css";
import { useEffect } from "react";

const Activity = ({
  user,
  navCreate,
  chooseActivity,
  chooseDate,
  chooseStarttime,
  chooseEndtime,
}) => {
  useEffect(() => {
    if (user === null) {
      console.log("User is loading");
    } else {
      chooseActivity(user.interests[0]);
    }
  }, [user]);

  return (
    <div className="Activity">
      <p className="title">Create an Event</p>
      {user ? (
        <div className="activityBlock">
          <div>
            <label for="sport">Activity:</label>
          </div>
          <div>
            <select id="sport" onChange={(e) => chooseActivity(e.target.value)}>
              {user.interests.map((sport, index) => {
                return <option value={sport}>{sport}</option>;
              })}
            </select>
          </div>
          <div>
            <label for="date">Choose Date</label>
          </div>
          <div>
            <input
              id="date"
              type="date"
              name="gamedate"
              onChange={(e) => chooseDate(e.target.value)}
            ></input>
          </div>
          <div>
            <label for="start">Choose Starttime</label>
          </div>
          <div>
            <input
              id="start"
              type="time"
              name="starttime"
              step="900"
              onChange={(e) => chooseStarttime(e.target.value)}
            ></input>
          </div>
          <div>
            <label for="end">Choose Endtime</label>
          </div>
          <div>
            <input
              id="end"
              type="time"
              name="endtime"
              step="900"
              onChange={(e) => chooseEndtime(e.target.value)}
            ></input>
          </div>

          <br />
          <br />
        </div>
      ) : (
        <p>Loading</p>
      )}
      <div className="navButtons">
        <button onClick={() => navCreate(false, true, false, false)}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Activity;
