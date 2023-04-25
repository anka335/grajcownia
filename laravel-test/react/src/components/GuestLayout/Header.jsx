import { Navigate, Outlet } from "react-router-dom";
import { useStateContext } from "../../contexts/ContextProvider";
import Logo from "../../assets/Grajcownia-logo.png"
import styled from "styled-components";
import { Link } from "react-router-dom";
import { StyledLink } from "../../NavStyle";

const FinalLink = styled(StyledLink)`
  margin-left: 3px;
`;

export default function Header(){
    const {token} = useStateContext()

    if (token) {
        return <Navigate to="/" />
    }

    return(
        <header>
            <div className="MP_left">
                <Link to="/starterpage"><img src={Logo} height={50} /></Link>
            </div>
            <div className="MP_right">
                <FinalLink to="/login" className="MP_link">zaloguj się</FinalLink>
                <FinalLink to="/signup" className="MP_link">zarejestruj się</FinalLink>
            </div>
        </header>
    )
}
