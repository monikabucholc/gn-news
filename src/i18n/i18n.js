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
                    "searchWorldwideNews": "The latest worldwide news",
                    "feedbackHard": "The tests were the biggest challenge for me, as I had no prior experience with them. Eventually, I managed to solve my problems and all the included tests work fine.",
                    "feedbackEasy": "Creating the rest of functionalities was fun for me, and I didn't encounter any major difficulties. I'm glad that I had the opportunity to get to know new libraries or current versions of the tools, that I have been already familiar with, such as React Router. The UI design was the most enjoyable part of the project for me. Currently I focus on developing my software development skills, but UX and UI are always a pleasure to me"
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
                    "searchWorldwideNews": "Najnowsze wiadomości z całego świata",
                    "feedbackHard": "Największą trudność w zadaniu sprawiły mi testy, ponieważ dotychczas nie miałam z nimi doświadczenia. Ostatecznie udało mi się rozwiązać wszystkie problemy i załączone testy działają poprawnie.",
                    "feedbackEasy": "Tworzenie pozostałych funkcjonalności było dla mnie fajną zabawą i nie napotkałam w tym zakresie większych trudności. Cieszę się, że mogłam poznać nowe biblioteki lub aktualne wersje znanych mi narzędzi jak React Router. Największą frajdę sprawił mi projekt UI aplikacji. Obecnie skupiam się na rozwoju programistycznym, ale projektowanie użytkowe i graficzne zawsze sprawia mi przyjemność."
                }
            }
        },
        lng: "pl",
        interpolation: {
            escapeValue: false
        }
    });


