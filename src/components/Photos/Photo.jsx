import DropdownMenu from "./DropdownMenu";
import { useState, useEffect } from "react";

const Photo = ({ game }) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [clickCoordinates, setClickCoordinates] = useState({
    x: null,
    y: null,
  });
  const [scrollCoordinates, setScrollCoordinates] = useState({
    x: null,
    y: null,
  });

  useEffect(() => {
    const attachSetterCoordinates = () => {
      setScrollCoordinates({ x: window.scrollX, y: window.scrollY });
    };
    window.addEventListener("scroll", attachSetterCoordinates);

    return () => {
      window.removeEventListener("scroll", attachSetterCoordinates);
    };
  }, []);

  const handlePhotoClick = (e) => {
    if (openDropdown) {
      setOpenDropdown(false);
    } else {
      setOpenDropdown(true);
    }

    setClickCoordinates({
      x: e.clientX,
      y: e.clientY + scrollCoordinates.y,
    });
  };

  console.log(clickCoordinates);

  return (
    <>
      <img
        src={game.url}
        alt="Where's Waldo photo"
        onClick={handlePhotoClick}
        className="w-full max-w-[1200px] h-full rounded-lg"
      />
      {openDropdown && (
        <DropdownMenu
          coordinates={clickCoordinates}
          characters={game.Character}
        ></DropdownMenu>
      )}
    </>
  );
};

export default Photo;
