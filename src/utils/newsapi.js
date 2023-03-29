import { availableInNewsApi } from '../data/countriesList';

const API_KEY = process.env.REACT_APP_NEWS_API_KEY;

export const fetchNews = async (request) => {
    
    const randomNumber = () => { return Math.floor(Math.random() * 10) + 20}
    let articleNumber = randomNumber();
    const currentCountry = request.toLowerCase();
    
    if (availableInNewsApi.includes(currentCountry)) {
    const urlCountry = 'https://api.worldnewsapi.com/search-news?' +
                        `source-countries=${currentCountry}` +
                        `&sort=publish-date` +
                        `&sort-direction=DESC` +
                        `&number=${articleNumber}` +
                        `&api-key=${API_KEY}`
    const req = new Request(urlCountry);
    return fetch(req)
        .then((response) => response.json())
        .then((data) => {
            console.log(data)
            return data
        })
        .catch((error) => console.log(error));
    } else {
        return
    }
} 
