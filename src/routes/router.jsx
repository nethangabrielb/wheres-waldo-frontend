import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import GameStart from "../pages/GameStart";
import HomeSelection from "../components/Home/HomeSelection";
import LeaderBoard from "../pages/LeaderBoard";

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
        path: "/5days",
        element: <GameStart />,
      },
      {
        path: "/universe11",
        element: <GameStart />,
      },
      {
        path: "/leaderboards",
        element: <LeaderBoard />,
      },
    ],
  },
]);

export default router;
