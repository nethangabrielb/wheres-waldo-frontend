import Board from "../components/Leaderboards/Board";
import { useOutletContext } from "react-router-dom";

const LeaderBoard = () => {
  let { games } = useOutletContext();

  return (
    <>
      <h1>Leaderboard</h1>
      <div className="grid grid-cols-3 justify-center w-full gap-10">
        {games.map((game) => {
          console.log(game);
          return <Board game={game} key={game.id}></Board>;
        })}
      </div>
    </>
  );
};

export default LeaderBoard;
