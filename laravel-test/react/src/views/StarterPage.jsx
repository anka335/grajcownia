import { StyledLink } from "../NavStyle"

export default function MainPage(){
    return(
        <div id="SP">
            <h1>GRAJCOWNIA</h1>
            <StyledLink to="/signup">zarejestruj sie</StyledLink>
            <StyledLink to="/login">zaloguj sie</StyledLink>
            <StyledLink to="/guestlayout/mainguestpage">graj jako gosc</StyledLink>
        </div>
    )
}