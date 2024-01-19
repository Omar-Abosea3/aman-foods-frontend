import React, { useContext, useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import axios from 'axios';
import $ from 'jquery';
import { appContext } from '../../Context/appContextProvider';

export default function Layout({lang}) {
  const {  getOneCategory , getAllCategories , AllCategories } = useContext(appContext);


  function linkNavigation(e){
        if($($(e.target).attr('to')).offset()){
          let sectionOffsetTop=$($(e.target).attr('to')).offset().top;
          $('html,body').animate({scrollTop:sectionOffsetTop},2000);
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
