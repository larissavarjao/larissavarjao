import * as React from "react";
import Cover from "../components/cover";
import Footer from "../components/footer";
import Projects from "../components/projects";
import Parallax from "../components/parallax";
import Education from "../components/education";
import HelloWorld from "../components/helloworld";
import Experience from "../components/experience";
import SkillsFront from "../components/skillsfront";
import SkillsBack from "../components/skillsback";
import SEO from "../components/seo";

import "../styles/global.less";

const cover = require("../images/background/background-cover.jpg");
const skills = require("../images/background/background-skills.jpg");
const education = require("../images/background/background-education.jpg");
const projects = require("../images/background/background-projects.jpg");
const work = require("../images/background/background-work.jpg");

export type LanguageOptions = "pt" | "en";

const IndexPage = () => {
  const [language, setlanguage] = React.useState<LanguageOptions>("pt");

  const onChangeLanguage = (lang: LanguageOptions) => {
    setlanguage(lang);
  }

  return <div className="container">
    <SEO title="Larissa Varjão" />
    <Cover changeLanguage={onChangeLanguage} language={language} />
    <Parallax background={cover} />
    <HelloWorld language={language} />
    <Parallax background={skills} />
    <SkillsFront />
    <SkillsBack />
    <Parallax background={education} />
    <Education language={language} />
    <Parallax background={projects} />
    <Projects />
    <Parallax background={work} />
    <Experience />
    <Footer />
  </div>;
}

export default IndexPage;
