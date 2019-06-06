import * as React from "react";
import "./style.less";
import { Icon } from "antd";
import { IProps } from "../cover";

const gatsby = require("../../images/gatsby-icon.png");

const Footer = ({ language }: IProps) => {
    const develop = language === "pt" ? "Desenvolvido com" : "Develop with"
    return <div className="footer">
        <span className="name">Larissa Varjão</span>
        <div className="gatsby">
            <span className="develope-by">{develop} Gatsby</span>
            <a href="https://www.gatsbyjs.org/" target="_blank">
                <img src={gatsby} className="footer-gatsby" />
            </a>
        </div>
        <div>
            <a href="https://github.com/larissavarjao" target="_blank"><Icon type="github" className="footer-icons" /></a>
            <a href="https://www.linkedin.com/in/larissa-varjão-152932b8/" target="_blank"><Icon type="linkedin" className="footer-icons" /></a>
            <a href="https://facebook.com/larivarjao" target="_blank"><Icon type="facebook" className="footer-icons" /></a>
        </div>
    </div>
}

export default Footer;
