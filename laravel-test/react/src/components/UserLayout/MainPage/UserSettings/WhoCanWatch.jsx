import { useState } from "react";

export default function PersonalData(){
    const [selectedOption, setSelectedOption] = useState("znajomi");
    function handleOptionChange(event) {
        setSelectedOption(event.target.value);
    }

    return (
        <div id="Outlet_PersonalData">
          <form>
            <label className={selectedOption === "wszyscy" ? "selected" : "unselected"}>
              wszyscy
              <input
                type="radio"
                name="btn"
                id="pd_first"
                value="wszyscy"
                checked={selectedOption === "wszyscy"}
                onChange={handleOptionChange}
              />
            </label>
            <label className={selectedOption === "znajomi" ? "selected" : "unselected"}>
              moi znajomi
              <input
                type="radio"
                name="btn"
                id="pd_second"
                value="znajomi"
                checked={selectedOption === "znajomi"}
                onChange={handleOptionChange}
              />
            </label>
            <label className={selectedOption === "nikt" ? "selected" : "unselected"}>
              nikt
              <input
                type="radio"
                name="btn"
                id="pd_third"
                value="nikt"
                checked={selectedOption === "nikt"}
                onChange={handleOptionChange}
              />
            </label>
          </form>
        </div>
      )
}