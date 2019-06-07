import * as React from "react";
import "./style.less";

interface CardExperienceProps {
    company: string;
    role: string;
    description: string;
}

const CardExperience = ({ company, role, description }: CardExperienceProps) => (
    <div className="card-experience">
        <span className="span span-company">{company}</span>
        <label>{role}</label>
        <p>{description}</p>
    </div>
)

export default CardExperience;