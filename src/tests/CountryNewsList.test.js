import { screen, render, waitFor } from '@testing-library/react';
import { RouterProvider, createMemoryRouter } from "react-router-dom";
import { store } from '../redux/store';
import { Provider } from 'react-redux';
import { fetchNews } from '../utils/newsapi';
import CountryNewsList from '../components/CountryNewsList/CountryNewsList'

test('CountryNewsList gets correct data based on provided mock data passed through loader', async () => {
    const data = {
        totalArticles: 65791,
        articles: [
          {
            title: "Google",
            content: "Google and Microsoft",
            url: "https://www.irishtimes.com/technology/big-tech/2023/03/30/google-says-microsofts-cloud-practices-anti-competitive-slams-deals-with-rivals/",
            image: "https://www.irishtimes.com/resizer/H1Oo2foNWt_qq2TYEb8EjBy_FRk=/1200x630/filters:format(jpg):quality(70)/cloudfront-eu-central-1.images.arcpublishing.com/irishtimes/U6LCSMDTT54B2YAZXFKRY4NRBI.jpg",
            publishedAt: "2023-03-30T07:16:00Z",
            source: {
              name: "The Irish Times",
              url: "https://www.irishtimes.com"
            }
          },
          {
            title: "Exclusive",
            content: "BRUSSELS, March 30 (Reuters)",
            url: "https://www.reuters.com/technology/google-says-microsofts-cloud-practices-anti-competitive-slams-deals-with-rivals-2023-03-30/",
            image: "https://www.reuters.com/resizer/OZ0-tU7GSGXI0hSdQ4djlhTXi7g=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/HFOFE7DSQ5NJVA5OJWP2YB4JPA.jpg",
            publishedAt: "2023-03-30T06:26:40Z",
            source: {
              name: "Reuters",
              url: "https://www.reuters.com"
            }
          }
    
        ]
      }
    const routes = [
        {
          path: "/country/:country",
          element: <CountryNewsList />,
          loader: (() => {return data})
        },
      ];
      const router = createMemoryRouter(routes, {
        initialEntries: ["/", "/country/country"],
        initialIndex: 1,
      });
    render(
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>
    );
    await waitFor(() => { expect(screen.getAllByTestId('country-news-article').length).toBe(2)});

});

test('CountryNewsList gets correct data after fetching an API', async () => {
    const routes = [
        {
          path: "/country/:countrycode",
          loader: (async ({params}) => { 
            return fetchNews(params.countrycode)
          }),
          element: <CountryNewsList />,

        },
      ];
      const router = createMemoryRouter(routes, {
        initialEntries: ["/", "/country/US"],
        initialIndex: 1,
      });
    render(
        <Provider store={store}>
            <RouterProvider router={router}/>
        </Provider>
    );

   
    await waitFor(() => { expect(screen.getAllByTestId('country-news-article').length).toBeGreaterThan(0)});

});