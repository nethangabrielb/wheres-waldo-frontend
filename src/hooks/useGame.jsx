import { useState, useEffect } from "react";
import server from "../services/API";

const useGame = (gameId) => {
  const [game, setGame] = useState(null);
  useEffect(() => {
    const fetchGame = async () => {
      const res = await server.getGame(gameId);
      setGame(res);
    };
    fetchGame();
    return () => setGame(null);
  }, [gameId]);

  return { game, setGame };
};

export default useGame;
