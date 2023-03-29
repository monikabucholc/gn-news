import { availableInNewsApi } from '../data/countriesList'
const API_KEY = process.env.REACT_APP_NEWS_API_KEY;

    
export const fetchNews = async (request) => {
    const currentCountry = request.toLowerCase();
    if (availableInNewsApi.includes(currentCountry)) {
    const urlCountry = 'https://newsapi.org/v2/top-headlines?' +
                        `country=${currentCountry}&` +
                        `apiKey=${API_KEY}`;
    const req = new Request(urlCountry);
    return fetch(req)
        .then((response) => response.json())
        .then((data) => {
            return data
        })
        .catch((error) => console.log(error));
    } else {
        return
    }
} 