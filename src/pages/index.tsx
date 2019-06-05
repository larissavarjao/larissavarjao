import * as React from "react";
import SEO from "../components/seo";
import Cover from "../components/cover";
import Education from "../components/education";
import Experience from "../components/experience";
import SkillsTech from "../components/skillstech";
import SkillsOthers from "../components/skillsothers";
import SkillsParallax from "../components/skillsparallax";
import EducationParallax from "../components/educationparallax";

import 'antd/dist/antd';
import "../styles/index.less";
import "../styles/global.less";

const IndexPage = () => (
  <div className="container">
    <SEO title="Larissa Varjão" />

    <Cover />
    <Experience />
    <EducationParallax />
    <Education />
    <SkillsParallax />
    <SkillsTech />
    <SkillsOthers />
  </div>
)

export default IndexPage;
