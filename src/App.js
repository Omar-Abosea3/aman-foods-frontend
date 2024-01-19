import { Navigate, RouterProvider, createHashRouter } from 'react-router-dom';
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
import AdminAuth from './components/Admin/AdminAuth';
import { jwtDecode } from 'jwt-decode';
import Dashboard from './components/Admin/Dashboard';

function App() {

  function ProtectedRoute({children}){
    const userToken = localStorage.getItem('adminToken');
    if(!userToken){
      return <Navigate to={'/checkadmin'}/>
    }else{
      const decodedData = jwtDecode(userToken);
      if(decodedData.email.toString() == process.env.REACT_APP_ADMINEMAIL.toString()){
        return <>
        {children}
      </>
      }else{
        return <Navigate to={'/checkadmin'}/>
      }
    }
  }
  const lang = localStorage.getItem('lang') || 'en';
  console.log(lang);
  const router = createHashRouter([
    {path:'' , element:<AppContextProvider><Layout lang={lang}/></AppContextProvider> , children:[
      {path:'' , element:<AppContextProvider><HomeLayout lang={lang} /> </AppContextProvider>},
      {path:'/home' , element:<AppContextProvider> <HomeLayout lang={lang} /></AppContextProvider>},
      {path:'/category/:id', element:<AppContextProvider><Category_Products lang={lang}/></AppContextProvider>},
      {path:'/checkadmin', element:<AdminAuth lang={lang}/>},
      {path:'/dashboard', element:<ProtectedRoute><AppContextProvider><Dashboard/></AppContextProvider></ProtectedRoute>},
      {path:'*', element:<div className='vh-100 d-flex justify-content-center align-items-center'>
        <h2 className='fs-1 fw-bolder text-black'>4 O 4 Not Founded Page !</h2>
      </div>},
    ]}
  ])
  return <>
    <RouterProvider router={router}/>
  </>;
}

export default App;
