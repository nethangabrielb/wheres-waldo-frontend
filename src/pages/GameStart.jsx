import Photo from "../components/Photos/Photo";

const GameStart = ({ photo }) => {
  return (
    <section className="flex justify-center items-center px-20 py-28 overflow-auto">
      <Photo photo={photo}></Photo>
    </section>
  );
};

export default GameStart;
