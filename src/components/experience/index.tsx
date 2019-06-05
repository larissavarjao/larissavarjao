import * as React from "react";
import "./style.less";

const Experience = () => (
    <div className="experience">
        <div className="experience-item">
            <div className="experience-header">
                <h3>Cubos Tecnologia</h3>
            </div>
            <div className="experience-body">
                <span>Nov. de 2017 até o momento</span>
                <p>Responsável por desenvolvimento de aplicações web usando React, Typescript e Webpack e APIs usando TypeScript, Postgres (ou RethinkDB), Kubernets e Docker. Usamos Scrum para gerenciamento de produto.</p>
            </div>
        </div>
        <div className="experience-item">
            <div className="experience-header">
                <h3>Brisa</h3>
            </div>
            <div className="experience-body">
                <span>Março até novembro de 2017</span>
                <p>Responsável pela execução de testes de software. A empresa possui como principal cliente a LG.</p>
            </div>
        </div>
        <div className="experience-item">
            <div className="experience-header">
                <h3>PwC</h3>
            </div>
            <div className="experience-body">
                <span>Julho de 2015 à Março de 2017</span>
                <p>Trainee e, posteriormente, Assistente Jr de auditoria, tendo participado da auditoria da Odebrecht, visando assegurar a confiança em relatórios financeiros. Uma das quatro principais empresas de contabilidade do mundo.</p>
            </div>
        </div>
        <div className="experience-item">
            <div className="experience-header">
                <h3>Empresa Jr</h3>
            </div>
            <div className="experience-body">
                <span>Outubro de 2013 à Julho de 2015</span>
                <p>Trainee e, posteriormente, Consultora Sênior de consultoria, tendo liderado projetos de clientes em Salvador, visando assegurar a realização de proecessos, marketing e financeiro.</p>
            </div>
        </div>
    </div >
)

export default Experience;
