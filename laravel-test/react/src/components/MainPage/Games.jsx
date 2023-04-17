import { StyledLink } from "../../NavStyle";

export default function Games(){
    return(
        <div>
            <StyledLink to="/guestlayout/wordlerooms">wordle   5 graczy</StyledLink>
            <StyledLink to="/guestlayout/chessrooms">szachy   5 graczy</StyledLink>
            <StyledLink to="/guestlayout/checkersrooms">warcaby   5 graczy</StyledLink>
            <StyledLink to="/guestlayout/battleshiprooms">statki   5 graczy</StyledLink>
        </div>
    )
}