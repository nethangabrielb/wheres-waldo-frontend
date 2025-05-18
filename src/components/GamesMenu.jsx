const GamesMenu = ({ photo, title }) => {
  return (
    <div className="w-[300px] h-[400px] border">
      <img src={photo} className="w-full h-full object-cover" />
      <hr />
      <p className="text-center">{title}</p>
    </div>
  );
};

export default GamesMenu;
