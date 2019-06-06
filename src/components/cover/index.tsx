import * as React from "react";
import "./style.less";
import { Icon, Button } from "antd";
import { Link } from "gatsby";

const developer = require("../../images/developer.png");

const Cover = () => (
    <div className="cover">
        <header className="header">
            <div className="social-media-cover">
                <a href="https://github.com/larissavarjao" target="_blank"><Icon type="github" className="cover-icons" /></a>
                <a href="https://www.linkedin.com/in/larissa-varjão-152932b8/" target="_blank"><Icon type="linkedin" className="cover-icons" /></a>
                <a href="https://facebook.com/larivarjao" target="_blank"><Icon type="facebook" className="cover-icons" /></a>
            </div>
            <h2 className="larissa">Larissa Varjão</h2>
            <div className="buttons-cover">
                <Link to="curriculo">
                    <Button shape="round" ghost type="primary">Currículo</Button>
                </Link>
            </div>
        </header>
        <h1>Front-End & Back-End Web Developer</h1>
        <h3>Desenho e programo sites, e eu <span>amo</span> o que eu faço.</h3>
        <div className="social-media">
            <img src={developer} className="developer" />
        </div>
    </div>
)

export default Cover;
