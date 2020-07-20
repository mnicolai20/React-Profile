import React from "react";
import "./style.css";
import dailyPlan from "../pics/noteTaker.PNG";

function projectCard() {
    return(
        <div>
            <img src={dailyPlan} alt="planner" />
        </div>
    )
}

export default projectCard;