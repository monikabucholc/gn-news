import React, { useState, useEffect } from "react";
import { useTranslation } from 'react-i18next';
import { useSelector } from 'react-redux';
//Style
import './Footer.css'

const Footer = () => {
    //States
    const [time, setTime] = useState(new Date());
    const articleNumber = useSelector(state => state.articleNumber.number);
    
    //Handle translation
    const { t } = useTranslation();
    
    //Clock
    useEffect(() => {
        const interval = setInterval(() => {
          setTime(new Date());
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
    <div className="gn-footer">
        <div className="gn-footer-container">
            <div> {t('numberOfArticles')} {articleNumber}</div>
            <div> {time.toLocaleTimeString()}</div>
        </div>
    </div>
    )
}

export default Footer;