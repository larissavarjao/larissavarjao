import * as React from "react";
import "./style.less";
import CardProject, { ICardProps } from "../cardproject";
import { Button, Icon } from "antd";
import { IProps } from "../cover";

const mtfa = require("../../images/projects/mtfa.jpg");
const escola = require("../../images/projects/escola.jpg");
const calc = require("../../images/projects/calc.jpg");

const projects: ICardProps[] = [
    {
        title: "Escola Sonho Meu", image: escola, url: "https://larissavarjao.github.io/escola-sonho-meu/", github: "https://github.com/larissavarjao/escola-sonho-meu"
    },
    {
        title: "Mulheres também fazem amor", image: mtfa, url: "https://larissavarjao.github.io/mulherestambemfazemamor/", github: "https://github.com/larissavarjao/mulherestambemfazemamor"
    },
    {
        title: "Calculadora de Churrasco", image: calc, url: "https://calculadoradechurrasco.github.io/", github: "https://github.com/larissavarjao/calculadoradechurrasco"
    }
];

const Projects = ({ language }: IProps) => {
    const subtitle = language === "pt" ? "Trabalhos Realizados Recentemente" : "Recent Work";

    return <div className="projects">
        <h2>{subtitle}</h2>
        <div className="projects-grid">
            {projects.map(project => <CardProject language={language} title={project.title} key={project.title} url={project.url} image={project.image} github={project.github} />)}
        </div>
        <a className="project-button-github" href="https://github.com/larissavarjao" target="_blank">
            <Button shape="round" ghost type="primary">GITHUB<Icon type="github" /></Button>
        </a>
    </div>;
}

export default Projects;
