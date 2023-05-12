import { StyledLink } from "../NavStyle"
import Logo from "../assets/Grajcownia-logo.png"
import styled from "styled-components";
import { useNavigate } from 'react-router-dom';
import { UserAuth } from '../contexts/AuthContext';
import { useState } from "react";

const SignupLink = styled(StyledLink)`
  margin-left: 3px;
`;
const LoginLink = styled(StyledLink)`
  margin-left: 4px;
`;

export default function MainPage(){
      const [error, setError] = useState('');
      const navigate = useNavigate();
      const { anonymousSignIn } = UserAuth();
    
      const handleSubmit = async (e) => {
        e.preventDefault();
        setError('')
        try {
          await anonymousSignIn()
          //navigate('/guestlayout/mainguestpage')
          //console.log('You are logged in anonymously')
        } catch (e) {
          setError(e.message)
          //console.log(e.message)
        }
    }

    return(
        <div id="SP">
            <header id="SP_header">
                <img src={Logo} height={100}/>
            </header>
            <section>
                <SignupLink to="/signup">zarejestruj się</SignupLink>
                <LoginLink to="/login">zaloguj się</LoginLink>
                <button onClick={handleSubmit} className="light-button">graj jako gość</button>
            </section>
        </div>
    )
}