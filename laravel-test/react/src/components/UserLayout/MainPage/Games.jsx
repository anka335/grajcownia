import { StyledLink } from "../../../NavStyle";
//import { useStateContext } from "../../../contexts/ContextProvider";
import { MainLink } from "../../../NavStyle";

export default function UserGames(){
        return(
            <div className="MP_leftbar_list">
                <p><MainLink to="/userlayout/wordlerooms">wordle</MainLink><span className="MP_games_span">5 graczy</span></p>
                <p><MainLink to="/userlayout/chessrooms">szachy</MainLink><span className="MP_games_span">5 graczy</span></p>
                <p><MainLink to="/userlayout/checkersrooms">warcaby</MainLink><span className="MP_games_span">5 graczy</span></p>
                <p><MainLink to="/userlayout/battleshiprooms">statki</MainLink><span className="MP_games_span">5 graczy</span></p>
            </div>
        )
}