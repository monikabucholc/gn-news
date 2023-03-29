import { availableInNewsApi } from '../data/countriesList';

const API_KEY = process.env.REACT_APP_NEWS_API_KEY;

export const fetchNews = async (request) => {
    
    const currentCountry = request.toLowerCase();

    if (availableInNewsApi.includes(currentCountry)) {
    const urlCountry = `https://gnews.io/api/v4/top-headlines?category=general` +
                        `&apikey=${API_KEY}` +
                        `&country=${currentCountry}`

    return fetch(urlCountry)
        .then((response) => response.json())
        .then((data) => {
            return data
        })
        .catch((error) => {
            console.log('NewsAPI '+ error);
            });
    } else {
        return 
    }
} 
