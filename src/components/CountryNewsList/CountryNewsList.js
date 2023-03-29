import React, { useEffect } from 'react';
import { useLoaderData } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
//Slice
import { setNumber } from '../../redux/articleNumberSlice';
//Components
import CountryNews from '../CountryNews/CountryNews'
//Style 
import './CountryNewsList.css'

const CountryNewsList = () => {
    //States
    const viewMode = useSelector(state => state.viewMode.mode);
    const dispatch = useDispatch();

    //Gets data from react-router loader --> function fetching API
    const data = useLoaderData();

    //Gets number of article to pass it to Footer 
    useEffect(() => {
        dispatch(setNumber(data.totalResults))
        
    }, [data])

    return (
        <div className={`gn-country-newslist ${viewMode === 'list' ? "gn-country-newslist-list" : "gn-country-newslist-grid"}`}>
            {data && data.articles && data.articles.map((article, index) => (
                <CountryNews 
                    key={index}
                    article={article}
                    viewMode={viewMode}
                />
            ))} 
        </div>
    )
}

export default CountryNewsList;