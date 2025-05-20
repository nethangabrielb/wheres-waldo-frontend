import { useState } from "react";
import Photo from "../components/Photos/Photo";
import { useOutletContext } from "react-router-dom";

const GameStart = () => {
  let { game } = useOutletContext();
  const [gameLocalStorage, setGame] = useState(game);

  if (Object.keys(gameLocalStorage).length === 0) {
    setGame(JSON.parse(localStorage.getItem("game")));
  }

  console.log(gameLocalStorage);

  return (
    <>
      <p>Characters to find:</p>
      <div className="flex gap-10">
        {Object.keys(gameLocalStorage).length !== 0 &&
          Object.values(gameLocalStorage.toFind).map((gameUrl, i) => {
            return (
              <img
                src={gameUrl.url}
                key={i}
                id={i}
                className="w-[58px] h-auto"
              />
            );
          })}
      </div>
      <section className="flex justify-center items-center px-20 py-10 overflow-auto">
        <Photo game={gameLocalStorage}></Photo>
      </section>
    </>
  );
};

export default GameStart;
