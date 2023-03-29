import { availableInNewsApi } from '../data/countriesList'
const API_KEY = "1f817d4de1c94205839469ce38e47a21";

    
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
