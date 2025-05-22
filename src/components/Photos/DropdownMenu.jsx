const DropdownMenu = ({
  coordinates,
  characters,
  sendCoordinatesValidation,
}) => {
  return (
    <div
      className="absolute w-200px h-auto border gap-2 bg-secondary rouned-lg left-0 top-0"
      style={{
        top: `${coordinates.y}px`,
        left: `${coordinates.x}px`,
      }}
    >
      {characters.map((char) => {
        return (
          <img
            id={char.id}
            className="w-[50px] border-b hover:backdrop-brightness-90 cursor-pointer"
            src={char.url}
            key={char.id}
            onClick={sendCoordinatesValidation}
          ></img>
        );
      })}
    </div>
  );
};

export default DropdownMenu;
