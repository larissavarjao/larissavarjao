import * as React from "react";
import { Button } from "antd";

import "../styles/404.less";
import { Link } from "gatsby";

const notFound = require("../images/404.png");

const NotFoundPage = () => (
  <div className="container-404">
    <img src={notFound} className="not-found-image" />
    <h1>Parece que você acessou uma página inexistente.</h1>
    <Link to="/"><Button shape="round" ghost type="primary">VOLTAR</Button></Link>
  </div>
)

export default NotFoundPage;
