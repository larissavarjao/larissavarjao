import * as React from "react";
import SEO from "../components/seo";
import Cover from "../components/cover";
import Education from "../components/education";

import 'antd/dist/antd';
import "../styles/index.less";
import "../styles/global.less";

const IndexPage = () => (
  <div className="container">
    <SEO title="Larissa Varjão" />

    <Cover />
    <Education />
  </div>
)

export default IndexPage;
