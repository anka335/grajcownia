import { Link } from "react-router-dom"
import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import LeftBar from "./GuestLayout/LeftBar";
import Logo from "../assets/LOGO_GRAJCOWNIA.png";

export default function MainGuestPage(){
    const {token} = useStateContext()

    if (token) {
        return <Navigate to="/" />
    }

    return(
        <div>
            <img src={Logo} height={50} />
            <Link to="/login">zaloguj sie</Link>
            <Link to="/signup">zarejestruj sie</Link>
            naglowek
            <Outlet/>
            <LeftBar/>
        </div>
    )
}
