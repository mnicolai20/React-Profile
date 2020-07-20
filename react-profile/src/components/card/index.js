import React from "react";
import "./style.css";
import dailyPlan from "../pics/noteTaker.PNG";
import passwordGen from "../pics/passwordGen.PNG";

function projectCard() {
    return(
        <div>
            <img src={dailyPlan} alt="planner" className="planner"/>
            <img src={passwordGen} alt="password" className="planner"/>
        </div>
    )
}

export default projectCard;