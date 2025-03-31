import { Navigate, Outlet } from "react-router-dom";
import { UserAuth } from "../contexts/AuthContext";

export default function MainGuestLayout(){

    return(
        <div>
            <Outlet/>
        </div>
    )
}