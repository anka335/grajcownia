import { StyledLink } from "../NavStyle"
import Logo from "../assets/Grajcownia-logo.png"

export default function MainPage(){
    return(
        <div id="SP">
            <header id="SP_header">
                <img src={Logo} height={100}/>
            </header>
            <section>
                <StyledLink to="/signup">zarejestruj sie</StyledLink>
                <hr/>
                <StyledLink to="/login">zaloguj sie</StyledLink>
                <hr/>
                <StyledLink to="/guestlayout/mainguestpage">graj jako gosc</StyledLink>
            </section>
        </div>
    )
}