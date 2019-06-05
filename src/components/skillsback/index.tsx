import * as React from "react";
import "./style.less";
import SkillsGrid from "../skillsgrid";

const backend = require("../../images/backend.png");
const database = require("../../images/database.svg");

const backSkills = {
    image: database, skillsArray: [
        "NodeJS",
        "TypeScript",
        "Postgres",
        "RethinkDB",
        "MongoDB",
        "Jest",
    ]
};

const SkillsBack = () => (
    <div className="skills-back">
        <img src={backend} className="image-backend" />
        <div className="skills-tech-back">
            <h2>Back End Skills</h2>
            <SkillsGrid content={backSkills} />
        </div>
    </div>
)

export default SkillsBack;
