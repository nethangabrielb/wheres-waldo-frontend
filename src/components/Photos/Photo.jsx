import DropdownMenu from "./DropdownMenu";
import { useState } from "react";

const Photo = ({ photo }) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [clickCoordinates, setClickCoordinates] = useState({
    x: null,
    y: null,
  });

  const handlePhotoClick = (e) => {
    if (openDropdown) {
      setOpenDropdown(false);
    } else {
      setOpenDropdown(true);
    }
    setClickCoordinates({ x: e.clientX, y: e.clientY });
  };

  return (
    <div>
      <img src={photo} alt="Where's Waldo photo" onClick={handlePhotoClick} />;
      <DropdownMenu openDropdown={openDropdown}></DropdownMenu>
    </div>
  );
};

export default Photo;
