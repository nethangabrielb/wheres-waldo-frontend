import DropdownMenu from "./DropdownMenu";
import { useState } from "react";

const Photo = ({ photo }) => {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [clickCoordinates, setClickCoordinates] = useState({
    x: null,
    y: null,
  });

  const handlePhotoClick = (e) => {
    console.log(e);
    if (openDropdown) {
      setOpenDropdown(false);
    } else {
      setOpenDropdown(true);
    }
    setClickCoordinates({ x: e.clientX, y: e.clientY });
  };

  return (
    <div className="w-fit">
      <img src={photo} alt="Where's Waldo photo" onClick={handlePhotoClick} />
      <DropdownMenu
        openDropdown={openDropdown}
        coordinates={clickCoordinates}
      ></DropdownMenu>
    </div>
  );
};

export default Photo;
