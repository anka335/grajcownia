import { StyledLink } from "../../../NavStyle";
//import { useStateContext } from "../../../contexts/ContextProvider";
import { MainLink } from "../../../NavStyle";

export default function Ranking(){
        return(
            <div className="MP_leftbar_list">
                <p><MainLink to="/guestlayout/wordleranking" className="mainlink">wordle ranking</MainLink>
                <MainLink to="/guestlayout/battleshipranking" className="mainlink">statki ranking</MainLink>
                <MainLink to="/guestlayout/checkersranking" className="mainlink">warcaby ranking</MainLink>
                <MainLink to="/guestlayout/chessranking" className="mainlink">szachy ranking</MainLink></p>
            </div>
        )
}