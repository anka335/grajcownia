import { StyledLink } from "../NavStyle"
import Logo from "../assets/Grajcownia-logo.png"

export default function MainPage(){
    return(
        <div id="SP">
            <img src={Logo} height={100} />
            <StyledLink to="/signup">zarejestruj sie</StyledLink>
            <StyledLink to="/login">zaloguj sie</StyledLink>
            <StyledLink to="/guestlayout/mainguestpage">graj jako gosc</StyledLink>
        </div>
    )
}