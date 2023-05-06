import Header from "../components/GuestLayout/Header"
import Chat from "../components/Games/Chat"

export default function Chess(){
    return(
        <div className="MP">
            <Header />
            <section id="game_section">
                <aside id="game_win">
                    <div>
                        odlozone pionki
                    </div>
                </aside>
                <table>
                    <tbody id="chess_main">
                    {/* Etykiety kolumn */}
                    {/* Komórki szachownicy */}
                    {/* Iterujemy po wierszach */}
                    {/* Dodajemy className 'even' dla parzystych rzędów i 'odd' dla nieparzystych rzędów */}
                    {/* Dodajemy className 'label' dla pierwszej komórki w każdym wierszu (etykiety rzędów) */}
                    <tr>
                        <td className="label">8</td>
                        <td className="even"></td>
                        <td className="odd"></td>
                        <td className="even"></td>
                        <td className="odd"></td>
                        <td className="even"></td>
                        <td className="odd"></td>
                        <td className="even"></td>
                        <td className="odd"></td>
                    </tr>
                    <tr>
                        <td className="label">7</td>
                        <td className="odd"></td>
                        <td className="even"></td>
                        <td className="odd"></td>
                        <td className="even"></td>
                        <td className="odd"></td>
                        <td className="even"></td>
                        <td className="odd"></td>
                        <td className="even"></td>
                    </tr>
                    <tr>
                        <td className="label">6</td>
                        <td className="even"></td>
                        <td className="odd"></td>
                        <td className="even"></td>
                        <td className="odd"></td>
                        <td className="even"></td>
                        <td className="odd"></td>
                        <td className="even"></td>
                        <td className="odd"></td>
                    </tr>
                    <tr>
                        <td className="label">5</td>
                        <td className="odd"></td>
                        <td className="even"></td>
                        <td className="odd"></td>
                        <td className="even"></td>
                        <td className="odd"></td>
                        <td className="even"></td>
                        <td className="odd"></td>
                        <td className="even"></td>
                    </tr>
                    <tr>
                        <td className="label">4</td>
                        <td className="even"></td>
                        <td className="odd"></td>
                        <td className="even"></td>
                        <td className="odd"></td>
                        <td className="even"></td>
                        <td className="odd"></td>
                        <td className="even"></td>
                        <td className="odd"></td>
                    </tr>
                    <tr>
                        <td className="label">3</td>
                        <td className="odd"></td>
                        <td className="even"></td>
                        <td className="odd"></td>
                        <td className="even"></td>
                        <td className="odd"></td>
                        <td className="even"></td>
                        <td className="odd"></td>
                        <td className="even"></td>
                    </tr>
                    <tr>
                        <td className="label">2</td>
                        <td className="even"></td>
                        <td className="odd"></td>
                        <td className="even"></td>
                        <td className="odd"></td>
                        <td className="even"></td>
                        <td className="odd"></td>
                        <td className="even"></td>
                        <td className="odd"></td>
                    </tr>
                    <tr>
                        <td className="label">1</td>
                        <td className="odd"></td>
                        <td className="even"></td>
                        <td className="odd"></td>
                        <td className="even"></td>
                        <td className="odd"></td>
                        <td className="even"></td>
                        <td className="odd"></td>
                        <td className="even"></td>
                    </tr>
                    <tr>
                        <td className="label"></td>
                        <td className="label">A</td>
                        <td className="label">B</td>
                        <td className="label">C</td>
                        <td className="label">D</td>
                        <td className="label">E</td>
                        <td className="label">F</td>
                        <td className="label">G</td>
                        <td className="label">H</td>
                    </tr>
                    </tbody>
                </table>
                <div id="game_empty"></div>
                <Chat />
            </section>
        </div>
    )
}