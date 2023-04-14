import { Link } from "react-router-dom"

export default function Ranking(){
    return(
        <div>
            <Link to="/guestlayout/wordleranking">wordle ranking</Link>
            <Link to="/guestlayout/battleshipranking">statki ranking</Link>
            <Link to="/guestlayout/checkersranking">warcaby ranking</Link>
            <Link to="/guestlayout/chessranking">szachy ranking</Link>
        </div>
    )
}