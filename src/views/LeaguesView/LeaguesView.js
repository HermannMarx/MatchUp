import "./styles.css";
import League from "../../components/League/League";
import { useParams } from "react-router-dom";

const LeaguesView = ({ leagues }) => {
  const { id } = useParams();
  console.log(leagues);
  return (
    <div className="LeaguesView">
      {leagues
        ? leagues.map((league, index) => {
            return <League league={league} />;
          })
        : null}
    </div>
  );
};

export default LeaguesView;
