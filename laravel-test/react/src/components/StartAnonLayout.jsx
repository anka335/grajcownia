import { Navigate, Outlet } from "react-router-dom";
import { UserAuth } from "../contexts/AuthContext";

export default function MainGuestLayout(){
    const { user } = UserAuth();

    console.log("user: ", user);
    if (user && !user?.isAnonymous) {
        console.log("mainuserpage (startanonlayout)");
        return <Navigate to="/mainuserpage" />
    } else if (!user) {
        console.log("starterpage (startanonlayout)")
        return <Navigate to="/starterpage" />
    }

    return(
        <div>
            <Outlet/>
        </div>
    )
}