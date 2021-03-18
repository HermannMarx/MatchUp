import "./styles.css";
import { useState } from "react";
import axios from "axios";
import { useHistory, Link } from "react-router-dom";

const SignUpIn = ({ userUpdate }) => {
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
      .post(
        "/users/login",
        {
          username: username,
          password: password,
        },
        {
          withCredentials: true,
        }
      )
      .then((res) => {
        /* userUpdate(res); */
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
      <br />
      <div>Login in!</div>
      <br />
      <form onSubmit={(e) => tryLogin(e)}>
        <div>
          <input
            type="text"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            name="username"
            required
            id="username"
          />
        </div>

        <div>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            name="password"
            required
            id="password"
          />
        </div>
        <br />

        <div className="buttonDiv">
          <input type="submit" value="LOGIN" className="loginButton" />
        </div>

        <br />
      </form>
      <div>
        <p className="signupline">
          If you are not signed up yet. Create an account in less than 2
          minutes.
          <br />
          <Link to="/signup" className="signuplink">
            Click here!
          </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUpIn;
