import { ButtonLink } from "../../NavStyle";
import styled from "styled-components";

const FinalLink = styled(ButtonLink)`
    display: block;
    width: 15vw;
    padding-top: 4.2vh;
    padding-bottom: 4.2vh;
`;

export default function LeftBar(){
    return(
        <aside className="MP_leftbar">
            <ul>
            <li><FinalLink to="/userlayout/games">gry</FinalLink></li>
            <div className="MP_line"></div>
            <li><FinalLink to="/userlayout/ranking">ranking</FinalLink></li>
            <div className="MP_line"></div>
            <li><FinalLink to="/userlayout/usersettings">ustawienia</FinalLink></li>
            <div className="MP_line"></div>
            <li><FinalLink to="/userlayout/friends">znajomi</FinalLink></li>
            <div className="MP_line"></div>
            <li><FinalLink to="/userlayout/stats">statystyki</FinalLink></li>
            </ul>
        </aside>
    )
}