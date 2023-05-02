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
            console.log('You are logged out from anonymous account')
        } catch (e) {
            console.log(e.message);
        }
    }

    const registerSubmit = async () => {
        try {
            await logout();
            navigate('/signup');
            console.log('You are logged out from anonymous account')
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
                <button onClick={handleSubmit}>zaloguj sie/zarejestruj sie</button>
            </div>
        </header>
    )
}
