export default function PersonalData(){
    return(
        <div id="Outlet_PersonalData">
            <label>wszyscy<input type="radio" name="btn" id="pd_first"/></label>
            <label>moi znajomi<input type="radio" name="btn" id="pd_second" checked="checked"/></label>
            <label>nikt<input type="radio" name="btn" id="pd_third"/></label>
        </div>
    )
}