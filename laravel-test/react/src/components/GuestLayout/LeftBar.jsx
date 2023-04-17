import { StyledLink } from "../../NavStyle";

export default function LeftBar(){
    return(
        <aside id="GL_leftbar">
            <p><StyledLink to="/guestlayout/games">gry</StyledLink></p>
            <p><StyledLink to="/guestlayout/ranking">ranking</StyledLink></p>
            <p><StyledLink to="/guestlayout/settings">ustawienia</StyledLink></p>
        </aside>
    )
}