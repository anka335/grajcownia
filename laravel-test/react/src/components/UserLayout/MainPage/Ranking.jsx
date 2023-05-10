import { StyledLink } from "../../../NavStyle";
//import { useStateContext } from "../../../contexts/ContextProvider";
import { MainLink } from "../../../NavStyle";

export default function UserRanking(){
        return(
            <div className="MP_leftbar_list">
                <p><MainLink to="/wordleranking" className="mainlink">wordle ranking</MainLink>
                <MainLink to="/battleshipranking" className="mainlink">statki ranking</MainLink>
                <MainLink to="/checkersranking" className="mainlink">warcaby ranking</MainLink>
                <MainLink to="/chessranking" className="mainlink">szachy ranking</MainLink></p>
            </div>
        )
}