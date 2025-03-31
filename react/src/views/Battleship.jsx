import Header from "../components/GuestLayout/Header"
import Chat from "../components/Games/Chat"

export default function Battleship(){
    return(
        <div className="MP">
            <Header />
            <section id="game_section">
                <div>
                <table id="battleShip">
                    <tbody className="battleShip_main">
                        <tr className="battleship_labels"><th className="file"></th><th className="file">A</th><th className="file">B</th><th className="file">C</th><th className="file">D</th><th className="file">E</th><th className="file">F</th><th className="file">G</th><th className="file">H</th><th className="file">I</th><th className="file">J</th></tr>
                        <tr className="battleship_row"><th>1</th><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                        <tr className="battleship_row"><th>2</th><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                        <tr className="battleship_row"><th>3</th><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                        <tr className="battleship_row"><th>4</th><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                        <tr className="battleship_row"><th>5</th><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                        <tr className="battleship_row"><th>6</th><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                        <tr className="battleship_row"><th>7</th><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                        <tr className="battleship_row"><th>8</th><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                        <tr className="battleship_row"><th>9</th><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                        <tr className="battleship_row"><th>10</th><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                    </tbody>
                    <div id="battleship_empty"></div>
                    <tbody className="battleShip_main">
                        <tr className="battleship_labels"><th className="file"></th><th className="file">A</th><th className="file">B</th><th className="file">C</th><th className="file">D</th><th className="file">E</th><th className="file">F</th><th className="file">G</th><th className="file">H</th><th className="file">I</th><th className="file">J</th></tr>
                        <tr className="battleship_row"><th>1</th><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                        <tr className="battleship_row"><th>2</th><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                        <tr className="battleship_row"><th>3</th><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                        <tr className="battleship_row"><th>4</th><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                        <tr className="battleship_row"><th>5</th><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                        <tr className="battleship_row"><th>6</th><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                        <tr className="battleship_row"><th>7</th><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                        <tr className="battleship_row"><th>8</th><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                        <tr className="battleship_row"><th>9</th><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                        <tr className="battleship_row"><th>10</th><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td><td></td></tr>
                    </tbody>
                </table>
                <div id="battleship_pieces">
                    <div>
                        odlozone statki
                    </div>
                </div>
                </div>
                <Chat />
            </section>
        </div>
    )
}