import { Link, Navigate, Outlet } from "react-router-dom"
import LeftBar from "./UserLayout/LeftBar";
import Logo from "../assets/Grajcownia-logo.png"
import styled from "styled-components";
import { StyledLink } from "../NavStyle";
import 'firebase/compat/auth';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from "../contexts/AuthContext";
const FinalLink = styled(StyledLink)`
    margin-left: 30px;
`;

export default function DefaultLayout() {

    const { user, logout } = UserAuth();
    const navigate = useNavigate();

    const onLogout = async () => {
        try {
            await logout();
            //console.log('You are logged out')
        } catch (e) {
            console.log(e.message);
        }
    }

    return (
        <div className="MP">
        <header>
            <div className="MP_left">
                <Link to="/mainuserpage"><img src={Logo} height={50} /></Link>
            </div>
            <div className="MP_right">
                
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