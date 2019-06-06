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

import "../styles/global.less";

const cover = require("../images/background/background-cover.jpg");
const skills = require("../images/background/background-skills.jpg");
const education = require("../images/background/background-education.jpg");
const projects = require("../images/background/background-projects.jpg");
const work = require("../images/background/background-work.jpg");

const IndexPage = () => (
  <div className="container">
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
    <Footer />
  </div>
)

export default IndexPage;
