import * as React from "react";
import "./style.less";
import { IProps } from "../cover";
import CardEducation from "../cardeducation";

const programmer = require("../../images/programmer.png");

const Education = ({ language }: IProps) => {
    const subtitle = language === "pt" ? "Formação Acadêmica" : "Academic Education";
    const unifacsArea = language === "pt" ? "Estudante Sistemas de Informação - " : "Student of Computer Information Systems - ";
    const unifacsDuration = language === "pt" ? "Previsão para 2020" : "Finalization in 2020";
    const ufbaArea = language === "pt" ? "Graduada em Administração - " : "Graduated in Business Administration - ";
    const ufbaDuration = language === "pt" ? "Outubro de 2017" : "Completed in 2017";

    return <div className="education">
        <div className="card-text">
            <h2>{subtitle}</h2>
            <CardEducation name="Universidade de Salvador (UNIFACS)" area={unifacsArea} duration={unifacsDuration} />
            <CardEducation name="Universidade Federal da Bahia (UFBA)" area={ufbaArea} duration={ufbaDuration} />
        </div>
        <img src={programmer} className="card-image" />
    </div>
}

export default Education;
