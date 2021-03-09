import "./styles.css";
import { useEffect, useState } from "react";
import ConfirmEvent from "../ConfirmEvent/ConfirmEvent";

const Activity = ({
  user,
  navCreate,
  chooseActivity,
  chooseDate,
  chooseStarttime,
  chooseEndtime,
}) => {
  const sports = ["Basketball", "Football", "Volleyball"];

  useEffect(() => {
    if (user === null) {
      console.log("User is loading");
    } else {
      chooseActivity(user.interests[0]);
    }
  }, [user]);

  return (
    <div className="Activity">
      Create an Event
      {user ? (
        <div>
          <form>
            <label>
              Activity:
              <select onChange={(e) => chooseActivity(e.target.value)}>
                {user.interests.map((sport, index) => {
                  return <option value={sport}>{sport}</option>;
                })}
              </select>
            </label>
          </form>
          <label>
            Choose Date
            <input
              type="date"
              name="gamedate"
              onChange={(e) => chooseDate(e.target.value)}
            ></input>
          </label>
          <br />
          <label>
            Choose Starttime
            <input
              type="time"
              name="starttime"
              step="900"
              onChange={(e) => chooseStarttime(e.target.value)}
            ></input>
          </label>
          <br />
          <label>
            Choose Endtime
            <input
              type="time"
              name="endtime"
              step="900"
              onChange={(e) => chooseEndtime(e.target.value)}
            ></input>
          </label>
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
