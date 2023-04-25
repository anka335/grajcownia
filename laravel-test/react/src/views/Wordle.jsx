import Header from "../components/GuestLayout/Header"
import Chat from "../components/Games/Chat"

export default function Wordle(){
    return(
        <div className="MP">
            <Header />
            <section id="wordle_section">
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