import React, { Component } from "react";
// import projectCard from "../card/index";
// import 'bootstrap/dist/css/bootstrap.min.css';
import Card from "../card/index";
import projects from "../../projects.json";
import Wrapper from "../wrapper/index"

class Portfolio extends Component {
  state={projects};
  render(){
  return (
    <Wrapper>
    <div>
      <h1>Projects</h1>
      {this.state.projects.map(project => (
        <Card
        caption={project.title}
        picture={project.picture}
        location={project.link}
        />
      ))}
    </div>
    </Wrapper>
  );
  }
}

export default Portfolio;