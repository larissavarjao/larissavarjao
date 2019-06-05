import * as React from "react";
import "./style.less";

const woman = require("../../images/woman-code.jpg");

const SkillsTech = () => (
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
)

export default SkillsTech;
