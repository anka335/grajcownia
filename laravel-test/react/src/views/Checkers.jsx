import Header from "../components/GuestLayout/Header"
import Chat from "../components/Games/Chat"

export default function Checkers(){
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
                    warcaby
                </main>
                <div id="wordle_empty"></div>
                <Chat />
            </section>
        </div>
    )
}