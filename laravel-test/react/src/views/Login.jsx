import { Link } from "react-router-dom"

export default function Login(){

    const onSubmit = (ev) => {
        ev.preventDefault()
    }

    return(
        <div className="authentication">
            <form onSubmit={onSubmit}>
                <h1 className="title">Zaloguj sie</h1>
                <p><input placeholder="email"></input></p>
                <p><input placeholder="hasło"></input></p>
                <p><button className="btn btn-block">wyślij</button></p>
                <p className="message">
                    <Link to="/signup">zarejestruj sie</Link>
                </p>
                <p className="message">
                    <Link to="/guestlayout/mainguestpage">graj jako gosc</Link>
                </p>
            </form>
        </div>
    )
}