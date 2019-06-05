import * as React from "react";
import "./style.less";
import { GitHub } from "../svgs/github";
import { Facebook } from "../svgs/facebook";
import { Linkedin } from "../svgs/linkedin";

const Cover = () => (
    <div className="cover">
        <div className="cover-card">
            <h1><span className="title-bold">Fullstack</span> Web Developer</h1>
            <div className="social-media">
                <a href="https://www.linkedin.com/in/larissa-varj%C3%A3o-152932b8/" target="_blank">
                    <Linkedin />
                </a>
                <a href="https://www.facebook.com/larivarjao" target="_blank">
                    <Facebook />
                </a>
                <a href="https://github.com/larissavarjao" target="_blank">
                    <GitHub />
                </a>
            </div>
        </div>
    </div>
)

export default Cover;
