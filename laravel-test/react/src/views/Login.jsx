import { Link } from "react-router-dom"

export default function Login(){

    const onSubmit = (ev) => {
        ev.preventDefault()
    }

    return(
        
        <form onSubmit={onSubmit}>
            <h1 className="title">Login into your account</h1>
            <input placeholder="email"></input>
            <input placeholder="password"></input>
            <button className="btn btn-block">Login</button>
            <p className="message">
                <Link to="/signup">zarejestruj sie</Link>
                <Link to="/guestlayout/mainguestpage">graj jako gosc</Link>
            </p>
        </form>
    )
}