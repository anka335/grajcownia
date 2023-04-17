import { StyledLink } from "../../NavStyle";

export default function Ranking(){
    return(
        <div>
            <StyledLink to="/guestlayout/wordleranking">wordle ranking</StyledLink>
            <StyledLink to="/guestlayout/battleshipranking">statki ranking</StyledLink>
            <StyledLink to="/guestlayout/checkersranking">warcaby ranking</StyledLink>
            <StyledLink to="/guestlayout/chessranking">szachy ranking</StyledLink>
        </div>
    )
}