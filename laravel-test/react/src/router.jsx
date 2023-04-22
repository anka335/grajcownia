import { Navigate, Routes, createBrowserRouter } from "react-router-dom";
import NotFound from "./views/NotFound.jsx"
import Login from "./views/Login.jsx";
import Signup from "./views/Signup.jsx";
import UserLayout from "./components/UserLayout.jsx";
import GuestLayout from "./components/GuestLayout.jsx";
import MainGuestPage from "./views/MainGuestPage.jsx";
import MainUserPage from "./views/MainUserPage.jsx";
import StarterPage from "./views/StarterPage.jsx";
import StartLayout from "./components/StartLayout.jsx"
import Games from "./components/GuestLayout/MainPage/Games.jsx";
import Ranking from "./components/GuestLayout/MainPage/Ranking.jsx";
import Settings from "./components/GuestLayout/MainPage/Settings.jsx";
import BattleshipRooms from "./components/GuestLayout/MainPage/Games/BattleshipRooms.jsx";
import CheckersRooms from "./components/GuestLayout/MainPage/Games/CheckersRooms.jsx";
import ChessRooms from "./components/GuestLayout/MainPage/Games/ChessRooms.jsx";
import WordleRooms from "./components/GuestLayout/MainPage/Games/WordleRooms.jsx";
import BattleshipRanking from "./components/GuestLayout/MainPage/Ranking/BattleshipRanking.jsx";
import CheckersRanking from "./components/GuestLayout/MainPage/Ranking/CheckersRanking.jsx";
import ChessRanking from "./components/GuestLayout/MainPage/Ranking/ChessRanking.jsx";
import WordleRanking from "./components/GuestLayout/MainPage/Ranking/WordleRanking.jsx";
import UserSettings from "./components/UserLayout/MainPage/UserSettings.jsx";
import Stats from "./components/UserLayout/MainPage/Stats.jsx";
import Friends from "./components/UserLayout/MainPage/Friends.jsx";
import WhoCanWatch from "./components/UserLayout/MainPage/UserSettings/WhoCanWatch.jsx";
import ModifyAccount from "./components/UserLayout/MainPage/UserSettings/ModifyAccount.jsx";

const router = createBrowserRouter([
    {
        path: '/',
        element: <UserLayout/>,
        children: [
            {
                path: '/',
                element: <Navigate to="/mainuserpage" />
            },
            {
                path: 'mainuserpage',
                element: <MainUserPage />
            },
            {
                path: '/games',
                element: <Games />
            },
            {
                path: '/battleshiprooms',
                element: <BattleshipRooms />
            },
            {
                path: '/checkersrooms',
                element: <CheckersRooms />
            },
            {
                path: '/chessrooms',
                element: <ChessRooms />
            },
            {
                path: '/wordlerooms',
                element: <WordleRooms />
            },
            {
                path: '/ranking',
                element: <Ranking />
            },
            {
                path: '/battleshipranking',
                element: <BattleshipRanking />
            },
            {
                path: '/checkersranking',
                element: <CheckersRanking />
            },
            {
                path: '/chessranking',
                element: <ChessRanking />
            },
            {
                path: '/wordleranking',
                element: <WordleRanking />
            },
            {
                path: '/usersettings',
                element: <UserSettings />
            },
            {
                path: '/whocanwatch',
                element: <WhoCanWatch />
            },
            {
                path: '/modifyaccount',
                element: <ModifyAccount />
            },
            {
                path: '/stats',
                element: <Stats />
            },
            {
                path: '/friends',
                element: <Friends />
            },
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