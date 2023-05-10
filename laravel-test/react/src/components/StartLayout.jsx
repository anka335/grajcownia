import { Navigate, Outlet } from "react-router-dom";
import { UserAuth } from "../contexts/AuthContext";

export default function StartLayout(){
    const { user } = UserAuth();

    console.log("user: ", user);
    if (user && !user?.isAnonymous) {
        console.log("mainuserpage (start)");
        return <Navigate to="/mainuserpage" />
    } else if (user) {
        console.log("anonim (start)")
        return <Navigate to="/guestlayout/mainguestpage" />
    }

    return(
        <div>
            <Outlet/>
        </div>
    )
}