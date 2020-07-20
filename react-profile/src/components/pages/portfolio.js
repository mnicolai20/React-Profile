import React from "react";
// import projectCard from "../card/index";
// import 'bootstrap/dist/css/bootstrap.min.css';
import dailyPlan from "../pics/DailyPlanner.PNG";
import passwordGen from "../pics/PasswordGen.PNG";
import glutton from "../pics/Capture.PNG";
import noteTaker from "../pics/noteTaker.PNG";
import quizGen from "../pics/quizGen.PNG";
import webpageGen from "../pics/webpageGen.PNG";
import "../card/style.css"



function Portfolio() {
  return (
    <div>
      <h1>Projects</h1>
      <img src={dailyPlan} className="planner" alt="planner" />
        <p className="plannerTitle">Daily Planner</p>
      <img src={passwordGen} className="generator" alt="password" />
        <p className="passwordTitle">Password Generator</p>
      <img src={glutton} className="gluttons" alt="GA" />
        <p className="gluttonsTitle">Gluttons and Alcoholics (Recipes and Cocktail Pairing</p>
      <img src={noteTaker} className="notes" alt="noteTaker" />
        <p className="notesTitle">Note Taker</p>
      <img src={quizGen} className="quiz" alt="quizGen" />
        <p className="quizTitle">Quiz Generator</p>
      <img src={webpageGen} className="pageGen" alt="webpageGen" />
        <p className="webpageTitle">Webpage Generator</p>
    </div>
  );
}

export default Portfolio;