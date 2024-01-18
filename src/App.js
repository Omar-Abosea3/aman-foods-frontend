import { RouterProvider, createBrowserRouter, createHashRouter } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './App.css';
import './style.css';
import Layout from './components/Layout/Layout';
import HomeLayout from './components/Home/HomeLayout';
import Category_Products from './components/Category/Category_Products';
import AppContextProvider from './Context/appContextProvider';

function App() {
  const lang = localStorage.getItem('lang') || 'en';
  console.log(lang);
  const router = createHashRouter([
    {path:'' , element:<AppContextProvider><Layout lang={lang}/></AppContextProvider> , children:[
      {path:'' , element:<AppContextProvider><HomeLayout lang={lang} /> </AppContextProvider>},
      {path:'/home' , element:<AppContextProvider> <HomeLayout lang={lang} /></AppContextProvider>},
      {path:'/category/:id', element:<AppContextProvider><Category_Products lang={lang}/></AppContextProvider>}
    ]}
  ])
  return <>
    <RouterProvider router={router}/>
  </>;
}

export default App;
