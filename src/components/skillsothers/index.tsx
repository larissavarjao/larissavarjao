import * as React from "react";
import "./style.less";

const comunication = require("../../images/comunication.jpg");

const SkillsOthers = () => (
    <div className="skills-others">
        <img src={comunication} className="comunication" />
        <div className="skills-tech">
            <h2>Soft Skills</h2>
            <ul>
                <li>Comunicação</li>
                <li>Aprendizado rápido</li>
                <li>Desenvolvimento Ágil (SCRUM)</li>
                <li>Resolução de problemas</li>
                <li>Criticidade</li>
                <li>Vontade de aprender coisas novas</li>
            </ul>
        </div>
    </div>
)

export default SkillsOthers;
