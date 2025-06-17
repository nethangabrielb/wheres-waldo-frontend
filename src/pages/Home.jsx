import { useState } from "react";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";
import { Outlet } from "react-router-dom";
import useGames from "../hooks/useGames";

const Home = () => {
  const { games, setGames, loading } = useGames();
  const [game, setGame] = useState({});

  return (
    <div className="h-full flex flex-col bg-main text-tertiary">
      <Header></Header>
      <main className="flex flex-col items-center text-4xl lg:p-10 p-4 gap-10 bg-main text-tertiary flex-auto relative">
        <Outlet context={{ games, game, setGame, setGames, loading }} />
      </main>
      <Footer></Footer>
    </div>
  );
};

export default Home;
