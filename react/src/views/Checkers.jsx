import Header from "../components/GuestLayout/Header"
import Chat from "../components/Games/Chat"

export default function Checkers(){
    return(
        <div className="MP">
            <Header />
            <section id="game_section">
                <aside id="game_win">
                    <div>
                        odlozone pionki
                    </div>
                </aside>
                <main id="checkers_main">
                    <div className="chess_row"> <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div> </div>
                    <div className="chess_row"> <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div> </div>
                    <div className="chess_row"> <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div> </div>
                    <div className="chess_row"> <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div> </div>
                    <div className="chess_row"> <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div> </div>
                    <div className="chess_row"> <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div> </div>
                    <div className="chess_row"> <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div> </div>
                    <div className="chess_row"> <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div> </div>
                </main>
                <div id="game_empty"></div>
                <Chat />
            </section>
        </div>
    )
}