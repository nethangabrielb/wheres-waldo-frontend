import { useState, useEffect } from "react";
import server from "../services/API";

const useGames = () => {
  const [games, setGames] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getAllGames = async () => {
      const gamesData = await server.getGames();
      setGames(gamesData);
      setLoading(false);
    };
    getAllGames();
  }, []);

  return { games, setGames, loading, setLoading };
};

export default useGames;
