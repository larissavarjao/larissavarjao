import React from "react";
import SEO from "../components/seo";
import Cover from "../components/cover";

import 'antd/dist/antd';
import "../styles/index.less";
import "../styles/global.less";

const IndexPage = () => (
  <div className="container">
    <SEO title="Larissa Varjão" />

    <Cover />
  </div>
)

export default IndexPage;
