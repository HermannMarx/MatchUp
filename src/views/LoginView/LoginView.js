import "./styles.css";
import TopBarLogin from "../../components/TopBarLogin/TopBarLogin";
import SignUpIn from "../../components/SignUpIn/SignUpIn";

const LoginView = () => {
  return (
    <div className="LoginView">
      Hello LoginView
      <TopBarLogin />
      <SignUpIn />
    </div>
  );
};

export default LoginView;
