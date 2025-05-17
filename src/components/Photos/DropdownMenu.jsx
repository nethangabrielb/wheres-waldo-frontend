const DropdownMenu = ({ coordinates }) => {
  return (
    <div
      className="absolute w-fit h-fit border bg-white"
      style={{
        top: `${coordinates.y + 30}px`,
        left: `${coordinates.x + 20}px`,
      }}
    >
      <p>Character image here</p>
      <p>Character here</p>
    </div>
  );
};

export default DropdownMenu;
