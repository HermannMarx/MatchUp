import "./styles.css";
import League from "../../components/League/League";
import { useParams } from "react-router-dom";

const LeaguesView = ({ leagues }) => {
  const { id } = useParams();
  console.log(leagues);
  return (
    <div className="LeaguesView">
      <League />
      <League />
      <League />
    </div>
  );
};

export default LeaguesView;
