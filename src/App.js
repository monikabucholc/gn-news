import React, { useState } from 'react';
import { createBrowserRouter, createRoutesFromElements, Route, Outlet, RouterProvider } from 'react-router-dom';
//Components
import Navbar from './components/Navbar/Navbar';
import Sidebar from './components/Sidebar/Sidebar';
import Dashboard from './components/Dashboard/Dashboard';
import CountryNewsList from './components/CountryNewsList/CountryNewsList'
import Footer from './components/Footer/Footer';
import ErrorBoundary from './components/ErrorBoundary/ErrorBoundary'
//News API
import { fetchNews } from './utils/newsapi';

function App() {
  const Root = () => {
    const [showMenu, setShowMenu] = useState(false);
    return(
      <div>
        <Navbar showMenu={showMenu} setShowMenu={setShowMenu}/>
        <div className="gn-app-content">
          <Sidebar showMenu={showMenu} setShowMenu={setShowMenu}/>
          <Outlet />
        </div>
        <Footer />
      </div>
    )
  };

  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path='/' element={<Root/>} errorElement={<ErrorBoundary/>}>
        <Route index element={<Dashboard/>}/>
        <Route 
          path='/country/:countrycode' 
          loader={async ({ params }) => { 
            return fetchNews(params.countrycode)
          }}
          element={<CountryNewsList />}
          errorElement={<ErrorBoundary/>}/>
      </Route>
    )
  );

  return (
    <div className="gn-app">
      <RouterProvider router={router} />
    </div>
  )
}

export default App
