import { Navigate, Outlet } from "react-router-dom";
//import { useStateContext } from "../contexts/ContextProvider";
import LeftBar from "./GuestLayout/LeftBar";
import Logo from "../assets/Grajcownia-logo.png";
import styled from "styled-components";
import { Link } from "react-router-dom";
import { StyledLink } from "../NavStyle";
import Header from "./GuestLayout/Header";

const FinalLink = styled(StyledLink)`
  margin-left: 3px;
`;

export default function MainGuestPage(){
    /*const {token} = useStateContext()

    if (token) {
        return <Navigate to="/" />
    }*/

    return(
        <div className="MP">
            <Header />
            <section className="MP_section">
                <LeftBar/>
                <div className="MP_outlet">
                    <Outlet/>
                </div>
            </section>
        </div>
    )
}
