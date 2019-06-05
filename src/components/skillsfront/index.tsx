import * as React from "react";
import "./style.less";
import SkillsGrid from "../skillsgrid";

const frontend = require("../../images/frontend.png");
const code = require("../../images/code.svg");

const gridFront = {
    image: code, skillsArray: [
        "HTML",
        "CSS",
        "JavaScript",
        "SASS",
        "LESS",
        "React",
        "TypeScript",
        "Webpack",
        "Mobx",
    ]
}

const SkillsFront = () => (
    <div className="skills-front">
        <div className="skills-tech-front">
            <h2>Front End Skills</h2>
            <SkillsGrid content={gridFront} />
        </div>
        <img src={frontend} className="image-frontend" />
    </div>
)

export default SkillsFront;
