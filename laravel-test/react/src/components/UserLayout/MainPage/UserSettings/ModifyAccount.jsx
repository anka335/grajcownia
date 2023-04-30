export default function ModifyAccount(){
    return(
        <div id="ModifyAccount">
            <div><span>zmień hasło</span><form class="form-inline"><input placeholder="poprzednie hasło"/><input placeholder="nowe hasło"/><input type="button" value="wyślij" id="ModifyAccountBtn"/></form></div>
            <div><span>zmień email</span><form class="form-inline"><input placeholder="hasło"/><input placeholder="nowy email"/><input type="button" value="wyślij" id="ModifyAccountBtn"/></form></div>
            <div><span>zmień nazwę</span><form class="form-inline"><input placeholder="hasło"/><input placeholder="nowa nazwa użytkownika"/><input type="button" value="wyślij" id="ModifyAccountBtn"/></form></div>
            <div><span>usuń konto</span><form class="form-inline"><input placeholder="hasło"/><input type="button" value="wyślij" id="ModifyAccountBtn"/></form></div>
        </div>
    )    
}