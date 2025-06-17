import { Link } from "react-router-dom";
import Header from "../layouts/Header";
import Footer from "../layouts/Footer";

const Error = () => {
  return (
    <div className="flex flex-col h-[100svh]">
      <Header></Header>
      <div className=" flex justify-center items-center flex-col my-auto text-secondary gap-4">
        <img src="/error.png" alt="Error image" className="w-[500px]" />
        <p className="font-bold text-2xl text-center">
          The page you're looking for doesn't exist.
        </p>
        <div className="p-2 rounded-lg font-bold bg-secondary text-tertiary w-[150px] text-center">
          <Link to="/">Return</Link>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
};

export default Error;
