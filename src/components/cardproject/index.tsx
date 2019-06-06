import * as React from "react";
import "./style.less";
import { Button, Icon } from "antd";
import { LanguageOptions } from "../../pages";

export interface ICardProps {
    title: string;
    url: string;
    image: string;
    github?: string;
}

interface ILanguageProps {
    language: LanguageOptions;
}

type IProps = ICardProps & ILanguageProps;

const CardProject = ({ title, url, image, github, language }: IProps) => {
    const view = language === "pt" ? "VISUALIZAR" : "VIEW";
    const code = language === "pt" ? "CÓDIGO" : "CODE";

    return <div className="card-project">
        <img src={image} className="card-image" />
        <div className="card-body">
            <h1>{title}</h1>
            <div>
                <a href={url} target="_blank">
                    <Button shape="round" ghost type="primary">{view} <Icon type="desktop" /></Button>
                </a>
                {github &&
                    <a href={url} target="_blank" className="card-button-github">
                        <Button shape="round" ghost type="primary">{code} <Icon type="github" /></Button>
                    </a>}
            </div>
        </div>
    </div>;
}

export default CardProject;
