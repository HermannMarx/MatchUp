import logo from "./logo.svg";
import "./App.css";

import AccountView from "./views/AccountView/AccountView";
import LoginView from "./views/LoginView/LoginView";

function App() {
  return (
    <div className="App AppRe">
      <h>Hello World</h>
      <AccountView />
      <LoginView />
    </div>
  );
}

export default App;
