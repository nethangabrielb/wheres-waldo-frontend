import { useOutletContext } from "react-router-dom";
import GamesMenu from "./GamesMenu";

const HomeSelection = () => {
  const { games, loading, setGame } = useOutletContext();

  return (
    <>
      <h1>Select a setting</h1>
      <hr />
      <section className="flex flex-wrap justify-center gap-10">
        {games &&
          games.map((game) => {
            return (
              <GamesMenu
                game={game}
                key={game.id}
                loading={loading}
                setGame={setGame}
              ></GamesMenu>
            );
          })}
      </section>
    </>
  );
};

export default HomeSelection;
