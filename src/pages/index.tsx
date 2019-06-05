import * as React from "react";
const SEO = React.lazy(() => import("../components/seo"));
const Cover = React.lazy(() => import("../components/cover"));
const Footer = React.lazy(() => import("../components/footer"));
const Projects = React.lazy(() => import("../components/projects"));
const Parallax = React.lazy(() => import("../components/parallax"));
const Education = React.lazy(() => import("../components/education"));
const HelloWorld = React.lazy(() => import("../components/helloworld"));
const Experience = React.lazy(() => import("../components/experience"));
const SkillsFront = React.lazy(() => import("../components/skillsfront"));
const SkillsBack = React.lazy(() => import("../components/skillsback"));

import 'antd/dist/antd';
import "../styles/index.less";
import "../styles/global.less";
import { Spin, Icon } from "antd";

const cover = require("../images/background/background-cover.jpg");
const skills = require("../images/background/background-skills.jpg");
const education = require("../images/background/background-education.jpg");
const projects = require("../images/background/background-projects.jpg");
const work = require("../images/background/background-work.jpg");

const IndexPage = () => (
  <React.Suspense fallback={<Spin indicator={<Icon type="loading" style={{ fontSize: 32, width: "100vw", height: "100vh", display: "flex", flexDirection: "row", justifyContent: "center", alignItems: "center" }} spin />} className="spin" />}>
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
      <Footer />
    </div>
  </React.Suspense>
)

export default IndexPage;
