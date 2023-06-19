import { useState } from "react"
import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { StyledLink } from "../../../NavStyle";
import styled from "styled-components";

const FinalLink = styled(StyledLink)`
    margin-left: 15px;
    padding: 0;
    margin-top: 0;
    margin-bottom: 0;
`;

function Form(isVisible){
    return <div className={`container${ isVisible ? ' wordle_form' : ' wordle_form_not_visible'}`}>aa</div>
}

const baseURL = import.meta.env.VITE_API_BASE_URL + "/rooms";


export const usePost = (post) => {
    return post;
}

export default function WordleRooms(){
    const [visible, setVisible] = useState(false);
    const [input, setInput] = useState('');
    const [post, setPost] = React.useState(null);
    function handleClick(){
        setVisible(!visible);
    }

    const handleSubmit = (e) => {
        const roomName = input;
        setVisible(false);
        e.preventDefault();
        try {
            const res = axios.post(baseURL, {
                name: roomName,
                status: "inactive",
                game_type: "wordle"
            }, 
            {
                headers: {
                    'Key': 'Accept',
                    'Content-Type': 'application/json'
                }
            });
        } catch (error) {
            console.error('Błąd podczas dodawania użytkownika do bazy danych:', error);
        }
    }

    useEffect(() => {
        axios.get(baseURL).then((response) => {
            setPost(response.data);
        });
      }, []);
    

      if (!post) {
        return null;
        }

        usePost(post);

        return(
            <div id="wordle_rooms">
                <div id="wordle_rooms_div1">
                    <button style={{marginTop: "10px"}} onClick={handleClick}>utwórz pokój</button>
                </div>
                    <div className={`container${ visible ? ' wordle_form' : ' wordle_form_not_visible'}`}>
                        <form onSubmit={handleSubmit}>
                            <input placeholder="nazwa pokoju" value={input} onInput={e => setInput(e.target.value)}/>
                            <input type="submit" className="game_form_btn"/>
                        </form>
                    </div>
                <div id="wordle_rooms_div2" className="stats_scrollbar">
                    {post.map(item => (
                        <div key={item.id} className="list_of_rooms">
                            <span>ID: {item.id}</span>
                            <span>Nazwa: {item.name}</span>
                            <FinalLink to={"/testroom/" + item.id}>Dołącz</FinalLink>
                            <hr/>
                        </div>
                    ))}
                </div>
            </div>
        )
}