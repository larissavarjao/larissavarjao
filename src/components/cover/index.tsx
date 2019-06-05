import * as React from "react";
import "./style.less";

const developer = require("../../images/developer.png");

const Cover = () => (
    <div className="cover">
        <h1>Front End & Back End Web Developer</h1>
        <h3>Desenho e programo sites, e eu <span>amo</span> o que eu faço.</h3>
        <div className="social-media">
            <img src={developer} className="developer" />
        </div>
    </div>
)

export default Cover;
