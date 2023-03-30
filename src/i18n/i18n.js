import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: {
                translation: {
                    "author": "Author",
                    "close": "Close",
                    "numberOfArticles": "Articles available on https://gnews.io/:",
                    "displayedNumber": "Displayed articles: 10",
                    "source": "Source",  
                    "getLatestNews": "Get the latest news",
                    "selectCountry": "Select a country to get the top headlines",
                    "upToDate": "Up to date news from top publications",
                    "searchWorldwideNews": "The latest worldwide news"
                }
            },
            pl: {
                translation: {
                    "author": "Autor",
                    "close": "Zamknij",
                    "numberOfArticles": "Artykuły dostępne w https://gnews.io/:",
                    "displayedNumber": "Wyświetlane artykuły: 10",
                    "source": "Źródło",
                    "getLatestNews": "Zdobądź najnowsze informacje",
                    "selectCountry": "Wybierz kraj by uzyskać najważniejsze wiadomości",
                    "upToDate": "Zawsze najświeższe newsy",
                    "searchWorldwideNews": "Najnowsze wiadomości z całego świata"
                }
            }
        },
        lng: "pl",
        interpolation: {
            escapeValue: false
        }
    });


