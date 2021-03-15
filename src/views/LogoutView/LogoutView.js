import axios from "axios";
import { useEffect } from "react";
import TopBarLogin from "../../components/TopBarLogin/TopBarLogin";
import "./styles.css";

const LogoutView = () => {
  useEffect(() => {
    axios
      .get("http://localhost:3000/users/logout")
      .then((res) => console.log(res));
  }, []);
  return (
    <div className="LogoutView">
      <TopBarLogin />
      You are logged out!
    </div>
  );
};

export default LogoutView;
