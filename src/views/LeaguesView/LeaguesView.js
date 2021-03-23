import "./styles.css";
import League from "../../components/League/League";
import { useParams } from "react-router-dom";

const LeaguesView = ({ leagues, user }) => {
  const { id } = useParams();

  console.log(leagues);
  return (
    <div className="LeaguesView ContentView">
      {leagues
        ? leagues.map((league, index) => {
            return <League league={league} user={user} />;
          })
        : null}
    </div>
  );
};

export default LeaguesView;
