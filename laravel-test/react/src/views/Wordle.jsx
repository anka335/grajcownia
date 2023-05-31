import Header from "../components/GuestLayout/Header"
import Chat from "../components/Games/Chat"
import { Navigate, useLoaderData } from "react-router-dom";

export default function Wordle(){
    let data = useLoaderData();
    console.log(data);
    if (!data){
        return(
            <Navigate to="/"/>
        )
    }

    return(
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
                <Chat />
            </section>
        </div>
    )
}