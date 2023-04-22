import { Link, Navigate, Outlet } from "react-router-dom"
import { useStateContext } from "../contexts/ContextProvider"
import LeftBar from "./UserLayout/LeftBar";
import Logo from "../assets/Grajcownia-logo.png"
import styled from "styled-components";
import { StyledLink } from "../NavStyle";

const FinalLink = styled(StyledLink)`
    margin-left: 30px;
`;

export default function DefaultLayout(){
    const {user, token} = useStateContext()

    if (!token){
        return <Navigate to="/starterpage"/>
    }

    const onLogout = (ev) => {
        ev.preventDefault()
    }

    return (
        <div className="MP">
        <header>
            <div className="MP_left">
                <Link to="/mainuserpage"><img src={Logo} height={50} /></Link>
            </div>
            <div className="MP_right">
                {user.name}
                <FinalLink to="#" onClick={onLogout}>Wyloguj się</FinalLink>
            </div>
        </header>
        <section className="MP_section">
            <LeftBar/>
            <div className="MP_outlet">
                <Outlet/>
            </div>
        </section>
    </div>
    )
}