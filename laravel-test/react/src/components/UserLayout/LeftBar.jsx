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
            <li><FinalLink to="/games">gry</FinalLink></li>
            <div className="MP_line"></div>
            <li><FinalLink to="/ranking">ranking</FinalLink></li>
            <div className="MP_line"></div>
            <li><FinalLink to="/usersettings">ustawienia</FinalLink></li>
            <div className="MP_line"></div>
            <li><FinalLink to="/friends">znajomi</FinalLink></li>
            <div className="MP_line"></div>
            <li><FinalLink to="/stats">statystyki</FinalLink></li>
            </ul>
        </aside>
    )
}