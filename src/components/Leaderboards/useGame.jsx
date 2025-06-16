import { useState, useEffect } from "react";
import server from "../../services/API";

const useGame = (gameId) => {
  const [game, setGame] = useState(null);
  useEffect(() => {
    const fetchGame = async () => {
      const res = await server.getGame(gameId);
      console.log(res);
      setGame(res);
    };
    fetchGame();
    return () => setGame(null);
  }, [gameId]);

  return game;
};

export default useGame;
