import "./App.css";
import { Route, Switch } from "react-router-dom";
import { useState } from "react";
import AccountView from "./views/AccountView/AccountView";
import LoginView from "./views/LoginView/LoginView";
import SignUpView from "./views/SignUpView/SignUpView";
import LogoutView from "./views/LogoutView/LogoutView";

function App() {
  const [userId, setUserId] = useState(null);

  return (
    <div className="App AppRe">
      <Switch>
        <Route path="/signup">
          <SignUpView />
        </Route>
        <Route path="/login">
          <LoginView />
        </Route>
        <Route path="/logout">
          <LogoutView />
        </Route>
        <Route path="/:id">
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
