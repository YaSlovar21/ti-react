import React from "react";
import { Link } from "react-router-dom";
import './Burton.css';

import burtonImage from '../../images/productiopn_ti_p.png'
import poster1 from '../../images/ti/poster-red.svg';
import poster2 from '../../images/ti/poster-blue.svg';

//

function Burton() {
    return (
      
        <div className="burton header__burton">
          <div className="burton__preamble">
            <h1 className="header__title">Разборные пластинчатые теплообменники</h1>
            <p className="burton__description">Разборные пластинчатые теплообменники, уникальность нашей продукции подтверждена патентами, ее качество гарантируют лучшие материалы и технологии производства</p>
            <Link className="burton__action-link" to="#">Подробнее о компании</Link>
          </div>
          <div className="burton__image-container">
            <img className="burton__image" src={burtonImage} alt="Разборные пластинчатые теплообменники Теплохит"/>
            <figure className="burton__figure-wrapper">
              <figure className="burton__figure">
                <img src={poster1} className="burton__poster" alt="" />
                <img src={poster2} className="burton__poster" alt="" />
              </figure>
            </figure>
          </div>
        </div>
      
    );
}

export default Burton;