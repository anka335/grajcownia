import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../contexts/ContextProvider";
import LeftBar from "./GuestLayout/LeftBar";
import Logo from "../assets/Grajcownia-logo.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { StyledLink } from "../NavStyle";

const FinalLink = styled(StyledLink)`
  padding: 10px;
  
`;

export default function MainGuestPage(){
    const {token} = useStateContext()

    if (token) {
        return <Navigate to="/" />
    }

    return(
        <div id="GL">
            <header>
                <div id="GL_left">
                    <Link to="/starterpage"><img src={Logo} height={50} /></Link>
                </div>
                <div id="GL_right">
                    <FinalLink to="/login" className="GL_link">zaloguj sie</FinalLink>
                    <FinalLink to="/signup" className="GL_link">zarejestruj sie</FinalLink>
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
