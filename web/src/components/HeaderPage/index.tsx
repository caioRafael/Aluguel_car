import React from 'react';
import { Link } from 'react-router-dom';

import backIcon from "../../assets/Images/icons/back.svg";

import './styles.css';

interface PageHeaderProps{
    goBack:string
    title:string
    titleLink:string
    link:string
}

const Header: React.FC<PageHeaderProps> = ({title, titleLink, link, goBack, children}) => {
    return(
        <header className="header-container">
            <div className="top-bar-container">
                <Link to = {goBack}><img src={backIcon} alt="voltar"/></Link>
                <h1>{title}</h1>
                <div className="button">
                    <Link to={link} >{titleLink}</Link>
                    {children}
                </div>
            </div>
        </header>
    );
}

export default Header;