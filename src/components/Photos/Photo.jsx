import DropdownMenu from "./DropdownMenu";
import { useState, useEffect } from "react";

const Photo = ({ photo }) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [clickCoordinates, setClickCoordinates] = useState({
    x: null,
    y: null,
    scrollY: null,
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

  return (
    <>
      <img
        src={photo}
        alt="Where's Waldo photo"
        onClick={handlePhotoClick}
        className="w-full max-w-[1200px] h-full"
      />
      {openDropdown && (
        <DropdownMenu coordinates={clickCoordinates}></DropdownMenu>
      )}
    </>
  );
};

export default Photo;
