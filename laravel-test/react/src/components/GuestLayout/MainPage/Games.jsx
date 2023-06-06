import { StyledLink } from "../../../NavStyle";
//import { useStateContext } from "../../../contexts/ContextProvider";
import { MainLink } from "../../../NavStyle";

export default function Games(){
        return(
            <div className="MP_leftbar_list">
                <p><MainLink to="/guestlayout/wordlerooms">wordle</MainLink></p>
                <p><MainLink to="/guestlayout/chessrooms">szachy</MainLink></p>
                <p><MainLink to="/guestlayout/checkersrooms">warcaby</MainLink></p>
                <p><MainLink to="/guestlayout/battleshiprooms">statki</MainLink></p>
            </div>
        )
}