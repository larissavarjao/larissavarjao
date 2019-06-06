import * as React from "react";
import "./style.less";

interface IProps {
    content: { image: string, skillsArray: string[] };
}

const SkillsGrid = ({ content }: IProps) => (
    <div>
        {content.skillsArray.map(skill => <div className="skills-grid" key={`${content.image}${skill}`}>
            <span className="skills-image"><img src={content.image} /></span>
            <label className="skills-text">{skill}</label>
        </div>)}
    </div>
)

export default SkillsGrid;
