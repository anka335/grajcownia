import { Link, Navigate, Outlet } from "react-router-dom"
import styled from "styled-components";
import 'firebase/compat/auth';
import { useNavigate } from 'react-router-dom';
import { UserAuth } from "../../../../contexts/AuthContext";


export default function ModifyAccount(){
    return(
        <div id="ModifyAccount">
            <div><span>zmień hasło</span><form class="form-inline" ><input placeholder="poprzednie hasło"/><input placeholder="nowe hasło"value="wyślij" id="ModifyAccountBtn"/></form></div>
            <div><span>usuń konto</span><form class="form-inline"><input placeholder="hasło"/><input type="button" value="wyślij" id="ModifyAccountBtn"/></form></div>
        </div>
    )    
}