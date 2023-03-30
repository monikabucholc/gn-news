import React, { useState } from 'react';
//Components
import CountryNewsModal from '../CountryNewsModal/CountryNewsModal';
//Default Image
import defaultImage from '../../assets/absolutvision-WYd_PkCa1BY-unsplash.jpg';
//Style
import './CountryNews.css'

const CountryNews = ({ viewMode, article }) => {
    //States
    const [showModal, setShowModal] = useState(false);

    //Popup with selected article
    const showNews = () => { 
        setShowModal(!showModal);
    }
    
    return (
    <div>
        <div onClick={() => showNews()}  className={viewMode === 'list' ? "gn-country-news-container-list" : "gn-country-news-container-grid"} >
            <div className="gn-country-news-image-box" style={viewMode === 'list' ? {display: "none"} : null}>
                <img className="gn-country-news-image" alt={article.title} src={article.image ? article.image : defaultImage}></img>
            </div>
            <div className="gn-country-news-title"> {article.title}</div>
            <div className="gn-country-news-details">
                <div className="gn-country-news-source"> {article.source.name}</div>
                <div className="gn-country-news-date"> {article.publishedAt.replace("T", " ").replace("Z", "")}</div>
            </div>
        </div>
        <CountryNewsModal article={article} showModal={showModal} setShowModal={setShowModal}/>
    </div>
    )
}

export default CountryNews;