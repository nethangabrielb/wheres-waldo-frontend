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

  const getGame = async (gameId) => {
    const res = await fetch(`${url}/photos/${gameId}`);
    if (!res.ok) {
      throw new Error("Error fetching game");
    }
    const game = await res.json();
    console.log(game);
    return game;
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
    }
  };

  const postScore = async (photoId, name, score, formatted) => {
    const res = await fetch(`${url}/photos/${photoId}/users`, {
      body: JSON.stringify({ photoId, name, score, formatted }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    if (res.status === 200) {
      return true;
    } else if (res.status === 500) {
      const errMessage = await res.json();
      return errMessage;
    } else {
      return false;
    }
  };

  return { getGames, getGame, validateCoordinates, postScore };
};

const server = API();

export default server;
