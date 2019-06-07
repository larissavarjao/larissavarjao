import * as React from "react";
import "./style.less";
import SEO from "../seo";
import "../../styles/curriculum.less";
import SkillsGrid from "../skillsgrid";
import CardExperience from "../cardexperience";
import { Link } from "gatsby";

const database = require("../../images/database.svg");
const code = require("../../images/code.svg");
const arrow = require("../../images/arrow.svg");
const arrowBack = require("../../images/arrow-back.png");

const gridFront = {
    image: code, skillsArray: [
        "HTML",
        "CSS",
        "JavaScript",
        "SASS",
        "LESS",
        "React",
        "Gatsby",
        "TypeScript",
        "Webpack",
        "Mobx",
    ]
}

const backSkills = {
    image: database, skillsArray: [
        "NodeJS",
        "TypeScript",
        "Postgres",
        "RethinkDB",
        "MongoDB",
        "Jest",
    ]
};

interface IExperienceProps {
    title: string;
    role: string;
    description: string;
}

interface IResumeProps {
    seo: string;
    companies: IExperienceProps[];
    skillsTitle: string;
    experienceTitle: string;
    education: string;
    descriptionUnifacs: string;
    descriptionUfba: string;
    otherSkills: string[];
    otherTitle: string;
}

const ResumeStructure = ({ seo, companies, skillsTitle, experienceTitle, education, descriptionUnifacs, descriptionUfba, otherSkills, otherTitle }: IResumeProps) => {

    const otherSkillsWithLanguage = { image: arrow, skillsArray: otherSkills };

    return <div className="curriculum">
        <Link to="/"><img src={arrowBack} className="arrow-back" /></Link>
        <SEO title={seo} />
        <h1>Larissa Silva Varjão</h1>
        <div className="skills">
            <h2>{skillsTitle}</h2>
            <div className="skills-flex">
                <div>
                    <span className="span">Front-End</span>
                    <SkillsGrid content={gridFront} />
                </div>
                <div className="back-margin">
                    <span className="span">Back-End</span>
                    <SkillsGrid content={backSkills} />
                </div>
            </div>
        </div>
        <div className="card">
            <h2>{experienceTitle}</h2>
            {companies.map(comp => <CardExperience company={comp.title} description={comp.description} key={comp.title} role={comp.role} />)}
        </div>
        <div className="education-cv">
            <h2>{education}</h2>
            <div className="education-item">
                <span className="span">Universidade de Salvador (UNIFACS)</span>
                <p>{descriptionUnifacs}</p>
            </div>
            <div className="education-item">
                <span className="span">Universidade Federal da Bahia (UFBa)</span>
                <p>{descriptionUfba}</p>
            </div>
        </div>
        <div>
            <h2>{otherTitle}</h2>
            <SkillsGrid content={otherSkillsWithLanguage} />
        </div>
    </div>
}

export default ResumeStructure;