import React from 'react';
import '../../i18n/i18n'
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
//Components
import SidebarButton from '../SidebarButton/SidebarButton';
//Data
import { countriesList } from '../../data/countriesList';
//Style 
import './Sidebar.css';

const Sidebar = ({ showMenu, setShowMenu }) => {
    //Handle translation
    const { t } = useTranslation();
    
    //Handle visibility for mobile
    const showMenuHandler = () => {
        if (window.innerWidth <= 900) {
            setShowMenu(!showMenu);
        }
    }

    return (
        <aside className="gn-sidebar" style={ showMenu ? {display: "flex"} : null }>
            <div className="gn-sidebar-container">
                <div className="gn-sidebar-category" >{t('source')}</div>
                <ul className="gn-sidebar-list"> 
                    {countriesList.map((country) => (
                        <li key={`list-${country.code}`}>
                            <Link 
                                to={`/country/${country.code}`} 
                                key={country.code}
                                onClick={showMenuHandler}
                                className="gn-sidebar-link"
                            >
                                <SidebarButton value={country.code.toUpperCase()} country={country} />
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>
    </aside>
    )                 
}

export default Sidebar;