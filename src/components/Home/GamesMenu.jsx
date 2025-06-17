import { useNavigate } from "react-router-dom";

const GamesMenu = ({ game, loading, setGame }) => {
  const navigate = useNavigate();

  const handleRedirect = () => {
    setGame(game);
    localStorage.setItem("game", JSON.stringify(game));
    navigate(`/${game.name.split(" ").join("").toLowerCase()}`);
  };

  return (
    <section
      className="w-[300px] h-fit border rounded-4xl hover:scale-105 hover:shadow-md transition-all cursor-pointer"
      onClick={handleRedirect}
    >
      <img
        src={game.url}
        className="w-full h-[400px] object-cover rounded-t-4xl"
      />
      <p className="text-center text-xl">{game.name}</p>
    </section>
  );
};

export default GamesMenu;
