import * as React from "react";
import "./style.less";

const programmer = require("../../images/programmer.png");
const university = require("../../images/university.svg");

const Education = () => (
    <div className="education">
        <div className="card-text">
            <h2> Formação Acadêmica </h2>
            <div className="card-section">
                <div className="card-title">
                    <img src={university} className="card-image" />
                    <h3>Universidade de Salvador (UNIFACS)</h3>
                </div>
                <div className="card-title">
                    <div />
                    <p>Estudante Sistemas de Informação - <span className="italic-education">Previsão para 2020.2</span></p>
                </div>
            </div>
            <div className="card-section">
                <div className="card-title">
                    <img src={university} className="card-image" />
                    <h3>Universidade Federal da Bahia (UFBa)</h3>
                </div>
                <div className="card-title">
                    <div />
                    <p>Graduada em Administração - <span className="italic-education">outubro 2017</span></p>
                </div>
            </div>
        </div>
        <img src={programmer} className="card-image" />
    </div>
)

export default Education;
