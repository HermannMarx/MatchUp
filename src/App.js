import logo from "./logo.svg";
import "./App.css";
import { Route, Switch, Link } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import AccountView from "./views/AccountView/AccountView";
import LoginView from "./views/LoginView/LoginView";

function App() {
  const [user, setUser] = useState(null);

  const getUser = () => {
    axios.get();
  };

  return (
    <div className="App AppRe">
      <Switch>
        <Route path="/id">
          <AccountView />
        </Route>
        <Route path="/">
          <LoginView />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
