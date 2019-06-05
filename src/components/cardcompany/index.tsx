import * as React from "react";
import "./style.less";

export interface ICompanyCardProps {
    title: string;
    description: string;
    logo: string;
    link: string;
}

const CompanyCard = ({ title, description, logo, link }: ICompanyCardProps) => (
    <div className="company-card">
        <div>
            <div className="company-header">
                <img src={logo} className="company-logo" />
                <h3>{title}</h3>
            </div>
            <div className="company-body">
                <p>{description}</p>
            </div>
        </div>
        <a href={link} target="_blank" className="company-link">{link.slice(8)}</a>
    </div>
)

export default CompanyCard;
