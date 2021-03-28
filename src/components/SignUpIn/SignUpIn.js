import "./styles.css";
import { useState } from "react";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";

const SignUpIn = (
  {
    /* userUpdate */
  }
) => {
  let history = useHistory();
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  /*  const tryLogin = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:3000/users/login", {
        username: username,
        password: password,
      })
      .then((res) => {
        userUpdate(res);
        console.log(res.data._id);
        console.log("THis is login-data: ", res);
        history.push(`/${res.data._id}/events`);
      })
      .catch((e) => {
        console.error(Error(e));
        history.push("/");
      });
  }; */

  const tryLogin = (e) => {
    e.preventDefault();
    axios
      .post("https://matchup-be.herokuapp.com/users/login", {
        username: username,
        password: password,
      })
      .then((res) => {
        /*  userUpdate(res); */
        console.log(res.data._id);
        console.log("THis is login-data: ", res);
        history.push(`/${res.data._id}/events`);
      })
      .catch((e) => {
        console.error(Error(e));
        history.push("/");
      });
  };

  return (
    <div className="SignUpIn">
      Login in!
      <form onSubmit={(e) => tryLogin(e)}>
        <input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          name="username"
          required
          id="username"
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          name="password"
          required
          id="password"
        />
        <input type="submit" value="LOGIN" />
      </form>
      <p>
        If you are not signed up yet. Create an account in less than 2 minutes.
        <Link to="/signup">Click here!</Link>
      </p>
    </div>
  );
};

export default SignUpIn;
