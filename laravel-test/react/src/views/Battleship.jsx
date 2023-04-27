import Header from "../components/GuestLayout/Header"
import Chat from "../components/Games/Chat"

export default function Battleship(){
    return(
        <div className="MP">
            <Header />
            <section id="game_section">
                <aside id="game_win">
                    <div>
                        odlozone statki
                    </div>
                </aside>
                <main className="battleship_main">
                    <div className="battleship_row">1<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div> </div>
                    <div className="battleship_row">2<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div> </div>
                    <div className="battleship_row">3<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div> </div>
                    <div className="battleship_row">4<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div> </div>
                    <div className="battleship_row">5<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div> </div>
                    <div className="battleship_row">6<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div> </div>
                    <div className="battleship_row">7<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div> </div>
                    <div className="battleship_row">8<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div> </div>
                    <div className="battleship_row">9<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div> </div>
                    <div className="battleship_row">10<div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div> </div>
                </main>
                <main className="battleship_main">
                    <div className="battleship_row"> <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div> </div>
                    <div className="battleship_row"> <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div> </div>
                    <div className="battleship_row"> <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div> </div>
                    <div className="battleship_row"> <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div> </div>
                    <div className="battleship_row"> <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div> </div>
                    <div className="battleship_row"> <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div> </div>
                    <div className="battleship_row"> <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div> </div>
                    <div className="battleship_row"> <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div> </div>
                    <div className="battleship_row"> <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div> </div>
                    <div className="battleship_row"> <div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div> </div>
                </main>
                <div id="game_empty"></div>
                <Chat />
            </section>
        </div>
    )
}