import { ButtonLink } from "../../NavStyle";
import styled from "styled-components";

const FinalLink = styled(ButtonLink)`
    display: block;
    width: 15vw;
    padding-top: 4vh;
    padding-bottom: 4vh;
`;

export default function LeftBar(){
    return(
        <aside id="GL_leftbar">
            <ul>
            <li><FinalLink to="/guestlayout/games">gry</FinalLink></li>
            <hr/>
            <li><FinalLink to="/guestlayout/ranking">ranking</FinalLink></li>
            <hr/>
            <li><FinalLink to="/guestlayout/settings">ustawienia</FinalLink></li>
            </ul>
        </aside>
    )
}