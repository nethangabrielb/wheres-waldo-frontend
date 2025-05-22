import { useState, useEffect } from "react";
import server from "../services/API";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import { Outlet } from "react-router-dom";

const Home = () => {
  const [games, setGames] = useState([]);
  const [game, setGame] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAllGames = async () => {
      const gamesData = await server.getGames();
      setGames(gamesData);
      setLoading(false);
    };
    getAllGames();
  }, []);

  return (
    <div className="h-full flex flex-col bg-main text-tertiary">
      <Header></Header>
      <main className="flex flex-col items-center text-4xl p-10 gap-10 bg-main text-tertiary flex-auto">
        <Outlet context={{ games, game, setGame, loading }} />
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Home;
