import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom'

import logoImg from '../../assests/images/logo.svg';
import landingImg from '../../assests/images/landing.svg';

import studyIcon from '../../assests/images/icons/study.svg';
import giveClassesIcon from '../../assests/images/icons/give-classes.svg';
import PurpleHeartIcon from '../../assests/images/icons/purple-heart.svg';

import './styles.css'
import api from '../../services/api';

function Landing() {
  const [totalConnections, setTotalConnections] = useState(0);

  useEffect(() => {
    api.get('connections').then(response =>{
      const { total } = response.data;

      setTotalConnections(total);
    })
  }, [])


  return (
    <div id="page-landing">
      <div id="page-landing-content" className="container">
        <div className="logo-container">
          <img src={logoImg} alt="Proffy"/>
          <h2>Sua plataforma de estudos online.</h2>
        </div>

        <img src={landingImg} alt="Plataforma de estudos" className="hero-image" />

        <div className="buttons-container">
          <Link to="/study" className="study">
            <img src={studyIcon} alt="Estudar"/>
            Estudar
          </Link>

          <Link to="/give-classes" className="give-classes">
            <img src={giveClassesIcon} alt="Dar aulas"/>
            Dar aulas
          </Link>
        </div>

        <span className="total-connections">
          Total de {totalConnections} conexões já realizadas <img src={PurpleHeartIcon} alt="Coração roxo"/>
        </span>
      </div>
    </div>
  );
}

export default Landing;