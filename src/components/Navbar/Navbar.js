import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
//Slice
import { setMode } from '../../redux/viewModeSlice';
//Components 
import NavbarPopup from '../NavbarPopup/NavbarPopup';
//Icons
import iconGrid from '../../assets/grid_view_FILL0_wght400_GRAD0_opsz48.svg';
import iconList from '../../assets/view_agenda_FILL0_wght400_GRAD0_opsz48.svg';
import iconComment from '../../assets/comment_FILL0_wght400_GRAD0_opsz48.svg';
import iconHamburger from '../../assets/menu_FILL0_wght400_GRAD0_opsz48.svg'
//Style 
import './Navbar.css';


const Navbar = ({ showMenu, setShowMenu }) => {
    //States
    const viewMode = useSelector(state => state.viewMode.mode);
    const [showPop, setShowPop] = useState(false);
    const dispatch = useDispatch();

    //Hamburger menu button for mobile
    const showMenuHandler = () => {
        setShowMenu(!showMenu);
    }

    //View mode grid vs list
    const handleViewMode = () => {
        if (viewMode === 'list') {
            dispatch(setMode('grid'))
        } else {
            dispatch(setMode('list'))
        }
    }

    //Handle language change
    const { i18n } = useTranslation();
    const changeLanguageHandler = () => {
        if (i18n.language === 'pl') {
            i18n.changeLanguage('en');
        } else {
            i18n.changeLanguage('pl');
        }   
    }
    
    return (
    <nav className="gn-navbar">
        <div className="gn-navbar-container">
            <div className="gn-navbar-container-logo">
                <Link className="gn-navbar-logo" to='/'>GN NEWS</Link>
                <button className="gn-navbar-i-button gn-navbar-show-menu" onClick={showMenuHandler}>
                    <img src={iconHamburger} width="40px" alt="Hamburger menu icon"></img>
                </button>
            </div>
            <div className="gn-navbar-buttons">
                <button className="gn-navbar-language" onClick={changeLanguageHandler}>{i18n.language === 'pl' ? 'EN' : 'PL'}</button>
                <button className="gn-navbar-i-button" onClick={handleViewMode}>
                    <img src={viewMode === 'list' ? iconGrid : iconList } width="40px" alt="Type of view mode icon"></img>
                </button>
                <button className="gn-navbar-i-button" onClick={() => setShowPop(!showPop)}>
                    <img src={iconComment} width="40px" alt="Feedback about application"></img>
                </button>
            </div>
        </div>
        <NavbarPopup showPop={showPop} setShowPop={setShowPop}/>
    </nav>
    )
}

export default Navbar;

