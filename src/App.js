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

function App() {
  const lang = localStorage.getItem('lang') || 'en';
  console.log(lang);
  const router = createHashRouter([
    {path:'' , element:<Layout lang={lang}/> , children:[
      {path:'' , element:<HomeLayout lang={lang} />},
      {path:'/home' , element:<HomeLayout lang={lang} />},
      {path:'/category/:id', element:<Category_Products lang={lang}/>}
    ]}
  ])
  return <>
    <RouterProvider router={router}/>
  </>;
}

export default App;
