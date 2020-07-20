import React from "react";
// import projectCard from "../card/index";
// import 'bootstrap/dist/css/bootstrap.min.css';
import dailyPlan from "../pics/DailyPlanner.PNG";
import "../card/style.css"



function Portfolio() {
  return (
    <div>
      <h1>About Me</h1>
      <img src={dailyPlan} className="planner" alt="planner" />
    </div>
  );
}

export default Portfolio;