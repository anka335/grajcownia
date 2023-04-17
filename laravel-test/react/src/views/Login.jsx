import { StyledLink } from "../NavStyle"
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
                    <StyledLink to="/signup">zarejestruj sie</StyledLink>
                </p>
                <p className="message">
                    <StyledLink to="/guestlayout/mainguestpage">graj jako gosc</StyledLink>
                </p>
            </form>
        </div>
    )
}