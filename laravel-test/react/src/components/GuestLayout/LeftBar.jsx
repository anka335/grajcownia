import { Link } from "react-router-dom"

export default function LeftBar(){
    return(
        <aside>
            <p><Link to="/guestlayout/games">gry</Link></p>
            <p><Link to="/guestlayout/ranking">ranking</Link></p>
            <p><Link to="/guestlayout/settings">ustawienia</Link></p>
        </aside>
    )
}