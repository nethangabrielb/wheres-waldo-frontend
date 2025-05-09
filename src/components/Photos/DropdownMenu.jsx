const DropdownMenu = ({ openDropdown }) => {
  return (
    <div className={`${openDropdown ? "block" : "hidden"}`}>
      <p>Character image here</p>
      <p>Character here</p>
    </div>
  );
};

export default DropdownMenu;
