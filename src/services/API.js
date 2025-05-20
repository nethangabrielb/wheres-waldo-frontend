const API = () => {
  const url = "http://localhost:5000";

  const getGames = async () => {
    const res = await fetch(`${url}/games`);
    if (!res.ok) {
      throw new Error("Error fetching games");
    }
    const data = await res.json();
    return data.games;
  };

  return { getGames };
};

const server = API();

export default server;
