import { Link } from "react-router-dom"

export default function MainPage(){
    return(
        <div id="SP">
            <h1>GRAJCOWNIA</h1>
            <Link to="/signup">zarejestruj sie</Link>
            <Link to="/login">zaloguj sie</Link>
            <Link to="/guestlayout/mainguestpage">graj jako gosc</Link>
        </div>
    )
}