import { StyledLink } from "../../NavStyle";
import { MainLink } from "../../NavStyle";

export default function Games(){
    return(
        <div className="GL_leftbar_list">
            <p><MainLink to="/guestlayout/wordlerooms">wordle</MainLink><span className="GL_games_span">5 graczy</span></p>
            <p><MainLink to="/guestlayout/chessrooms">szachy</MainLink><span className="GL_games_span">5 graczy</span></p>
            <p><MainLink to="/guestlayout/checkersrooms">warcaby</MainLink><span className="GL_games_span">5 graczy</span></p>
            <p><MainLink to="/guestlayout/battleshiprooms">statki</MainLink><span className="GL_games_span">5 graczy</span></p>
        </div>
    )
}