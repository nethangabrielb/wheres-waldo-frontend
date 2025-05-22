const DropdownMenu = ({
  coordinates,
  characters,
  sendCoordinatesValidation,
}) => {
  return (
    <div
      className="absolute w-fit h-auto border gap-2 bg-secondary rouned-lg top-0 left-0 isolate z-100"
      style={{
        transform: `translate(${coordinates.x + 10}px, ${
          coordinates.y + 10
        }px)`,
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
