import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import GameStart from "../pages/GameStart";
import HomeSelection from "../components/Home/HomeSelection";
import LeaderBoard from "../pages/LeaderBoard";
import Board from "../components/Leaderboards/Board";
import {
  Universe11Board,
  GamerVerseBoard,
  FiveDaysBoard,
} from "../components/Leaderboards/Boards";

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
        path: "/leaderboard",
        element: <LeaderBoard />,
      },
      {
        path: "/leaderboard/1",
        element: <GamerVerseBoard />,
      },
      {
        path: "/leaderboard/2",
        element: <FiveDaysBoard />,
      },
      {
        path: "/leaderboard/3",
        element: <Universe11Board />,
      },
    ],
  },
]);

export default router;
