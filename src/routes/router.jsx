import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import GameStart from "../pages/GameStart";
import HomeSelection from "../components/Home/HomeSelection";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,

    children: [
      {
        index: true,
        element: <HomeSelection />,
      },
      {
        path: "/gamerverse",
        element: <GameStart />,
      },
      {
        path: "/groovearmada",
        element: <GameStart />,
      },
      {
        path: "/technocity",
        element: <GameStart />,
      },
    ],
  },
]);

export default router;
