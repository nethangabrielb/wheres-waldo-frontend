const API = () => {
  const url = "http://localhost:5000";

  const getGames = async () => {
    const res = await fetch(`${url}/photos`);
    if (!res.ok) {
      throw new Error("Error fetching games");
    }
    const data = await res.json();
    return data.games;
  };

  const validateCoordinates = async (coordinates, characterId, photoId) => {
    const res = await fetch(`${url}/photos/${photoId}`, {
      body: JSON.stringify({ characterId, coordinates }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    if (res.status === 200) {
      return true;
    } else {
      return false;
    }
  };

  return { getGames, validateCoordinates };
};

const server = API();

export default server;
