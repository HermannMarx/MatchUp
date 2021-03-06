import "./styles.css";
import { useEffect, useState } from "react";
import ConfirmEvent from "../ConfirmEvent/ConfirmEvent";

const Activity = ({
  navCreate,
  chooseActivity,
  chooseDate,
  chooseStarttime,
  chooseEndtime,
}) => {
  const sports = ["Basketball", "Football", "Volleyball"];

  useEffect(() => chooseActivity(sports[0]), []);

  return (
    <div className="Activity">
      Create an Event
      <form /* onSubmit={} */>
        <label>
          Activity:
          <select
            /* value={this.state.value} onChange={this.handleChange} */
            /* value={sports[0]} */
            onChange={(e) => chooseActivity(e.target.value)}
          >
            {sports.map((sport, index) => {
              return <option value={sport}>{sport}</option>;
            })}
          </select>
          {/*     <select >
            <option value="grapefruit">Basketball</option>
            <option value="lime">Football</option>
            <option value="coconut">Volleyball</option>
            <option value="mango">Kubb</option>
          </select>  */}
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
      <button onClick={() => navCreate(false, true, false, false)}>Next</button>
    </div>
  );
};

export default Activity;
