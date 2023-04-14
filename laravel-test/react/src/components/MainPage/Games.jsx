import { Link } from "react-router-dom"

export default function Games(){
    return(
        <div>
            <Link to="/guestlayout/wordlerooms">wordle   5 graczy</Link>
            <Link to="/guestlayout/chessrooms">szachy   5 graczy</Link>
            <Link to="/guestlayout/checkersrooms">warcaby   5 graczy</Link>
            <Link to="/guestlayout/battleshiprooms">statki   5 graczy</Link>
        </div>
    )
}