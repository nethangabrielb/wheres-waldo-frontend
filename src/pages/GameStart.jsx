import { useState, useRef, useEffect } from "react";
import Photo from "../components/Photos/Photo";
import { useOutletContext } from "react-router-dom";
import { intervalToDuration } from "date-fns";
import useTimer from "easytimer-react-hook";

const GameStart = () => {
  let { game } = useOutletContext();
  const [gameLocalStorage, setGame] = useState(game);
  const [allCharactersFound, setAllCharactersFound] = useState(false);
  const [userName, setUserName] = useState("");
  const formRef = useRef(null);
  const inputRef = useRef(null);
  const [timerValue, setTimerValue] = useState({
    seconds: null,
    formatted: null,
  });

  const [timer, isTimerAchieved] = useTimer({});

  useEffect(() => {
    if (allCharactersFound === false) {
      timer.start();
    } else {
      // Get the timer values
      const timeValue = timer.getTimeValues();

      // Set the timer value and set game to over
      const duration = intervalToDuration({
        start: 0,
        end: timeValue.seconds * 1000,
      });

      const zeroPad = (num) => (num ? String(num).padStart(2, "0") : "00");
      setTimerValue({
        seconds: timeValue.seconds,
        formatted: `${zeroPad(duration.minutes)}:${zeroPad(duration.seconds)}`,
      });
      if (allCharactersFound) {
        formRef.current.focus();
        inputRef.current.focus();
        document.body.style.overflow = "hidden";
      }
      timer.stop();
    }
  }, [allCharactersFound]);

  if (Object.keys(gameLocalStorage).length === 0) {
    const localStorageData = JSON.parse(localStorage.getItem("game"));
    setGame(localStorageData);
  }

  return (
    <>
      <p>Characters to find:</p>
      <div className="flex gap-10">
        {Object.keys(gameLocalStorage).length !== 0 &&
          gameLocalStorage.Character.map((char) => {
            if (char.isFound === undefined) {
              char.isFound = false;
            }
            return (
              <img
                src={char.url}
                key={char.id}
                id={char.id}
                className="w-[58px] h-auto"
              />
            );
          })}
      </div>
      <div className="p-4 border rounded-lg px-8">
        {timer.getTimeValues().minutes}:{timer.getTimeValues().seconds}
      </div>
      <section className="flex justify-center items-center px-20 py-10">
        <Photo
          game={gameLocalStorage}
          setGame={setGame}
          setAllCharactersFound={setAllCharactersFound}
        ></Photo>
      </section>
      {allCharactersFound && (
        <form
          className="text-lg border p-4 flex flex-col items-center gap-2 rounded-lg absolute w-fit h-fit inset-0 m-auto bg-main"
          ref={formRef}
        >
          <p>
            Congratulations! Your score is {console.log(timerValue)}
            <span className="font-bold">{timerValue.formatted}</span>
          </p>
          <p className="text-[14px]">
            Enter name to record your score in the leaderboard
          </p>
          <input
            type="text"
            className="border p-1"
            ref={inputRef}
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
          <button className="cursor-pointer py-1 border rounded-lg px-8 bg-secondary">
            Submit
          </button>
        </form>
      )}
    </>
  );
};

export default GameStart;
