import { StyledLink } from "../../../NavStyle";
//import { useStateContext } from "../../../contexts/ContextProvider";
import { MainLink } from "../../../NavStyle";

export default function UserRanking(){
        return(
            <div className="MP_leftbar_list">
                <p><MainLink to="/userlayout/wordleranking" className="mainlink">wordle ranking</MainLink>
                <MainLink to="/userlayout/battleshipranking" className="mainlink">statki ranking</MainLink>
                <MainLink to="/userlayout/checkersranking" className="mainlink">warcaby ranking</MainLink>
                <MainLink to="/userlayout/chessranking" className="mainlink">szachy ranking</MainLink></p>
            </div>
        )
}