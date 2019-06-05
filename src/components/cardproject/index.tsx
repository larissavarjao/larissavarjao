import * as React from "react";
import "./style.less";
import { Button, Icon } from "antd";

export interface ICardProps {
    title: string;
    url: string;
    image: string;
    github?: string;
}

const CardProject = ({ title, url, image, github }: ICardProps) => (
    <div className="card-project">
        <img src={image} className="card-image" />
        <div className="card-body">
            <h1>{title}</h1>
            <div>
                <a href={url} target="_blank">
                    <Button shape="round" ghost type="primary">VISUALIZAR <Icon type="desktop" /></Button>
                </a>
                {github &&
                    <a href={url} target="_blank" className="card-button-github">
                        <Button shape="round" ghost type="primary">CÓDIGO<Icon type="github" /></Button>
                    </a>}
            </div>
        </div>
    </div>
);

export default CardProject;
