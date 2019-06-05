import * as React from "react";
import "./style.less";
import CompanyCard, { ICompanyCardProps } from "../cardcompany";
import { Icon, Button } from "antd";

const cubos = require("../../images/cubos.svg");
const pwc = require("../../images/pwc.svg");
const brisa = require("../../images/brisa.png");

const companies: ICompanyCardProps[] = [
    {
        title: "Cubos Tecnologia",
        description: "Responsável por desenvolvimento de aplicações web usando React, Typescript e Webpack e APIs usando TypeScript, Postgres (ou RethinkDB), Kubernets e Docker. Usamos Scrum para gerenciamento de produto. Estou na Cubos desde Novembro de 2017 até o momento.",
        logo: cubos,
        link: "https://www.cubos.io"
    },
    {
        title: "Brisa",
        description: "Responsável pela execução de testes de software. A empresa possui como principal cliente a LG. Permaneci durante o período de Março até novembro de 2017.",
        logo: brisa,
        link: "https://www.brisa.org.br"
    },
    {
        title: "PwC",
        description: "Trainee e, posteriormente, Assistente Jr de auditoria, tendo participado da auditoria da Odebrecht, visando assegurar a confiança em relatórios financeiros. Uma das quatro principais empresas de contabilidade do mundo. Trabalhei durante o período de Julho de 2015 à Março de 2017.",
        logo: pwc,
        link: "https://www.pwc.com.br"
    }
];

const Experience = () => (
    <div className="experience">
        <h2>Experiência Profissional</h2>
        <div className="experience-grid">
            {companies.map(company => <CompanyCard key={company.title} title={company.title} description={company.description} logo={company.logo} link={company.link} />)}
        </div>
        <a className="project-button-linkedin" href="https://www.linkedin.com/in/larissa-varjão-152932b8/" target="_blank">
            <Button shape="round" ghost type="primary">ABRIR LINKEDIN <Icon type="linkedin" /></Button>
        </a>
    </div>
)

export default Experience;
