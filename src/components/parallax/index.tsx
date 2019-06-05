import * as React from "react";
import "./style.less";

interface IProps {
    background: string;
}

const Parallax = ({ background }: IProps) => (
    <div className="parallax" style={{
        background: `url(${background})`
    }}>
    </div>
)

export default Parallax;
