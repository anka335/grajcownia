import Header from "../components/GuestLayout/Header";
import { Navigate, useLoaderData } from "react-router-dom";
import { useEffect, useState, useRef } from "react";
import Pusher from "pusher-js";
import axios from "axios";
import { UserAuth } from '../contexts/AuthContext';
import { toLower } from "lodash";
import przegrana from "../assets/przegrana.png";
import wygrana from "../assets/wygrana.png";

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
  const [lastColor, setLastColor] = useState('     ');
  const [lastWord, setLastWord] = useState(' ');

  if (!data) {
    return <Navigate to="/" />;
  }
  useEffect(() => {
    //ustawianie informacji o pokoju po wejściu na stronę
    console.log(data);
    setSelector(data.selector.name);
    setGuesser(data.guesser.name);

    if (data.guesser.uid === user.uid){
      setIsItGuesser(true);
    }
    if (data.selector.uid === user.uid){
      setIsItSelector(true);
    }
    if (data.roomInfo.colors){
      const colors = data.roomInfo.colors.split(' ');
      const NoWords = colors.length;
      const colorsArr = [];
      for(let i = 0; i < NoWords; ++i)
          colorsArr.push(colors[i].split(''));
      setLastColor(colors[colors.length-1]);
      console.log("lastcolor: ", lastColor);
      for (let i = colorsArr.length; i < 6; ++i)
          colorsArr.push(['','','','','']);
      console.log("COLORSARR", colorsArr);
      setColor(colorsArr);
    } else {
      setColor([['','','','',''],['','','','',''],['','','','',''],['','','','',''],['','','','',''],['','','','','']]);
    }

    if (data.roomInfo.guesses){  
      const word = data.roomInfo.guesses.split(' ');
      const NoWordsW = word.length;
      const wordArr = [];
      for(let i = 0; i < NoWordsW; ++i)
          wordArr.push(word[i].split(''));
      setLastWord(word[word.length-1]);
      console.log("lastword: ", lastWord);
      for (let i = wordArr.length; i < 6; ++i)
          wordArr.push(['','','','','']);
      console.log("WORDARR", wordArr);
      setWord(wordArr);
      setWhichRow(wordArr.length);
      console.log("whichRow: ", whichRow);
    } else {
      setWord([['','','','',''],['','','','',''],['','','','',''],['','','','',''],['','','','',''],['','','','','']]);
      setWhichRow(0);
    }

   

    if (inputRefs.current[activeCell.row]) {
      inputRefs.current[activeCell.row][activeCell.col].focus(); // Ustawienie focusu na pierwszym inputie po renderowaniu komponentu
    }
    Pusher.logToConsole = true;
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
            setSelector(data.name);
            if (data.uid == user.uid){
              setIsItSelector(true);
            } else {
              setIsItSelector(false);
            }
        }
        else if(data.role == 'guesser'){
            setGuesser(data.name);
            if (data.uid == user.uid){
              setIsItGuesser(true);
            }
            else {
              setIsItGuesser(false);
            }
        }
    };
    
    channelRoleChange.bind('rolechange', handleNewRoleChange);

    const channelGuessMade = pusher.subscribe('guess-room-' + data.roomInfo.id);
    const handleNewGuessMade = (data) => {
        setLastWord(data.word);
        if (data.word === "startowanko"){
          setIsItLoser(false);
          setIsItWinner(false);
          setWhichRow(0);
          setActiveCell({ row: 0, col: 0 });
          setLastColor('');
          setLastWord('');
          setWord(Array.from({ length: 6 }, () => Array(5).fill('')));
          setColor(Array.from({ length: 6 }, () => Array(5).fill('')));
        } else {
          const c_arr = data.colors.split('');
          setColor((prevColor) =>
            prevColor.map((row, rowIndex) =>
              rowIndex < data.row ? row : rowIndex === data.row ? c_arr : Array(5).fill('')
            )
          );
        
          const arr = data.word.split('');
          setWord((prevWord) =>
            prevWord.map((row, rowIndex) =>
              rowIndex < data.row ? row : rowIndex === data.row ? arr : Array(5).fill('')
            )
          );

        setWhichRow(data.row);
        setLastColor(data.colors);
        setLastWord(data.word);
        if(data.colors == "ggggg")
        {
          if (isItGuesser){
            setIsItWinner(true);
              if (isItWinner) {
                console.log('Wygrałeś!');
              }
          }
          if (isItSelector){
            setIsItLoser(true);
          }
        }
        else if(data.row == 5)
        {
          if (isItSelector){
            setIsItWinner(true);
          }
          if (isItGuesser){
            setIsItLoser(true);
            if (isItLoser) {
              console.log('przegeales!');
            }
          }
        }
        else
        {
          setActiveCell({row: data.row + 1, col: 0});
          inputRefs.current[data.row + 1][0].focus();
        }
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

  useEffect(() => {
    console.log("guesser: ", isItGuesser);
    console.log("O S T A T N I K O L O R: ", lastColor);
    if (lastColor === 'ggggg'){
      if (isItGuesser){
        setIsItWinner(true);
      }
      if (isItSelector){
        setIsItLoser(true);
      }
    }
    else if (whichRow === 5){
      if (isItSelector){
        setIsItWinner(true);
      }
      if (isItGuesser){
        setIsItLoser(true);
      }
    }
  }, [isItGuesser, lastColor, whichRow]);

  useEffect(() => {
    if (isItLoser){
      console.log("PRZEGRALES");
    }
    if (isItWinner){
      console.log("WYGRALES");
    }
  }, [isItLoser, isItWinner])

  useEffect(() => {
    console.log("tablica kolorow: ", color);
  }, [color])

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
          </div>
        </aside>    
        <main id="wordle_main">
        {isItLoser ? (
          <div  className="wordle_form" style={{position: "absolute", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", color: "white", border: "3px solid #52796F", fontSize: "15px" }}>PRZEGRANA</div>
        ): null}
        {isItWinner ? (
          <div  className="wordle_form" style={{position: "absolute", display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center", color: "white", border: "3px solid #52796F", fontSize: "15px" }}>WYGRANA</div>
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
                <div key={colIndex}  style={{backgroundColor: color[rowIndex][colIndex] == 'g'? '#52796F': (color[rowIndex][colIndex] == 'y'? '#EEE8AA': 'white')}}>
                  {isItGuesser ? (
                    <input 
                    type="text"
                    value={letter}
                    style={{backgroundColor: color[rowIndex][colIndex] == 'g'? '#52796F': (color[rowIndex][colIndex] == 'y'? '#EEE8AA': 'white'), border: "none"}}
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
              <div style={{width: "100%", height: "20px"}} key={index}>{message.username}: {message.message}</div>
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
