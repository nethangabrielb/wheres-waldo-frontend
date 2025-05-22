import DropdownMenu from "./DropdownMenu";
import server from "../../services/API";
import { useState, useRef } from "react";

const Photo = ({ game }) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [clickCoordinates, setClickCoordinates] = useState({
    x: null,
    y: null,
  });
  const [characters, setCharactersValidate] = useState(game.Character);
  const photoRef = useRef(null);

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
    // and Subtract left and top values
    // to remove viewport in the calculation
    // and multiply with natural values
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
      const updatedCharactersStatus = characters.map((char) => {
        if (char.id == e.target.id) {
          return { ...char, isFound: true };
        } else {
          return char;
        }
      });
    }
  };

  return (
    <div className="relative">
      <img
        src={game.url}
        alt="Where's Waldo photo"
        onClick={handlePhotoClick}
        className="w-full max-w-[1200px] h-full rounded-lg"
        ref={photoRef}
      />
      {openDropdown && (
        <DropdownMenu
          coordinates={clickCoordinates}
          characters={game.Character}
          sendCoordinatesValidation={sendCoordinatesValidation}
        ></DropdownMenu>
      )}
    </div>
  );
};

export default Photo;
