import * as React from "react";
import SEO from "../components/seo";
import Cover from "../components/cover";
import Education from "../components/education";
import HelloWorld from "../components/helloworld";
import Experience from "../components/experience";
import SkillsFront from "../components/skillsfront";
import SkillsBack from "../components/skillsback";
import CoverParallax from "../components/coverparallax";
import SkillsParallax from "../components/skillsparallax";
import EducationParallax from "../components/educationparallax";

import 'antd/dist/antd';
import "../styles/index.less";
import "../styles/global.less";

const IndexPage = () => (
  <div className="container">
    <SEO title="Larissa Varjão" />

    <Cover />
    <CoverParallax />
    <HelloWorld />
    <SkillsParallax />
    <SkillsFront />
    <SkillsBack />
    <Experience />
    <EducationParallax />
    <Education />
  </div>
)

export default IndexPage;
