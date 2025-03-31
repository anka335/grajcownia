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
        <aside className="MP_leftbar">
            <ul>
            <li><FinalLink to="/guestlayout/games">gry</FinalLink></li>
            <div className="MP_line"></div>
            <li><FinalLink to="/guestlayout/ranking">ranking</FinalLink></li>
            <div className="MP_line"></div>
            <li><FinalLink to="/guestlayout/settings">ustawienia</FinalLink></li>
            <div className="MP_line"></div>
            </ul>
        </aside>
    )
}