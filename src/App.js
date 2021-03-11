import "./App.css";
import { Route, Switch } from "react-router-dom";
import { useState } from "react";
import AccountView from "./views/AccountView/AccountView";
import LoginView from "./views/LoginView/LoginView";
import SignUpView from "./views/SignUpView/SignUpView";

function App() {
  const [userId, setUserId] = useState(null);

  const userIdUpdate = (update) => {
    setUserId(update);
  };

  return (
    <div className="App AppRe">
      <Switch>
        <Route path="/signup">
          <SignUpView />
        </Route>
        <Route path="/login">
          <LoginView userUpdate={userIdUpdate} />
        </Route>
        <Route path="/:id">
          <AccountView />
        </Route>
        <Route path="/">
          <LoginView userUpdate={userIdUpdate} />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
