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
        <div id="GL">
            <header>
                <div id="GL_left">
                    <img src={Logo} height={50} />
                </div>
                <div id="GL_right">
                    <Link to="/login">zaloguj sie</Link>
                    <Link to="/signup">zarejestruj sie</Link>
                </div>
            </header>
            <section>
                <LeftBar/>
                <div id="GL_outlet">
                    <Outlet/>
                </div>
            </section>
        </div>
    )
}
