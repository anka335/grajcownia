import Header from "../components/GuestLayout/Header";
import { Navigate, useLoaderData } from "react-router-dom";
import { useEffect, useState } from "react";
import Pusher from "pusher-js";
import axios from "axios";
import { UserAuth } from '../contexts/AuthContext';

export default function Wordle() {
  const { user } = UserAuth();
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');

  const data = useLoaderData().data;
  if (!data) {
    return <Navigate to="/" />;
  }

  useEffect(() => {
    Pusher.logToConsole = false;

    const pusher = new Pusher('17fe7f4b4a52d62f2e3f', {
      cluster: 'eu'
    });
    const channel = pusher.subscribe('game-room-' + data.id);
    const handleNewMessage = (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    };
    channel.bind('message', handleNewMessage);

    return () => {
      channel.unbind('message', handleNewMessage);
      pusher.unsubscribe('game-room-' + data.id);
      pusher.disconnect();
    };
  }, []);

  const handleClick = (e) => {
    e.preventDefault();
    setMessage("abcd");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    axios.post(
        'http://127.0.0.1:8000/api/messages',
        {
          message: message,
          roomId: data.id,
          username: user.displayName
        },
        {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
        }
      );
    setMessage('');
  };

  return (
    <div className="MP">
      <Header />
      <section id="game_section">
        <aside id="game_win">
          <div>
            zuzyte litery
          </div>
        </aside>
        <main id="wordle_main">
        <div className="wordle_row"> <div></div><div></div><div></div><div></div><div></div> </div>
        <div className="wordle_row"> <div></div><div></div><div></div><div></div><div></div> </div>
        <div className="wordle_row"> <div></div><div></div><div></div><div></div><div></div> </div>
        <div className="wordle_row"> <div></div><div></div><div></div><div></div><div></div> </div>
        <div className="wordle_row"> <div></div><div></div><div></div><div></div><div></div> </div>
        <div className="wordle_row"> <div></div><div></div><div></div><div></div><div></div> </div>
        </main>
        <aside id="chat">
        <div id="chat_close"><div>X</div></div>
        <span>partia anka335 anka323</span>
        <div id="selector">
             wybiera: anka335
        </div>
        <div id="guesser">
                zgaduje: anka323
        </div>
          <div id="chat_box" className="stats_scrollbar">
            {messages.map((message, index) => (
              <p key={index}>{message.username}: {message.message}</p>
            ))}
          </div>
          <form>
            <input type="text" onChange={(e) => setMessage(e.target.value)} />
            <input type="button" value="wyślij" onClick={handleSubmit} />
          </form>
        </aside>
      </section>
    </div>
  );
}
