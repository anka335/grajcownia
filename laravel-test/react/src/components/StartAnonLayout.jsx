import { Navigate, Outlet } from "react-router-dom";
//import { useStateContext } from "../contexts/ContextProvider";

export default function MainGuestLayout(){
    /* {token} = useStateContext()

    if (token) {
        return <Navigate to="/" />
    }*/
    return(
        <div>
            <Outlet/>
        </div>
    )
}