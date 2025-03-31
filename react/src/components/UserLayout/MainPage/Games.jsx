import { StyledLink } from "../../../NavStyle";
//import { useStateContext } from "../../../contexts/ContextProvider";
import { MainLink } from "../../../NavStyle";

export default function UserGames(){
        return(
            <div className="MP_leftbar_list">
                <p><MainLink to="/userlayout/wordlerooms">wordle</MainLink></p>
                <p><MainLink to="/userlayout/chessrooms">szachy</MainLink></p>
                <p><MainLink to="/userlayout/checkersrooms">warcaby</MainLink></p>
                <p><MainLink to="/userlayout/battleshiprooms">statki</MainLink></p>
            </div>
        )
}