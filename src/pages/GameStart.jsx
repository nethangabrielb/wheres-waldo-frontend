import { useState } from "react";
import Photo from "../components/Photos/Photo";
import { useOutletContext } from "react-router-dom";

const GameStart = () => {
  let { game } = useOutletContext();
  const [gameLocalStorage, setGame] = useState(game);

  if (Object.keys(gameLocalStorage).length === 0) {
    setGame(JSON.parse(localStorage.getItem("game")));
  }

  return (
    <>
      <section className="flex justify-center items-center px-20 py-28 overflow-auto">
        <Photo game={gameLocalStorage}></Photo>
      </section>
    </>
  );
};

export default GameStart;
