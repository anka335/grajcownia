import { StyledLink } from "../NavStyle"
import Logo from "../assets/Grajcownia-logo.png"
import styled from "styled-components";

const FinalLink = styled(StyledLink)`
  margin-left: 3px;
`;

export default function MainPage(){
    return(
        <div id="SP">
            <header id="SP_header">
                <img src={Logo} height={100}/>
            </header>
            <section>
                <FinalLink to="/signup">zarejestruj się</FinalLink>
                <hr/>
                <FinalLink to="/login">zaloguj się</FinalLink>
                <hr/>
                <FinalLink to="/guestlayout/mainguestpage">graj jako gość</FinalLink>
            </section>
        </div>
    )
}