import Header from "../components/GuestLayout/Header";
import { Navigate, useLoaderData } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import Pusher from "pusher-js";
import axios from "axios";
import { UserAuth } from '../contexts/AuthContext';
import { toLower } from "lodash";

export default function Wordle() {
  const { user } = UserAuth();
  const [visible, setVisible] = useState(false);
  const [messages, setMessages] = useState([]);
  const [message, setMessage] = useState('');
  const [guesser, setGuesser] = useState('');
  const [selector, setSelector] = useState('');
  const [isItSelector, setIsItSelector] = useState(false);
  const [isItGuesser, setIsItGuesser] = useState(false);
  const [word, setWord] = useState(Array(6).fill(Array(5).fill(''))); // Inicjalizacja stanu dla pięciu liter
  const [activeCell, setActiveCell] = useState({ row: 0, col: 0 });
  const [input, setInput] = useState('');
  const [color, setColor] = useState(Array(6).fill(Array(5).fill('')));
  const inputRefs = useRef([]); // Referencje do inputów tekstowych
  const data = useLoaderData();
  const [whichRow, setWhichRow] = useState(0);
  const [isItWinner, setIsItWinner] = useState(false);
  const [isItLoser, setIsItLoser] = useState(false);
  
  if (!data) {
    return <Navigate to="/" />;
  }
  useEffect(() => {
    if (inputRefs.current[activeCell.row]) {
        inputRefs.current[activeCell.row][activeCell.col].focus(); // Ustawienie focusu na pierwszym inputie po renderowaniu komponentu
      }
    Pusher.logToConsole = true;
    setSelector(data.selectorName);
    setGuesser(data.guesserName);
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
       
        if(data.role == 'selector'){
          console.log("S E L E C T O R");
            setSelector(data.name);
            if (data.uid == user.uid){
              setIsItSelector(true);
            } else {
              setIsItSelector(false);
            }
        }
        else if(data.role == 'guesser'){
          console.log(" G U E S S E R");
            setGuesser(data.name);
            console.log("data.uid == user.uid: ", data.uid == user.uid);
            if (data.uid == user.uid){
              console.log('WESZLO GDZIE POWINNO');
              setIsItGuesser(true);
              console.log("guesser: ", isItGuesser);
            }
            else {
              console.log("WESZLO ZLE");
              setIsItGuesser(false);
            }
        }
        console.log("selector: ", isItSelector, " guesser: ", isItGuesser, " data.role: ", data.role, " data.uid: ", data.uid, " user.uid: ", user.uid);
    };
    channelRoleChange.bind('rolechange', handleNewRoleChange);

    const channelGuessMade = pusher.subscribe('guess-room-' + data.roomInfo.id);
    const handleNewGuessMade = (data) => {
        const c_arr = data.colors.split('');
        color[data.row] = c_arr;
        setWhichRow(data.row);
        const arr = data.word.split('');
        word[data.row] = arr;
        console.log("K O L O R Y: ", data.colors);
        if(data.colors == "ggggg")
        {
          console.log("W E S Z L O (guesser: ) ", isItGuesser, " (selector: ) ", isItSelector);
          if (isItGuesser){
            setIsItWinner(true);
            console.log("WYGRAL AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
          }
          if (isItSelector){
            console.log("PRZEGRAL AAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
            setIsItLoser(true);
          }
        }
        else if(data.row == 5)
        {
          if (isItSelector){
            console.log("WYGRAL AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
            setIsItWinner(true);
          }
          if (isItGuesser){
            console.log("PRZEGRAL AAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA");
            setIsItLoser(true);
          }
        }
        else
        {
          setActiveCell({row: data.row + 1, col: 0});
          inputRefs.current[data.row + 1][0].focus();
        }

    };
    channelGuessMade.bind('guess', handleNewGuessMade);

    return () => {
      channelChat.unbind('message', handleNewMessage);
      channelRoleChange.unbind('rolechange', handleNewRoleChange);
      channelGuessMade.unbind('guess', handleNewGuessMade);
      pusher.unsubscribe('game-room-' + data.roomInfo.id);
      pusher.unsubscribe('role-room-' + data.roomInfo.id);
      pusher.unsubscribe('guess-room-' + data.roomInfo.id);
      pusher.disconnect();
    };
  }, []);
  const handleInputChange = (event, row, col) => {
    if (row === activeCell.row && col === activeCell.col && word[row][col] === '') {
        const newWord = [...word];
        newWord[row] = [...newWord[row]];
        newWord[row][col] = event.target.value.toUpperCase();
        setWord(newWord);
      
        if (event.target.value.length === 1 && col < inputRefs.current[row].length - 1) {
          setActiveCell({row: row, col: col+1});
          inputRefs.current[row][col + 1].focus(); // Przejście do kolejnego inputa w tym samym wierszu po wpisaniu litery
        }
    }
  };
  const handleKeyDown = (event, row, col) => {
    if (event.key === 'Enter' && activeCell.col == 4 && word[row][col] != '') {
      // Obsługa wysyłania zapytania na serwer po wciśnięciu Enter
      const guess = toLower(word[activeCell.row].join('')); // Konwersja tablicy liter na string
      console.log('Wysyłanie zapytania na serwer:', guess);
      const response = axios.post(
        'http://127.0.0.1:8000/api/guess',
        {
          uid: user.uid,
          word: guess,
          roomId: data.roomInfo.id,
          row: activeCell.row
        },
        {
          headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
              }
        });
        console.log(response);
    }
    else if(event.key === 'Backspace' && row === activeCell.row && col === activeCell.col)
    {
        if(word[row][col] != '')
        {
            const newWord = [...word];
            newWord[row] = [...newWord[row]];
            newWord[row][col] = '';
            setWord(newWord);
            
        }
        else if(col != 0)
        {
            const newWord = [...word];
            newWord[row] = [...newWord[row]];
            newWord[row][col - 1] = '';
            setWord(newWord);
            setActiveCell({row: row, col: col-1});
            inputRefs.current[row][col - 1].focus();
        }
    }
  };
  const handleSetSelector = () => {
    //if (selector != '')
      //return;
    const response = axios.post(
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
    console.log(response);
  };

  const handleSetGuesser = () => {
    //if (guesser != '' && guesser)
      //return;
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

  const handlePasswdSubmit = (e) => {
    e.preventDefault();
    const passwd = input;
    setVisible(false);
    axios.post(
      'http://127.0.0.1:8000/api/secret',
      {
        uid: user.uid,
        secret: passwd,
        roomId: data.roomInfo.id
      },
      {
        headers: {
              'Accept': 'application/json',
              'Content-Type': 'application/json'
            }
      });
  }

  function handleClick(){
    setVisible(!visible);
}

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
        {isItWinner ? (
          <div style>WYGRALES</div>
        ): null}

        {isItLoser ? (
          <div>PRZEGRALES</div>
        ): null}

        <div className={`container${ visible ? ' wordle_form' : ' wordle_form_not_visible'}`}>
          <form onSubmit={handlePasswdSubmit} className="wordle_form" style={{display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center"}}>
            <input placeholder="podaj hasło" value={input} onInput={e => setInput(e.target.value)}/>
            <input type="submit" className="game_form_btn"/>
          </form>
        </div>
        {word.map((row, rowIndex) => (
            <div key={rowIndex} className="wordle_row">
            {row.map((letter, colIndex) => (
                <div key={colIndex}  style={{backgroundColor: color[rowIndex][colIndex] == 'g'? 'green': (color[rowIndex][colIndex] == 'y'? 'yellow': 'white')}}>
                  {isItGuesser ? (
                    <input 
                    type="text"
                    value={letter}
                    style={{backgroundColor: color[rowIndex][colIndex] == 'g'? 'green': (color[rowIndex][colIndex] == 'y'? 'yellow': 'white')}}
                    onChange={(event) => handleInputChange(event, rowIndex, colIndex)}
                    onKeyDown={(event) => handleKeyDown(event, rowIndex, colIndex)}
                    ref={(ref) => {
                    if (!inputRefs.current[rowIndex]) {
                        inputRefs.current[rowIndex] = [];
                    }
                    inputRefs.current[rowIndex][colIndex] = ref;
                    }}
                    readOnly={!(rowIndex === activeCell.row && colIndex === activeCell.col)} // Ustawienie readOnly dla nieaktywnej komórki
                />  ) :  
                    <div>{word[rowIndex][colIndex]}</div>
                }
                </div>
            ))}
            </div>
        ))}
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
        {isItSelector ? (
          <button onClick={handleClick}>wybierz hasło</button>
        ) : null}
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
