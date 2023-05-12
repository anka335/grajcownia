import { Navigate, Outlet } from "react-router-dom";
import { UserAuth } from "../contexts/AuthContext";

export default function StartLayout(){

    return(
        <div>
            <Outlet/>
        </div>
    )
}