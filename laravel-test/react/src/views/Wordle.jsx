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
  const [guesser, setGuesser] = useState('');
  const [selector, setSelector] = useState('');

  const data = useLoaderData();
  if (!data) {
    return <Navigate to="/" />;
  }
  useEffect(() => {
    Pusher.logToConsole = true;
    setSelector(data.selectorName);
    setGuesser(data.guesserName);
    console.log(data);
    const pusher = new Pusher('17fe7f4b4a52d62f2e3f', {
      cluster: 'eu'
    });
    const channelChat = pusher.subscribe('game-room-' + data.roomInfo.id);
    const handleNewMessage = (data) => {
      setMessages((prevMessages) => [...prevMessages, data]);
    };
    channelChat.bind('message', handleNewMessage);

    const channelRoleChange = pusher.subscribe('role-room-' + data.roomInfo.id);
    const handleNewRoleChange = (data) => {
        console.log(data);
        if(data.role == 'selector')
            setSelector(data.name);
        else if(data.role == 'guesser')
            setGuesser(data.name);
    };
    channelRoleChange.bind('rolechange', handleNewRoleChange);

    return () => {
      channelChat.unbind('message', handleNewMessage);
      channelRoleChange.unbind('rolechange', handleNewRoleChange);
      pusher.unsubscribe('game-room-' + data.roomInfo.id);
      pusher.unsubscribe('role-room-' + data.roomInfo.id);
      pusher.disconnect();
    };
  }, []);

  const handleSetSelector = () => {
    if (selector != '')
      return;
    axios.post(
    'http://127.0.0.1:8000/api/roles',
    {
      role: "selector",
      roomId: data.roomInfo.id,
      uid: user.uid
    },
    {
      headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
    });
  };

  const handleSetGuesser = () => {
    if (guesser != '')
      return;
    axios.post(
    'http://127.0.0.1:8000/api/roles',
    {
      role: "guesser",
      roomId: data.roomInfo.id,
      uid: user.uid
    },
    {
      headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          }
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(data.roomInfo.id);
    axios.post(
        'http://127.0.0.1:8000/api/messages',
        {
          message: message,
          roomId: data.roomInfo.id,
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
        <span>partia {selector}, {guesser}</span>
        <div id="selector" onClick={handleSetSelector}>
             wybiera: {selector}
        </div>
        <div id="guesser" onClick={handleSetGuesser}>
                zgaduje: {guesser}
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
