import "./styles.css";
import TopBarLogin from "../../components/TopBarLogin/TopBarLogin";
import SignUp from "../../components/SignUp/SignUp";
import { useEffect } from "react";

const LoginView = ({ userUpdate }) => {
  return (
    <div className="LoginView">
      <TopBarLogin />
      <SignUp userUpdate={userUpdate} />
    </div>
  );
};

export default LoginView;
