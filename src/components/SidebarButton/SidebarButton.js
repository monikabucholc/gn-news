import React from 'react';
import { useTranslation } from 'react-i18next';
import { useLocation } from 'react-router-dom';
//Style 
import './SidebarButton.css';

const SidebarButton = ({ country }) => {

    //For handling active link
    const location = useLocation();
    //Translation
    const { i18n } = useTranslation();

    return (
    <div className="gn-sidebar-button"> 
        <img className="gn-sidebar-button-flag" src={country.flag} width="24px" height="16px" alt={country.name}></img>
        <span className={`gn-sidebar-button-name ${location.pathname === `/country/${country.code}` ? 'gn-sidebar-name-active' : null} `}
        > 
            {i18n.language === 'pl' ? country.name_pl : country.name_en}
        </span>
    </div>
    )
}

export default SidebarButton;