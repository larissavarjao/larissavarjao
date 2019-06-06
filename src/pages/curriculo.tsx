import * as React from "react";
import SEO from "../components/seo";
import SkillsGrid from "../components/skillsgrid";

import "../styles/curriculum.less";
const database = require("../images/database.svg");
const code = require("../images/code.svg");
const arrow = require("../images/arrow.svg");

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

const otherSkills = {
  image: arrow, skillsArray: [
    "2016 – Inglês (Avançado)",
    "2019 - Treinamento sobre testes (Cubos Tecnologia)",
    "2018 - Realização da Palestra 'Montando uma API REST e entendendo o seu funcionamento' (Larissa Varjão)",
    "2018 - Curso JavaScript Ninja",
    "2016 – Contabilidade 1 (Continuidade nos conhecimentos de auditoria – PwC)",
    "2015 – FET (Iniciação em Contabilidade – PwC)",
    "2015 – Liderança (Ernest Young)",
    "2015 – Plano de negócios (LX 360)",
    "2015 – Bizagi Process Modeler (Empresa JR ADM UFBA)",
    "2014 – Comunicação (Eloquence)",
    "2013 – Marketing Pessoal (PWC)",
    "2015 – Pacote Office (Empresa JR ADM UFBA)"
  ]
};

const Curriculum = () => (
  <div className="curriculum">
    <SEO title="Currículo" />
    <h1>Larissa Silva Varjão</h1>
    <div className="skills">
      <h2>Qualificação Profissional</h2>
      <div className="skills-flex">
        <div>
          <span>Front-End</span>
          <SkillsGrid content={gridFront} />
        </div>
        <div className="back-margin">
          <span>Back-End</span>
          <SkillsGrid content={backSkills} />
        </div>
      </div>
    </div>
    <div className="card">
      <h2>Experiência Profissional</h2>
      <div className="card-experience">
        <span>Cubos Tecnologia</span>
        <label>Desenvolvedora FullStack</label>
        <p>Responsável por desenvolvimento de aplicações web usando React, Typescript e Webpack e APIs usando TypeScript, Postgres (ou RethinkDB), Kubernets e Docker. Usamos Scrum para gerenciamento de produto. Estou na Cubos desde Novembro de 2017 até o momento.</p>
      </div>
      <div className="card-experience">
        <span>Brisa</span>
        <label>Estagiária de teste de software</label>
        <p>Responsável pela execução de testes de software. A empresa possui como principal cliente a LG. Permaneci durante o período de Março até novembro de 2017.</p>
      </div>
      <div className="card-experience">
        <span>PwC</span>
        <label>Analista de Auditoria</label>
        <p>Trainee e, posteriormente, Assistente Jr de auditoria, tendo participado da auditoria da Odebrecht, visando assegurar a confiança em relatórios financeiros. Uma das quatro principais empresas de contabilidade do mundo. Trabalhei durante o período de Julho de 2015 à Março de 2017.</p>
      </div>
      <div className="card-experience">
        <span>Empresa Jr Adm Ufba</span>
        <label>Consultora Sênior</label>
        <p>Trainee e, posteriormente, Consultoria Sênior, realizando projetos de consultoria para clientes em Salvador. Trabalhei durante o período de Outubro de 2013 à Julho de 2015.</p>
      </div>
    </div>
    <div className="education-cv">
      <h2>Formação</h2>
      <div className="education-item">
        <span>Universidade de Salvador (UNIFACS)</span>
        <p>Estudante Sistemas de Informação - Previsão para 2020.2</p>
      </div>
      <div className="education-item">
        <span>Universidade Federal da Bahia (UFBa)</span>
        <p>
          Graduada em Administração - outubro 2017
        </p>
      </div>
    </div>
    <div>
      <h2>Informações Adicionais</h2>
      <SkillsGrid content={otherSkills} />
    </div>
  </div>
)

export default Curriculum;
