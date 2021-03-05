import "./styles.css";
import { useState, useEffect } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";

const SignUpIn = ({ userUpdate }) => {
  let history = useHistory();
  const [username, setUsername] = useState(null);
  const [password, setPassword] = useState(null);

  const tryLogin = (e) => {
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
    </div>
  );
};

export default SignUpIn;
