const DropdownMenu = ({ openDropdown, coordinates }) => {
  return (
    <div
      className={`${
        openDropdown ? "block" : "hidden inset-0"
      } absolute inset-0 w-fit h-fit`}
      style={{
        transform: `translate(${coordinates.x}px, ${coordinates.y}px)`,
      }}
    >
      <p>Character image here</p>
      <p>Character here</p>
    </div>
  );
};

export default DropdownMenu;
