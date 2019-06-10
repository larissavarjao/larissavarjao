import * as React from "react";
import "../styles/curriculum.less";
import ResumeStructure from "../components/resumestructure";

const otherSkills = [
  "2019 – English (Advanced)",
  "2019 - Testing Training (Cubos Tecnologia)",
  "2019 - Conducting the Lecture 'REST API and understanding its operation' (Larissa Varjão)",
  "2018 - Ninja JavaScript Course",
  "2016 – Accounting 1 (Continuity of audit knowledge - PwC)",
  "2015 – FET (Initiation in Accounting - PwC)",
  "2015 – Leadership (Ernest Young)",
  "2015 – Business Plan (LX 360)",
  "2015 – Bizagi Process Modeler (Empresa JR ADM UFBA)",
  "2014 – Communication (Eloquence)",
  "2013 – Personal Marketing (PWC)",
  "2015 – Office (Empresa JR ADM UFBA)"
];

const companies = [
  {
    title: "Cubos Tecnologia",
    role: "FullStack Web Developer",
    description: "Responsible for developing web applications using React, Typescript and Webpack and APIs using TypeScript, Postgres (or RethinkDB), Kubernets and Docker. We use Scrum for product management. I've been in Cubos since November 2017 so far.",
  },
  {
    title: "Brisa",
    role: "Software Test Intern",
    description: "Responsible for running software tests. The company's main customer is LG. I stayed during the period from March to November 2017.",
  },
  {
    title: "PwC",
    role: "Junior Audit Analyst",
    description: "Trainee and later Assistant Jr audit, having participated in Odebrecht's audit to ensure confidence in financial reporting. One of the top four accounting firms in the world. I worked from July 2015 to March 2017.",
  },
  {
    title: "Empresa Jr Adm Ufba",
    role: "Senior Consultant",
    description: "Realization and leadership of consulting projects for clients in Salvador.",
  }
];

const Resume = () => (
  <ResumeStructure
    seo="Resume"
    skillsTitle="Soft Skills"
    experienceTitle="Professional Experience"
    companies={companies}
    education="Academic Education"
    descriptionUfba="Graduated in Business Administration - Completed in 2017"
    descriptionUnifacs="Student of Computer Information Systems - Finalization in 2020"
    otherSkills={otherSkills}
    otherTitle="Others Informations"
  />
)

export default Resume;
