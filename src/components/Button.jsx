import { useNavigate } from "react-router-dom";

const Button = ({ children, color, route }) => {
  const nav = useNavigate();

  const redirectHandler = () => {
    nav(route);
  };
  return (
    <button
      className={`p-1 px-2 border rounded-lg ${color} cursor-pointer`}
      onClick={redirectHandler}
    >
      {children}
    </button>
  );
};

export default Button;
