import DropdownMenu from "./DropdownMenu";
import server from "../../services/API";
import { useState, useRef } from "react";

const Photo = ({ game, setGameLocalStorage, setAllCharactersFound }) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [clickCoordinates, setClickCoordinates] = useState({
    x: null,
    y: null,
  });
  const [isCoordinateCorrect, setIsCoordinateCorrect] = useState(null);
  const photoRef = useRef(null);
  const audioRef = useRef(null);

  const handlePhotoClick = (e) => {
    if (openDropdown) {
      setOpenDropdown(false);
    } else {
      setOpenDropdown(true);
    }

    setClickCoordinates({
      x: e.nativeEvent.offsetX,
      y: e.nativeEvent.offsetY,
    });
  };

  const sendCoordinatesValidation = async (e) => {
    // Get the instrinsic and the rendered w and h of image
    const photo = photoRef.current;
    const renderedVal = { w: photo.clientWidth, h: photo.clientHeight };
    const naturalVal = { w: photo.naturalWidth, h: photo.naturalHeight };

    // Divide click coordinates with rendered coordinates
    // and multiply with natural values to normalize coordinates
    const normalizedX = (clickCoordinates.x / renderedVal.w) * naturalVal.w;
    const normalizedY = (clickCoordinates.y / renderedVal.h) * naturalVal.h;

    const normalizedCoordinates = {
      x: normalizedX,
      y: normalizedY,
    };

    // Validate result
    const validationResult = await server.validateCoordinates(
      normalizedCoordinates,
      e.target.id,
      game.id
    );

    if (validationResult) {
      const updatedCharactersStatus = game.Character.map((char) => {
        if (char.id == e.target.id) {
          return { ...char, isFound: true };
        } else {
          return char;
        }
      });
      setGameLocalStorage({
        ...game,
        Character: updatedCharactersStatus,
      });
      setOpenDropdown(false);
      setIsCoordinateCorrect(true);
      setTimeout(() => {
        setIsCoordinateCorrect(null);
      }, 1000);
      audioRef.current.play();

      // Check if all characters are found
      // By filtering the updated characters array and filtering by isFound attribute
      // So if the length is 3, it means all 3 are found, and we stop the timer.
      const isAllFound = updatedCharactersStatus.filter((char) => char.isFound);
      if (isAllFound.length === 3) {
        setAllCharactersFound(true);
      }
    } else {
      setIsCoordinateCorrect(false);
      setTimeout(() => {
        setIsCoordinateCorrect(null);
      }, 1000);
      audioRef.current.play();
    }
  };

  return (
    <div className="relative h-full">
      <img
        src={game.url}
        alt="Where's Waldo photo"
        onClick={handlePhotoClick}
        className="w-full h-full max-w-[1400px] rounded-lg"
        ref={photoRef}
      />
      {openDropdown && (
        <DropdownMenu
          coordinates={clickCoordinates}
          characters={game.Character}
          sendCoordinatesValidation={sendCoordinatesValidation}
          setIsCoordinateCorrect={setIsCoordinateCorrect}
        ></DropdownMenu>
      )}
      {isCoordinateCorrect ? (
        <audio src="correct.mp3" ref={audioRef} autoPlay></audio>
      ) : (
        isCoordinateCorrect === false && (
          <audio src="wrong.mp3" ref={audioRef} autoPlay></audio>
        )
      )}
    </div>
  );
};

export default Photo;
