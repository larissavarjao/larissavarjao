import * as React from "react";
import "./style.less";

const programmer = require("../../images/programmer.png");

const Education = () => (
    <div className="education">
        <img src={programmer} className="card-image" />
        <div className="card-text">
            <h2> Formação Acadêmica </h2>
            <div className="card-section">
                <h3>Universidade de Salvador (UNIFACS)</h3>
                <p>Estudante Sistemas de Informação - <span className="italic-education">Previsão para 2020.2</span></p>
            </div>
            <div className="card-section">
                <h3>Universidade Federal da Bahia (UFBa)</h3>
                <p>Graduada em Administração - <span className="italic-education">outubro 2017</span></p>
            </div>
        </div>
    </div>
)

export default Education;
