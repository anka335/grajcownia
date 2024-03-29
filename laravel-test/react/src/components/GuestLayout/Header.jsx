import { Navigate, Outlet } from "react-router-dom";
//import { useStateContext } from "../../contexts/ContextProvider";
import Logo from "../../assets/Grajcownia-logo.png"
import styled from "styled-components";
import { Link } from "react-router-dom";
import { StyledLink } from "../../NavStyle";
import { useNavigate } from "react-router-dom";
import { UserAuth } from "../../contexts/AuthContext";

const FinalLink = styled(StyledLink)`
  margin-left: 3px;
`;

export default function Header(){
   
    const { user, logout } = UserAuth();
    const navigate = useNavigate();

    const handleSubmit = async () => {
        try {
            await logout();
            navigate('/login');
        } catch (e) {
            console.log(e.message);
        }
    }

    const registerSubmit = async () => {
        try {
            await logout();
            navigate('/signup');
        } catch (e) {
            console.log(e.message);
        }
    }


    return(
        <header>
            <div className="MP_left">
                <Link to="/starterpage"><img src={Logo} height={50} /></Link>
            </div>
            <div className="MP_right">
                <button onClick={handleSubmit} className="sign-button">zaloguj się / zarejestruj się</button>
            </div>
        </header>
    )
}
