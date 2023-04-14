export default function ModifyAccount(){
    return(
        <div>
            <p>zmien haslo<form><input value={stare}></input><input value={nowe}></input><input type="button">potwierdz</input></form></p>
            <p>zmien email<form><input value={haslo}></input><input value={nowy}></input><input type="button">potwierdz</input></form></p>
            <p>zmien nazwe uzytkownika<form><input value={haslo}></input><input value={nowa}></input><input type="button">potwierdz</input></form></p>
            <p>usun konto<form><input value={haslo}></input><input type="button">potwierdz</input></form></p>
        </div>
    )    
}