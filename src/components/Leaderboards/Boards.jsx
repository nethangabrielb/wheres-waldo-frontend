import { Link } from "react-router-dom";
import Board from "./Board";
import useGame from "./useGame";
import Button from "../Button";

const BoardDisplay = ({ game }) => {
  return (
    <>
      <p>Leaderboard</p>
      <Board game={game.game}></Board>
      <div className="flex gap-4 text-lg">
        <Button color="bg-last text-main text-xl" route="/">
          Home
        </Button>
        <Button
          color="bg-secondary text-last text-xl"
          route={game && `/${game.game.name.split(" ").join("").toLowerCase()}`}
        >
          Retry
        </Button>
      </div>
    </>
  );
};

const Universe11Board = () => {
  const game = useGame(3);
  console.log(game);

  return (
    <div className="w-[350px] h-[500px] flex flex-col items-center gap-10 bg-blue-300">
      {game && <BoardDisplay game={game}></BoardDisplay>}
    </div>
  );
};

const FiveDaysBoard = () => {
  const game = useGame(2);
  console.log(game);

  return (
    <div className="w-[350px] h-[500px] flex flex-col items-center gap-10">
      {game && <BoardDisplay game={game}></BoardDisplay>}
    </div>
  );
};

const GamerVerseBoard = () => {
  const game = useGame(1);
  console.log(game);

  return (
    <div className="w-[350px] h-[500px] flex flex-col items-center gap-10">
      {game && <BoardDisplay game={game}></BoardDisplay>}
    </div>
  );
};

export { Universe11Board, GamerVerseBoard, FiveDaysBoard };
