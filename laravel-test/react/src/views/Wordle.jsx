import Header from "../components/GuestLayout/Header"
import Chat from "../components/Games/Chat"

export default function Wordle(){
    return(
        <div className="MP">
            <Header />
            <section id="wordle_section">
                <aside id="wordle_win">
                    <div>
                        ANKA335: 1 WYGRANA
                    </div>
                    <div>
                        ANKA323: 3 WYGRANE
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
                <div id="wordle_empty"></div>
                <Chat />
            </section>
        </div>
    )
}