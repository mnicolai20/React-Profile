import React, { Component } from "react";
// import projectCard from "../card/index";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "../card/index";
import projects from "../../projects.json";

class Portfolio extends Component {
  state={projects};
  render(){
  return (
    <div>
      <h1>Projects</h1>
      {this.state.projects.map(project => (
        <Card
        caption={project.title}
        picture={project.picture}
        location={project.link}
        />
      ))}
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
}

export default Portfolio;