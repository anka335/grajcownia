import { Navigate, Routes, createBrowserRouter } from "react-router-dom";
import NotFound from "./views/NotFound.jsx"
import Login from "./views/Login.jsx";
import Signup from "./views/Signup.jsx";
import UserMainLayout from "./components/UserMainLayout.jsx";
import GuestLayout from "./components/GuestLayout.jsx";
import MainGuestPage from "./views/MainGuestPage.jsx";
import MainUserPage from "./views/MainUserPage.jsx";
import StarterPage from "./views/StarterPage.jsx";
import StartLayout from "./components/StartLayout.jsx"
import MainGuestLayout from "./components/StartAnonLayout.jsx";
import Games from "./components/GuestLayout/MainPage/Games.jsx";
import Ranking from "./components/GuestLayout/MainPage/Ranking.jsx";
import Settings from "./components/GuestLayout/MainPage/Settings.jsx";
import UserGames from "./components/UserLayout/MainPage/Games.jsx";
import UserRanking from "./components/UserLayout/MainPage/Ranking.jsx";
import UserSettings from "./components/UserLayout/MainPage/UserSettings.jsx";
import BattleshipRooms from "./components/Default/Games/BattleshipRooms.jsx";
import CheckersRooms from "./components/Default/Games/CheckersRooms.jsx";
import ChessRooms from "./components/Default/Games/ChessRooms.jsx";
import WordleRooms from "./components/Default/Games/WordleRooms.jsx";
import BattleshipRanking from "./components/Default/Ranking/BattleshipRanking.jsx";
import CheckersRanking from "./components/Default/Ranking/CheckersRanking.jsx";
import ChessRanking from "./components/Default/Ranking/ChessRanking.jsx";
import WordleRanking from "./components/Default/Ranking/WordleRanking.jsx";
import Stats from "./components/UserLayout/MainPage/Stats.jsx";
import Friends from "./components/UserLayout/MainPage/Friends.jsx";
import WhoCanWatch from "./components/UserLayout/MainPage/UserSettings/WhoCanWatch.jsx";
import ModifyAccount from "./components/UserLayout/MainPage/UserSettings/ModifyAccount.jsx";
import Wordle from "./views/Wordle.jsx"
import Checkers from "./views/Checkers.jsx";
import Chess from "./views/Chess.jsx";
import Battleship from "./views/Battleship.jsx";
import ProtectedGuestRoute from "./ProtectedRoutes/ProtectedGuestRoute.jsx";
import ProtectedUserRoute from "./ProtectedRoutes/ProtectedUserRoute.jsx";
import ProtectedAnonUserRoute from "./ProtectedRoutes/ProtectedAnonUserRoute.jsx";
import Blank from "./views/Blank.jsx";
import React from "react";
import axios from "axios";
import { useState } from "react"
import { useNavigate } from "react-router-dom";
import { UserAuth } from "./contexts/AuthContext.jsx";
import firebase from 'firebase/compat/app';

const baseURL = "http://127.0.0.1:8000/api/rooms";

/*const testRoutes = post.map((room) => ({
    path: `/testroom/${room.id}`,
    element: <Wordle />,
  }));*/

const router = createBrowserRouter([
        {
                path: "/testroom/:roomid",
                loader: async ({request, params}) => {
                    const user = firebase.auth().currentUser;
                    console.log("user: ", user);
                    if (user == null){
                        console.log("N U L L");
                        return <Navigate to="/starterpage" />
                    }
                    const gameURL = "http://127.0.0.1:8000/api/rooms/" + params.roomid;
                    const response = await axios.get(gameURL);
                    const data = response.data;
                    return data;
                },
                element: <Wordle/>
        },
        {
            path: '/',
            element: <ProtectedUserRoute><StartLayout/></ProtectedUserRoute>,
            children: [
                {
                    path: '/',
                    element: <Navigate to="/userlayout/mainuserpage" />
                },
                {
                    path: '/userlayout',
                    element: <Navigate to="/userlayout/mainuserpage" />
                },
                {
                    path: '/userlayout',
                    element: <UserMainLayout />,
                    children: [
                        {
                            path: '/userlayout/mainuserpage',
                            element: <MainUserPage />
                        },
                        {
                            path: '/userlayout/games',
                            element: <UserGames />
                        },
                        {
                            path: '/userlayout/battleshiprooms',
                            element: <BattleshipRooms />
                        },
                        {
                            path: '/userlayout/checkersrooms',
                            element: <CheckersRooms />
                        },
                        {
                            path: '/userlayout/chessrooms',
                            element: <ChessRooms />
                        },
                        {
                            path: '/userlayout/wordlerooms',
                            element: <WordleRooms />
                        },
                        {
                            path: '/userlayout/ranking',
                            element: <UserRanking />
                        },
                        {
                            path: '/userlayout/battleshipranking',
                            element: <BattleshipRanking />
                        },
                        {
                            path: '/userlayout/checkersranking',
                            element: <CheckersRanking />
                        },
                        {
                            path: '/userlayout/chessranking',
                            element: <ChessRanking />
                        },
                        {
                            path: '/userlayout/wordleranking',
                            element: <WordleRanking />
                        },
                        {
                            path: '/userlayout/usersettings',
                            element: <UserSettings />
                        },
                        {
                            path: '/userlayout/whocanwatch',
                            element: <WhoCanWatch />
                        },
                        {
                            path: '/userlayout/modifyaccount',
                            element: <ModifyAccount />
                        },
                        {
                            path: '/userlayout/stats',
                            element: <Stats />
                        },
                        {
                            path: '/userlayout/friends',
                            element: <Friends />
                        }
                    ]
                },
            ]
        },
    {
        path: '/',
        element: <ProtectedGuestRoute><StartLayout/></ProtectedGuestRoute>,
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
                path: '/login',
                element: <Login />
            },
            {
                path: '/signup',
                element: <Signup />
            },
        ]
    },
    {
        path: '/',
        element: <ProtectedAnonUserRoute><MainGuestLayout/></ProtectedAnonUserRoute>,
        children: [
            {
                path: '/',
                element: <Navigate to="/guestlayout/mainguestpage" />
            },
            {
                path: '/guestlayout',
                element: <Navigate to="/guestlayout/mainguestpage" />
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
        ]
    },
    {
        path: '*',
        element: <NotFound />
    },
])

export default router;