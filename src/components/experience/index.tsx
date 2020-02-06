import * as React from "react";
import "./style.less";
import CompanyCard, { ICompanyCardProps } from "../cardcompany";
import { Icon, Button } from "antd";
import { IProps } from "../cover";

const cubos = require("../../images/cubos.svg");
const pwc = require("../../images/pwc.svg");
const brisa = require("../../images/brisa.png");

const Experience = ({ language }: IProps) => {
    const subtitle = language === "pt" ? "Experiência Profissional" : "Professional Experience";
    const companies: ICompanyCardProps[] = [
        {
            title: "Agency Enterprise",
            description: language === "pt" ? "Responsável por desenvolvimento de aplicações web usando React, Typescript e Webpack e APIs usando TypeScript, Postgres (ou RethinkDB), Ruby on Rails, C# e PHO. Usamos Scrum para gerenciamento de produto. Estou na AE desde Agosto de 2019 até o momento." : "Responsible for developing web applications using React, Typescript and Webpack and APIs using TypeScript, Postgres (or RethinkDB), Ruby on rails, C# and PHP. We use Scrum for product management. I've been in AE since August 2019 so far.",
            logo: cubos,
            link: "https://www.cubos.io"
        },
        {
            title: "Cubos Tecnologia",
            description: language === "pt" ? "Responsável por desenvolvimento de aplicações web usando React, Typescript e Webpack e APIs usando TypeScript, Postgres (ou RethinkDB), Kubernets e Docker. Usamos Scrum para gerenciamento de produto. Estou na Cubos desde Novembro de 2017 até Agosto de 2019." : "Responsible for developing web applications using React, Typescript and Webpack and APIs using TypeScript, Postgres (or RethinkDB), Kubernets and Docker. We use Scrum for product management. I've been in Cubos since November 2017 until August 2019.",
            logo: cubos,
            link: "https://www.cubos.io"
        },
        {
            title: "Brisa",
            description: language === "pt" ? "Responsável pela execução de testes de software. A empresa possui como principal cliente a LG. Permaneci durante o período de Março até novembro de 2017." : "Responsible for running software tests. The company's main customer is LG. I stayed during the period from March to November 2017.",
            logo: brisa,
            link: "https://www.brisa.org.br"
        },
        {
            title: "PwC",
            description: language === "pt" ? "Trainee e, posteriormente, Assistente Jr de auditoria, tendo participado da auditoria da Odebrecht, visando assegurar a confiança em relatórios financeiros. Uma das quatro principais empresas de contabilidade do mundo. Trabalhei durante o período de Julho de 2015 à Março de 2017." : "Trainee and later Assistant Jr audit, having participated in Odebrecht's audit to ensure confidence in financial reporting. One of the top four accounting firms in the world. I worked from July 2015 to March 2017.",
            logo: pwc,
            link: "https://www.pwc.com.br"
        }
    ];

    return <div className="experience">
        <h2>{subtitle}</h2>
        <div className="experience-grid">
            {companies.map(company => <CompanyCard key={company.title} title={company.title} description={company.description} logo={company.logo} link={company.link} />)}
        </div>
        <a className="project-button-linkedin" href="https://www.linkedin.com/in/larissa-varjão-152932b8/" target="_blank">
            <Button shape="round" ghost type="primary">LINKEDIN <Icon type="linkedin" /></Button>
        </a>
    </div>
}

export default Experience;
