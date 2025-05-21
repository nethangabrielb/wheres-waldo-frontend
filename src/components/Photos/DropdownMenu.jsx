const DropdownMenu = ({ coordinates, characters }) => {
  return (
    <div
      className="absolute w-fit h-fit border gap-2 bg-secondary rouned-lg"
      style={{
        top: `${coordinates.y + 30}px`,
        left: `${coordinates.x + 20}px`,
      }}
    >
      {characters.map((char) => {
        return (
          <img
            id={char.id}
            className="w-[50px] border-b hover:backdrop-brightness-90 cursor-pointer"
            src={char.url}
            key={char.id}
          ></img>
        );
      })}
    </div>
  );
};

export default DropdownMenu;
