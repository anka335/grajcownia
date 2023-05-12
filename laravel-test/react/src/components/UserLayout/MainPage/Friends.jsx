import { Outlet } from "react-router-dom";
import {  useState } from "react";


export default function Friends(){
    const [selectedOption, setSelectedOption] = useState("znajomi");
    const [divSelectedOption, setDivSelectedOption] = useState("przyjaciele");

    return(
        <div id="friends">
            <div>
                <div id="friends_header" className={selectedOption === "znajomi" ? "div_selected" : "div_unselected"}>
                    <form>
                        <label className={selectedOption === "znajomi" ? "selected" : "unselected"}>
                            znajomi
                            <input
                                type="radio"
                                name="btn"
                                id="pd_first"
                                value="znajomi"
                                checked={selectedOption === "znajomi"}
                                onChange={() => {setDivSelectedOption(true); setSelectedOption("znajomi")}}
                            />
                        </label>
                        <label className={selectedOption === "zaproszenia" ? "selected" : "unselected"}>
                            zaproszenia
                            <input
                                type="radio"
                                name="btn"
                                id="pd_second"
                                value="zaproszenia"
                                checked={selectedOption === "zaproszenia"}
                                onChange={() => {setDivSelectedOption(true); setSelectedOption("zaproszenia")}}
                            />
                        </label>
                        <label className={selectedOption === "szukaj" ? "selected" : "unselected"}>
                            szukaj
                            <input
                                type="radio"
                                name="btn"
                                id="pd_third"
                                value="szukaj"
                                checked={selectedOption === "szukaj"}
                                onChange={() => {setDivSelectedOption(true); setSelectedOption("szukaj")}}
                            />
                        </label>
                    </form>
                </div>
                <div id="friends_scrollbar">
                <p>arbuzik20</p>
                    <p>alan</p>
                    <p>ziemniak</p>
                </div>
            </div>
        </div>
    )
}