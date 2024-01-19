import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet, useNavigate } from 'react-router-dom';
import Footer from '../Footer/Footer';
import $ from 'jquery';
import { appContext } from '../../Context/appContextProvider';

export default function Layout({lang}) {
  const {  getOneCategory , getAllCategories , AllCategories } = useContext(appContext);
  const navigate = useNavigate();

  function linkNavigation(e){
        if($($(e.target).attr('to')).offset()){
          let sectionOffsetTop=$($(e.target).attr('to')).offset().top;
          $('html,body').animate({scrollTop:sectionOffsetTop},2000);
        }else{
          navigate('/');
          setTimeout(() => {
            if($($(e.target).attr('to')).offset()){
              let sectionOffsetTop=$($(e.target).attr('to')).offset().top;
              $('html,body').animate({scrollTop:sectionOffsetTop},2000);
            }
          }, 1000);
        }
    }

  useEffect(()=>{
    getAllCategories(lang);
  },[])
  return <>
    <Navbar lang={lang} getOneCategory={getOneCategory} Categories={AllCategories?AllCategories:null} linkNavigation={linkNavigation}/>
    <Outlet/>
    <Footer lang={lang} getOneCategory={getOneCategory} Categories={AllCategories?AllCategories:null} linkNavigation={linkNavigation}/>
  </>
}
