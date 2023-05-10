import { StyledLink } from "../../../NavStyle";
//import { useStateContext } from "../../../contexts/ContextProvider";
import { MainLink } from "../../../NavStyle";

export default function Games(){
        return(
            <div className="MP_leftbar_list">
                <p><MainLink to="/guestlayout/wordlerooms">wordle</MainLink><span className="MP_games_span">5 graczy</span></p>
                <p><MainLink to="/guestlayout/chessrooms">szachy</MainLink><span className="MP_games_span">5 graczy</span></p>
                <p><MainLink to="/guestlayout/checkersrooms">warcaby</MainLink><span className="MP_games_span">5 graczy</span></p>
                <p><MainLink to="/guestlayout/battleshiprooms">statki</MainLink><span className="MP_games_span">5 graczy</span></p>
            </div>
        )
}