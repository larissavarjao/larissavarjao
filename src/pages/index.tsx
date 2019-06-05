import * as React from "react";
import SEO from "../components/seo";
import Cover from "../components/cover";
import Projects from "../components/projects";
import Parallax from "../components/parallax";
import Education from "../components/education";
import HelloWorld from "../components/helloworld";
import Experience from "../components/experience";
import SkillsFront from "../components/skillsfront";
import SkillsBack from "../components/skillsback";

import 'antd/dist/antd';
import "../styles/index.less";
import "../styles/global.less";

const cover = require("../images/background/background-cover.jpg");
const skills = require("../images/background/background-skills.jpg");
const education = require("../images/background/background-education.jpg");
const projects = require("../images/background/background-projects.jpg");
const work = require("../images/background/background-work.jpg");

const IndexPage = () => (
  <div className="container">
    <SEO title="Larissa Varjão" />

    <Cover />
    <Parallax background={cover} />
    <HelloWorld />
    <Parallax background={skills} />
    <SkillsFront />
    <SkillsBack />
    <Parallax background={education} />
    <Education />
    <Parallax background={projects} />
    <Projects />
    <Parallax background={work} />
    <Experience />
  </div>
)

export default IndexPage;
