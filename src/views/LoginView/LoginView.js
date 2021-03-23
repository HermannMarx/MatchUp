import "./styles.css";
import TopBarLogin from "../../components/TopBarLogin/TopBarLogin";
import SignUpIn from "../../components/SignUpIn/SignUpIn";

const LoginView = (
  {
    /* userUpdate */
  }
) => {
  return (
    <div className="LoginView">
      <TopBarLogin />
      <SignUpIn /* userUpdate={userUpdate} */ />
    </div>
  );
};

export default LoginView;
