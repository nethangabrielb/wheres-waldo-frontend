import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="flex justify-between items-center px-8 py-4 sm:text-2xl bg-secondary text-last h-fit">
      <Link to="/">
        <span className="font-bold italic sm:text-4xl text-xl hover:underlin flex items-center gap-4">
          Eye Spy
          <img src="search.svg" alt="Search Icon" className="w-[50px]" />
        </span>
      </Link>
      <Link to="/leaderboard">Leaderboard</Link>
    </header>
  );
};

export default Header;
