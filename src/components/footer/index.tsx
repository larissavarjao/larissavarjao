import * as React from "react";
import "./style.less";
import { Icon } from "antd";

const gatsby = require("../../images/gatsby-icon.png");

const Footer = () => (
    <div className="footer">
        <span className="name">Larissa Varjão</span>
        <div>
            <span className="develope-by">Desenvolvido com Gatsby</span>
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
)

export default Footer;
