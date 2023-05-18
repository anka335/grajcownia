import { StyledLink } from "../../../NavStyle"
import { useState } from "react"

function Form(isVisible){
    return <div className={`container${ isVisible ? ' wordle_form' : ' wordle_form_not_visible'}`}>aa</div>
}

export default function WordleRooms(){
    const [visible, setVisible] = useState(true);

    function handleClick(){
        setVisible(!visible);
    }

    return(
        <div id="wordle_rooms">
            <div id="wordle_rooms_div1">
                <button style={{marginTop: "10px"}} onClick={handleClick}>utwórz pokój</button>
            </div>
                <div className={`container${ visible ? ' wordle_form' : ' wordle_form_not_visible'}`}>
                    <form>
                        <input placeholder="nazwa pokoju"/>
                        <input type="submit" className="game_form_btn"/>
                    </form>
                </div>
            <div id="wordle_rooms_div2">pokoje wordle</div>
        </div>
    )
}