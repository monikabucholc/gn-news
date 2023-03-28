import React from 'react';
import { useTranslation } from 'react-i18next';
//Images
import imageMagazine from '../../assets/absolutvision-WYd_PkCa1BY-unsplash.jpg';
import imageGlobe from '../../assets/gael-gaborel-orbisterrae-G_MCcG2YqPQ-unsplash.jpg';
import imageNews from '../../assets/markus-winkler-k_Am9hKISLM-unsplash.jpg';
//Style
import './Dashboard.css';


const Dashboard = () => {
    
    //Handle translation
    const { t } = useTranslation();
    
    //Cards on dashboard
    const cards = [{
            title: t('getLatestNews'),
            img: imageNews
        },
        {
            title: t('selectCountry'),
            img: imageGlobe
        },
        {
            title: t('upToDate'),
            img: imageMagazine
        }
        ];

    return (
        
        <div className="gn-dashboard">
            <h1 className="gn-dashboard-header">{t('searchWorldwideNews')}</h1>
            <div className="gn-dashboard-container">
                {cards.map((element, index) => (
                <div className="gn-dashboard-card" key={index}>
                    <div className="gn-dashboard-image-box">
                        <img className="gn-dashboard-image" alt={element.title} src={element.img}></img>
                    </div>
                    <div className="gn-dashboard-title"> {element.title}</div>
                </div>
                ))}
            </div>
        </div>
    )
}

export default Dashboard;

