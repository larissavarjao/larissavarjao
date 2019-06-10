import * as React from "react";
import "../styles/curriculum.less";
import ResumeStructure from "../components/resumestructure";

const otherSkills = [
  "2019 – Inglês (Avançado)",
  "2019 - Treinamento sobre testes (Cubos Tecnologia)",
  "2019 - Realização da Palestra 'Montando uma API REST e entendendo o seu funcionamento' (Larissa Varjão)",
  "2018 - Curso JavaScript Ninja",
  "2016 – Contabilidade 1 (Continuidade nos conhecimentos de auditoria – PwC)",
  "2015 – FET (Iniciação em Contabilidade – PwC)",
  "2015 – Liderança (Ernest Young)",
  "2015 – Plano de negócios (LX 360)",
  "2015 – Bizagi Process Modeler (Empresa JR ADM UFBA)",
  "2014 – Comunicação (Eloquence)",
  "2013 – Marketing Pessoal (PWC)",
  "2015 – Pacote Office (Empresa JR ADM UFBA)"
];

const companies = [
  {
    title: "Cubos Tecnologia",
    role: "Desenvolvedora FullStack Web",
    description: "Responsável por desenvolvimento de aplicações web usando React, Typescript e Webpack e APIs usando TypeScript, Postgres (ou RethinkDB), Kubernets e Docker. Usamos Scrum para gerenciamento de produto. Estou na Cubos desde Novembro de 2017 até o momento.",
  },
  {
    title: "Brisa",
    role: "Estagiária de Teste de Software",
    description: "Responsável pela execução de testes de software. A empresa possui como principal cliente a LG. Permaneci durante o período de Março até novembro de 2017.",
  },
  {
    title: "PwC",
    role: "Analista Júnior de Auditoria",
    description: "Trainee e, posteriormente, Assistente Jr de auditoria, tendo participado da auditoria da Odebrecht, visando assegurar a confiança em relatórios financeiros. Uma das quatro principais empresas de contabilidade do mundo. Trabalhei durante o período de Julho de 2015 à Março de 2017.",
  },
  {
    title: "Empresa Jr Adm Ufba",
    role: "Consultora Sênior",
    description: "Realização e liderança de projetos de consultoria para clientes em Salvador.",
  }
];

const Curriculum = () => (
  <ResumeStructure
    seo="Currículo"
    skillsTitle="Qualificação Profissional"
    experienceTitle="Experiência Profissional"
    companies={companies}
    education="Formação Acadêmica"
    descriptionUfba="Graduada em Administração - outubro 2017"
    descriptionUnifacs="Estudante Sistemas de Informação - Previsão para 2020"
    otherSkills={otherSkills}
    otherTitle="Outras Informações"
  />
)

export default Curriculum;
