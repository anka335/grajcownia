import { Link, Navigate, Outlet } from "react-router-dom"
import styled from "styled-components";
import 'firebase/compat/auth';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from "../../../../contexts/AuthContext";
import { useState } from "react";
import { reauthenticateWithCredential } from "firebase/auth";

export default function ModifyAccount(){
      const [error, setError] = useState('');
      //const credential = promptForCredentials();
      //const { user } = UserAuth();

    /*const handleDelete = async (e) => {
        e.preventDefault();
        setError('')
        try {
          await reauthenticate(user, credential);
          //navigate('/guestlayout/mainguestpage')
          console.log('konto zostalo ponownie zautoryzowane')
        } catch (e) {
          setError(e.message)
          //console.log(e.message)
        }
    }*/

    return(
        <div id="ModifyAccount">
            <div><span>zmień hasło</span><form className="form-inline" ><input placeholder="poprzednie hasło"/><input placeholder="nowe hasło"/><input type="button" value="wyślij" id="ModifyAccountBtn"/></form></div>
            <div><span>usuń konto</span><form className="form-inline"><input type="button" value="wyślij" id="ModifyAccountBtn"/></form></div>
        </div>
    )    
}