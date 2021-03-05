import React from 'react';
import { Link } from 'react-router-dom';

import backIcon from '../../assests/images/icons/back.svg';
import logoImg from '../../assests/images/logo.svg';

interface PageHeaderProps {
  title: string;
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
  return (
    <header className="page-header">
        <div className="top-bar-container">
          <Link to="/">
            <img src={backIcon} alt="Voltar"/>
          </Link>
          <img src={logoImg} alt="Proffy"/>
        </div>

        <div className="header-content">
          <strong>{props.title}</strong>
        </div>

        {props.children}
      </header>
  );
}

export default PageHeader;