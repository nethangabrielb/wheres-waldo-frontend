const Board = ({ game }) => {
  return (
    <div className="flex flex-col items-center text-lg border rounded-3xl p-4 h-[400px] w-full overflow-auto bg-secondary text-last">
      <h1 className="text-2xl font-bold">{game.name}</h1>
      <div className="flex justify-between w-full">
        <p className="font-bold">Name</p>
        <p className="font-bold">Score</p>
      </div>
      {game.User &&
        game.User.length > 0 &&
        game.User.map((player) => {
          console.log(player);
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
