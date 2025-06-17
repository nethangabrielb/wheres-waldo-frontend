const Board = ({ game }) => {
  return (
    <div className="flex flex-col items-center text-lg border  p-4 h-[400px] w-full overflow-auto bg-secondary text-last shadow-board hover:shadow-board-hover hover:-translate-2 hover:-translate-y-2 transition-all">
      <h1 className="text-2xl font-bold">{game.name}</h1>
      <div className="flex justify-between w-full">
        <p className="font-bold">Name</p>
        <p className="font-bold">Score</p>
      </div>
      {game.User &&
        game.User.length > 0 &&
        game.User.map((player) => {
          return (
            <div className="flex justify-between w-full" key={player.id}>
              <p>{player.name}</p>
              <p>{player.formattedScore}</p>
            </div>
          );
        })}
    </div>
  );
};

export default Board;
