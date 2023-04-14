import { Link } from "react-router-dom"
import { useRef, useState } from "react";
import axiosClient from "../axios-client.js";
import { useStateContext } from "../contexts/ContextProvider.jsx";

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
        <form onSubmit={onSubmit}>
            <h1 className="title">Signup for free</h1>

            {/*{errors & <div>
                {Object.keys(errors).map(key => (
                    <p key={key}>{errors[key][0]}</p>
                ))}
            </div>
            }*/}

            <input ref={nameRef} placeholder="full name"></input>
            <input ref={emailRef} placeholder="email"></input>
            <input ref={passwordRef} placeholder="password"></input>
            <input ref={passwordConfirmationRef} placeholder="password confirmation"></input>
            <button className="btn btn-block">Signup</button>
            <p className="message">
                <Link to="/login">zaloguj sie</Link>
                <Link to="/guestlayout/mainguestpage">graj jako gość</Link>
            </p>
        </form>
    )
}