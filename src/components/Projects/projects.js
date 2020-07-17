import React from "react";
import "../Projects/projects"
import WeTriva from "../../images/WeTrivia.png"

function Resume(){
    return (
        <div className="projects">
            <h1>
                Projects
            </h1>
            <div className="weTrivia">
                <p><img src={WeTriva}/><a href="https://intense-earth-41726.herokuapp.com/">We Trivia</a><br></br>
                <a href="https://github.com/nickrayj45/WeTrivia">GitHub</a></p>
            </div>
        </div>
    )
}

export default Resume;