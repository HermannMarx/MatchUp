import "./styles.css";
import TopBarLogin from "../../components/TopBarLogin/TopBarLogin";
import SignUp from "../../components/SignUp/SignUp";

const LoginView = () => {
  return (
    <div className="LoginView">
      <TopBarLogin />
      <SignUp />
    </div>
  );
};

export default LoginView;
