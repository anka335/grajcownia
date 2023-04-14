import { Outlet } from "react-router-dom";

export default function MainGuestPage(){
    return(
        <div>
            Strona glowna goscia 
            <Outlet/>
        </div>
    )
}