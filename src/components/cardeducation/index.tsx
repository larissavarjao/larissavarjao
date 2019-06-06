import * as React from "react";
import "./style.less";

const university = require("../../images/university.svg");

interface ICardEducationProps {
    name: string;
    area: string;
    duration: string;
}

const CardEducation = ({ name, area, duration }: ICardEducationProps) => (
    <div className="card-section">
        <div className="card-title">
            <img src={university} className="card-image" />
            <h3>{name}</h3>
        </div>
        <div className="card-title">
            <div />
            <p>{area}<span className="italic-education">{duration}</span></p>
        </div>
    </div>
);

export default CardEducation;