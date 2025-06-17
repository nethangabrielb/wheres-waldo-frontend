import { useState, useRef, useEffect } from "react";
import Photo from "../components/Photos/Photo";
import { useOutletContext } from "react-router-dom";
import { intervalToDuration } from "date-fns";
import useTimer from "easytimer-react-hook";
import server from "../services/API";
import { useNavigate } from "react-router-dom";

const GameStart = () => {
  let { game, setGame } = useOutletContext();
  const [gameLocalStorage, setGameLocalStorage] = useState(game);
  const [allCharactersFound, setAllCharactersFound] = useState(false);
  const [username, setUserName] = useState("");
  const [timerValue, setTimerValue] = useState({
    seconds: null,
    formatted: null,
  });
  const [error, setError] = useState("");
  const formRef = useRef(null);
  const inputRef = useRef(null);
  const navigate = useNavigate();
  const [timer, isTimerAchieved] = useTimer({});

  useEffect(() => {
    if (allCharactersFound === false) {
      timer.start();
      Object.keys(gameLocalStorage).length !== 0 &&
        gameLocalStorage.Character.map((char) => {
          if (char.isFound === undefined || char.isFound === true) {
            char.isFound = false;
          }
          return (
            <img
              src={char.url}
              key={char.id}
              id={char.id}
              className="sm:w-[58px] w-[34px] h-auto"
            />
          );
        });
    } else {
      // Get the timer values
      const timeValue = timer.getTimeValues();

      // Set the timer value and set game to over
      const duration = intervalToDuration({
        start: 0,
        end: (timeValue.seconds + timeValue.minutes * 60) * 1000,
      });

      const zeroPad = (num) => (num ? String(num).padStart(2, "0") : "00");
      setTimerValue({
        seconds:
          timeValue.minutes > 0
            ? timeValue.seconds + timeValue.minutes * 60
            : timeValue.seconds,
        formatted: `${zeroPad(duration.minutes)}:${zeroPad(duration.seconds)}`,
      });
      if (allCharactersFound) {
        formRef.current.focus();
        inputRef.current.focus();
        document.body.style.overflow = "hidden";
      }
      timer.stop();
      localStorage.removeItem("game");
      setGame({});
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [allCharactersFound]);

  if (Object.keys(gameLocalStorage).length === 0) {
    const localStorageData = JSON.parse(localStorage.getItem("game"));
    setGameLocalStorage(localStorageData);
  }

  // Submit user name and score time and
  // Redirect to leaderboard of game setting
  const submitUserHandler = async () => {
    const submitSuccessful = await server.postScore(
      gameLocalStorage.id,
      username,
      timerValue.seconds,
      timerValue.formatted
    );
    if (typeof submitSuccessful === "object") {
      setError(submitSuccessful.errors[0].msg);
    } else {
      navigate(`/leaderboard/${gameLocalStorage.id}`);
    }
  };

  return (
    <>
      <p className="sm:text-4xl text-xl">Characters to find:</p>
      <div className="flex gap-10">
        {Object.keys(gameLocalStorage).length !== 0 &&
          gameLocalStorage.Character.map((char) => {
            return (
              <img
                src={char.url}
                key={char.id}
                id={char.id}
                className="sm:w-[58px] w-[34px] h-auto"
              />
            );
          })}
      </div>
      <div className="sm:p-4 border rounded-lg sm:px-8 px-2 p-2 sm:text-4xl text-xl">
        {timer.getTimeValues().minutes}:{timer.getTimeValues().seconds}
      </div>
      <section className="flex justify-center items-center lg:px-10 sm:py-10 h-full">
        <Photo
          game={gameLocalStorage}
          setGameLocalStorage={setGameLocalStorage}
          setAllCharactersFound={setAllCharactersFound}
        ></Photo>
      </section>
      {allCharactersFound && (
        <form
          className="text-lg border p-4 flex flex-col items-center gap-2 rounded-lg absolute w-fit h-fit inset-0 m-auto bg-main"
          ref={formRef}
          action={submitUserHandler}
        >
          <p>
            Congratulations! Your score is
            <span className="font-bold"> {timerValue.formatted}</span>
          </p>
          <p className="text-[14px]">
            Enter name to record your score in the leaderboard
          </p>
          <input
            type="text"
            className="border p-1"
            ref={inputRef}
            value={username}
            onChange={(e) => setUserName(e.target.value)}
          />
          <button
            className="cursor-pointer py-1 border rounded-lg px-8 bg-secondary"
            type="submit"
          >
            Submit
          </button>
          {error && <p className="text-red-400">{error}</p>}
        </form>
      )}
    </>
  );
};

export default GameStart;
