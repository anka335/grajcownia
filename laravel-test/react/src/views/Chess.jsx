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
                        <td className="left_label">8</td>
                        <td className="even left_border top_border"></td>
                        <td className="odd top_border"></td>
                        <td className="even top_border"></td>
                        <td className="odd top_border"></td>
                        <td className="even top_border"></td>
                        <td className="odd top_border"></td>
                        <td className="even top_border"></td>
                        <td className="odd right_border top_border"></td>
                    </tr>
                    <tr>
                        <td className="left_label">7</td>
                        <td className="odd left_border"></td>
                        <td className="even"></td>
                        <td className="odd"></td>
                        <td className="even"></td>
                        <td className="odd"></td>
                        <td className="even"></td>
                        <td className="odd"></td>
                        <td className="even right_border"></td>
                    </tr>
                    <tr>
                        <td className="left_label">6</td>
                        <td className="even left_border"></td>
                        <td className="odd"></td>
                        <td className="even"></td>
                        <td className="odd"></td>
                        <td className="even"></td>
                        <td className="odd"></td>
                        <td className="even"></td>
                        <td className="odd right_border"></td>
                    </tr>
                    <tr>
                        <td className="left_label">5</td>
                        <td className="odd left_border"></td>
                        <td className="even"></td>
                        <td className="odd"></td>
                        <td className="even"></td>
                        <td className="odd"></td>
                        <td className="even"></td>
                        <td className="odd"></td>
                        <td className="even right_border"></td>
                    </tr>
                    <tr>
                        <td className="left_label">4</td>
                        <td className="even left_border"></td>
                        <td className="odd"></td>
                        <td className="even"></td>
                        <td className="odd"></td>
                        <td className="even"></td>
                        <td className="odd"></td>
                        <td className="even"></td>
                        <td className="odd right_border"></td>
                    </tr>
                    <tr>
                        <td className="left_label">3</td>
                        <td className="odd left_border"></td>
                        <td className="even"></td>
                        <td className="odd"></td>
                        <td className="even"></td>
                        <td className="odd"></td>
                        <td className="even"></td>
                        <td className="odd"></td>
                        <td className="even right_border"></td>
                    </tr>
                    <tr>
                        <td className="left_label">2</td>
                        <td className="even left_border"></td>
                        <td className="odd"></td>
                        <td className="even"></td>
                        <td className="odd"></td>
                        <td className="even"></td>
                        <td className="odd"></td>
                        <td className="even"></td>
                        <td className="odd right_border"></td>
                    </tr>
                    <tr>
                        <td className="left_label">1</td>
                        <td className="odd left_border bottom_border"></td>
                        <td className="even bottom_border"></td>
                        <td className="odd bottom_border"></td>
                        <td className="even bottom_border"></td>
                        <td className="odd bottom_border"></td>
                        <td className="even bottom_border"></td>
                        <td className="odd bottom_border"></td>
                        <td className="even right_border bottom_border"></td>
                    </tr>
                    <tr>
                        <td className="corner_label"></td>
                        <td className="bottom_label">A</td>
                        <td className="bottom_label">B</td>
                        <td className="bottom_label">C</td>
                        <td className="bottom_label">D</td>
                        <td className="bottom_label">E</td>
                        <td className="bottom_label">F</td>
                        <td className="bottom_label">G</td>
                        <td className="bottom_label">H</td>
                    </tr>
                    </tbody>
                </table>
                <div id="game_empty"></div>
                <Chat />
            </section>
        </div>
    )
}