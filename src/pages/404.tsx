import React from "react";
import SEO from "../components/seo";
import { Button } from "antd";
import { PageNotFound } from "../components/svgs/pageNotFound/page-not-found";

import "../styles/404.less";
import { Link } from "gatsby";

const NotFoundPage = () => (
  <div className="container-404">
    <SEO title="Página inexistente" />
    <PageNotFound />
    <h1>Parece que você acessou uma página inexistente.</h1>
    <Link to="/"><Button type="primary">Voltar!</Button></Link>
  </div>
)

export default NotFoundPage;
