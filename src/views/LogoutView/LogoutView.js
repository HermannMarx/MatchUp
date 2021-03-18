import axios from "axios";
import { useEffect } from "react";
import TopBarLogin from "../../components/TopBarLogin/TopBarLogin";
import { Link } from "react-router-dom";
import "./styles.css";

const LogoutView = () => {
  useEffect(() => {
    axios.get("/users/logout").then((res) => console.log(res));
  }, []);
  return (
    <div className="LogoutView">
      <TopBarLogin />
      <p className="logout">You are logged out!</p>
      <br />
      <p className="logout">
        Get back to the login. <br />
        <Link to="/login" className="linkLogout">
          Click here!
        </Link>
      </p>
    </div>
  );
};

export default LogoutView;
