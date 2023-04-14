import { Navigate, Routes, createBrowserRouter } from "react-router-dom";
import NotFound from "./views/NotFound.jsx"
import Login from "./views/Login.jsx";
import Signup from "./views/Signup.jsx";
import Users from "./views/Users.jsx";
import DefaultLayout from "./components/DefaultLayout.jsx";
import GuestLayout from "./components/GuestLayout.jsx";
import MainGuestPage from "./views/MainGuestPage.jsx";
import StarterPage from "./views/StarterPage.jsx";
import Dashboard from "./views/Dashboard.jsx";
import StartLayout from "./components/StartLayout.jsx"
import Games from "./components/MainPage/Games.jsx";
import Ranking from "./components/MainPage/Ranking.jsx";
import Settings from "./components/MainPage/Settings.jsx";
import BattleshipRooms from "./components/MainPage/Games/BattleshipRooms.jsx";
import CheckersRooms from "./components/MainPage/Games/CheckersRooms.jsx";
import ChessRooms from "./components/MainPage/Games/ChessRooms.jsx";
import WordleRooms from "./components/MainPage/Games/WordleRooms.jsx";
import BattleshipRanking from "./components/MainPage/Ranking/BattleshipRanking.jsx";
import CheckersRanking from "./components/MainPage/Ranking/CheckersRanking.jsx";
import ChessRanking from "./components/MainPage/Ranking/ChessRanking.jsx";
import WordleRanking from "./components/MainPage/Ranking/WordleRanking.jsx";


const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout/>,
        children: [
            {
                path: '/',
                element: <Navigate to="/users" />
            },
            {
                path: '/users',
                element: <Users />
            },
            {
                path: '/dashboard',
                element: <Dashboard />
            }
        ]
    },
    {
        path: '/',
        element: <StartLayout/>,
        children: [
            {
                path: '/',
                element: <Navigate to="/starterpage" />
            },
            {
                path: '/starterpage',
                element: <StarterPage />
            },
            {
                path: '/guestlayout',
                element: <GuestLayout />,
                children: [
                    {
                        path: '/guestlayout/mainguestpage',
                        element: <MainGuestPage />
                    },
                    {
                        path: '/guestlayout/games',
                        element: <Games />
                    },
                    {
                        path: '/guestlayout/battleshiprooms',
                        element: <BattleshipRooms />
                    },
                    {
                        path: '/guestlayout/checkersrooms',
                        element: <CheckersRooms />
                    },
                    {
                        path: '/guestlayout/chessrooms',
                        element: <ChessRooms />
                    },
                    {
                        path: '/guestlayout/wordlerooms',
                        element: <WordleRooms />
                    },
                    {
                        path: '/guestlayout/ranking',
                        element: <Ranking />
                    },
                    {
                        path: '/guestlayout/battleshipranking',
                        element: <BattleshipRanking />
                    },
                    {
                        path: '/guestlayout/checkersranking',
                        element: <CheckersRanking />
                    },
                    {
                        path: '/guestlayout/chessranking',
                        element: <ChessRanking />
                    },
                    {
                        path: '/guestlayout/wordleranking',
                        element: <WordleRanking />
                    },
                    {
                        path: '/guestlayout/settings',
                        element: <Settings />
                    },
                ]
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Signup />
            }
        ]
    },
    
    {
        path: '*',
        element: <NotFound />
    },
])

export default router;