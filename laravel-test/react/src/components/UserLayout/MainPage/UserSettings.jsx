import Settings from "../../GuestLayout/MainPage/Settings";
import { StyledLink } from "../../../NavStyle";
import styled from "styled-components";

const FinalLink = styled(StyledLink)`
    width: 20vw;
`;

export default function UserSettings(){
    return(
        <div>
            <p>Konto: feofaeioaefip</p>
            <p>email: elja@gmail.com</p>
            <p><FinalLink to="/modifyaccount">modyfikuj konto</FinalLink></p>
            <p><FinalLink to="/whocanwatch">kto może oglądać mój profil</FinalLink></p>
            <div id="Outlet_ChatBtn">
                <Settings />
            </div>
        </div>
    )
}