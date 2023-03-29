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
    const [news, setNews] = useState({})

    //Popup with selected article
    const showNews = () => { 
        setNews(article);
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
                <div className="gn-country-news-source"> {article.author}</div>
                <div className="gn-country-news-date"> {article.publish_date}</div>
            </div>
        </div>
        <CountryNewsModal news={news} showModal={showModal} setShowModal={setShowModal}/>
    </div>
    )
}

export default CountryNews;