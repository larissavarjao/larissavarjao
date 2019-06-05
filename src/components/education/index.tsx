import * as React from "react";
import "./style.less";

const programmer = require("../../images/programmer.png");

const Education = () => (
    <div className="education">
        <div className="card">
            <img src={programmer} className="card-image" />
            <div className="card-text">
                <h2> Formação Acadêmica </h2>
                <div className="card-section">
                    <h3>Universidade de Salvador (UNIFACS)</h3>
                    <p>Estudante Sistemas de Informação - Previsão para 2020.2</p>
                </div>
                <div className="card-section">
                    <h3>Universidade Federal da Bahia (UFBa)</h3>
                    <p>Graduada em Administração - outubro 2017</p>
                </div>
            </div>
        </div>
    </div>
)

export default Education;
