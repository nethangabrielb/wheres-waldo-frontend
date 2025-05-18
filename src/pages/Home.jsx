import { useState, useEffect } from "react";
import GamesMenu from "../components/GamesMenu";
import server from "../services/API";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";

const Home = () => {
  const [games, setGames] = useState([]);

  useEffect(() => {
    const getAllGames = async () => {
      const gamesData = await server.getGames();
      console.log(gamesData);
      setGames(gamesData);
    };
    getAllGames();
  }, []);

  return (
    <div className="h-full flex flex-col">
      <Header></Header>
      <main className="h-fit flex flex-col items-center text-4xl p-10 gap-10">
        <h1>Select a setting</h1>
        <hr />
        <section className="grid grid-cols-3 gap-10">
          {games &&
            games.map((game) => {
              return (
                <GamesMenu
                  title={game.name}
                  photo={game.url}
                  key={game.id}
                ></GamesMenu>
              );
            })}
        </section>
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Home;
