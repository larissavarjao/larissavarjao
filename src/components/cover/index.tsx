import * as React from "react";
import "./style.less";
import { Icon, Button } from "antd";
import { Link } from "gatsby";
import { LanguageOptions } from "../../pages";

const developer = require("../../images/developer.png");
const usa = require("../../images/united-states.png");
const brazil = require("../../images/brazil.png");

export interface IProps {
    changeLanguage?: (lang: LanguageOptions) => void;
    language: LanguageOptions;
}

const Cover = ({ changeLanguage, language }: IProps) => {
    const subtitle = language === "pt" ? "Desenho e programo sites, e eu amo o que eu faço." : "Design and code for web, and I love what I do.";

    const curriculum = language === "pt" ? "CURRÍCULO" : "CURRICULUM";

    return <div className="cover">
        <header className="header">
            <div className="social-media-cover">
                <a href="https://github.com/larissavarjao" target="_blank"><Icon type="github" className="cover-icons" /></a>
                <a href="https://www.linkedin.com/in/larissa-varjão-152932b8/" target="_blank"><Icon type="linkedin" className="cover-icons" /></a>
                <a href="https://facebook.com/larivarjao" target="_blank"><Icon type="facebook" className="cover-icons" /></a>
            </div>
            <div className="flags">
                <img src={usa} onClick={() => changeLanguage("en")} />
                <img src={brazil} onClick={() => changeLanguage("pt")} />
            </div>
            <div className="button-cover">
                <Link to="curriculo">
                    <Button shape="round" ghost type="primary">{curriculum}</Button>
                </Link>
            </div>
        </header>
        <h2 className="larissa">Larissa Varjão</h2>
        <h1>Front-End & Back-End Web Developer</h1>
        <h3>{subtitle}</h3>
        <div className="social-media">
            <img src={developer} className="developer" />
        </div>
    </div>
}

export default Cover;
