import * as React from "react";
import "./style.less";

const woman = require("../../images/woman-code.jpg");
const comunication = require("../../images/comunication.jpg");

const Skills = () => (
    <>
        <div className="skills-parallax">
        </div>

        <div className="skills">
            <div className="skills-tech">
                <h2>Competências técnicas</h2>
                <ul>
                    <li>JavaScript</li>
                    <li>TypeScript</li>
                    <li>CSS</li>
                    <li>SASS</li>
                    <li>React</li>
                    <li>Webpack</li>
                    <li>Node</li>
                    <li>Postgres</li>
                    <li>RethinkDB</li>
                    <li>MongoDB</li>
                    <li>CI</li>
                    <li>Testes automatizados</li>
                    <li>Python</li>
                </ul>
            </div>
            <img src={woman} className="woman-code" />
        </div>

        <div className="skills-2">
            <img src={comunication} className="woman-code" />
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
    </>
)

export default Skills;
