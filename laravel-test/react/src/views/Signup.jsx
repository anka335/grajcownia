import { useRef, useState } from "react";
import axiosClient from "../axios-client.js";
import { useStateContext } from "../contexts/ContextProvider.jsx";
import { StyledLink } from "../NavStyle.js";

export default function Signup(){
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const passwordConfirmationRef = useRef();
    const [errors, setErrors] = useState(null);
    const {setUser, setToken} = useStateContext()

    const onSubmit = (ev) => {
        ev.preventDefault()
        const payload = {
            name: nameRef.current.value,
            email: emailRef.current.value,
            password: passwordRef.current.value,
            password_confirmation: passwordConfirmationRef.current.value,
        }
        axiosClient.post('/signup', payload)
        .then(({data}) => {
            setUser(data.user)
            setToken(data.token)
        })
        .catch(err => {
            const response = err.response;
            if (response && response.status == 422) {
                console.log(response.data.errors);
                setErrors(response.data.errors)
            }
        })
    }

    return(
        <div className="authentication">
            <form onSubmit={onSubmit}>
                <h1 className="title">Zarejestruj się</h1>

                {/*{errors & <div>
                    {Object.keys(errors).map(key => (
                        <p key={key}>{errors[key][0]}</p>
                    ))}
                </div>
                }*/}

                <p><input ref={nameRef} placeholder="nazwa użytkownika" /></p>
                <p><input ref={emailRef} placeholder="email" /></p>
                <p><input ref={passwordRef} placeholder="hasło" /></p>
                <p><input ref={passwordConfirmationRef} placeholder="hasło" /></p>
                <p><button className="btn btn-block">Wyślij</button></p>
                <p className="message">
                    <StyledLink to="/login">zaloguj się</StyledLink>
                </p>
                <p className="message">
                    <StyledLink to="/guestlayout/mainguestpage">graj jako gość</StyledLink>
                </p>
            </form>
        </div>
    )
}