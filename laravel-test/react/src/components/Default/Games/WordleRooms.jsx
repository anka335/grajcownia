import { useState } from "react"
import axios from "axios";
import React from "react";
import { useEffect } from "react";

function Form(isVisible){
    return <div className={`container${ isVisible ? ' wordle_form' : ' wordle_form_not_visible'}`}>aa</div>
}

const baseURL = "http://127.0.0.1:8000/api/rooms";


export const usePost = (post) => {
    console.log(post[1].id);
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
        e.preventDefault();
        try {
            const res = axios.post('http://127.0.0.1:8000/api/rooms', {
                name: roomName,
                status: "active",
                game_type: "wordle",
                user_id: 1
            }, 
            {
                headers: {
                    'Key': 'Accept',
                    'Content-Type': 'application/json'
                }
            });
            console.log('room: ', roomName);
        } catch (error) {
            console.error('Błąd podczas dodawania użytkownika do bazy danych:', error);
        }
    }

    React.useEffect(() => {
        axios.get(baseURL).then((response) => {
          setPost(response.data);
          console.log(response.data);
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
                            <hr/>
                        </div>
                    ))}
                </div>
            </div>
        )
}
/*try {
    const response = axios.get('http://127.0.0.1:8000/api/rooms', {
        headers: {
          'Key': 'Accept',
          'Content-Type': 'application/json'
        }
      });*/