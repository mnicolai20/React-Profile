import React from "react";
import "./style.css";

function AboutBody(){
    return(
        <div className="fullPage">
            <h1 className="aboutTitle">About Me</h1>
            <div className="context">
            <p className="paragraph">
                I am a graduate of Temple University class of 2016. I graduated with a major in Criminal Justice and
                a minor in Sociology. Since June of 2016 I have worked in the claims department of a title insurance company,
                as a claims specialist. In this position, I evaluate title claims and determine coverage based on the insured's policy. This position
                has greatly improved my attention to detail. Anyone who works in this position must constantly pay attention
                to the fine print on any document and be able to quickly search through state laws and statutes. I believe the quality of
                paying great attention to detail is a very effective skill in coding and software development.
            </p>
            <p className="paragraph">
                Coding has always intrigued me. From a young age I was fascinated by video games and the fact that a series of code
                was able to create an interactive world. This early fascination is what led me to where I am today. I joined the coding bootcamp
                to learn the skills I would need to enter a career in software development.
            </p>
            </div>
        </div>
    )
}

export default AboutBody;