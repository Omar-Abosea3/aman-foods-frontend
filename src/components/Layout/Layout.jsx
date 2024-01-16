import React, { useEffect, useState } from 'react';
import Navbar from '../Navbar/Navbar';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import axios from 'axios';
import $ from 'jquery';

export default function Layout({lang}) {
  const [Categories, setCategories] = useState(null);

  async function getAllCategories(){
    try {
      const {data} = await axios.get(`https://aman-foods-backend.onrender.com/category?lang=${lang}`);
      console.log(data);
      setCategories(data);
    } catch (error) {
      console.log(error);
    }
  }

  function linkNavigation(e){
      let sectionOffsetTop=$($(e.target).attr('to')).offset().top;
      $('html,body').animate({scrollTop:sectionOffsetTop},2000);
  }
  useEffect(()=>{
    getAllCategories();
  },[])
  return <>
    <Navbar lang={lang} Categories={Categories?Categories:null} linkNavigation={linkNavigation}/>
    <Outlet/>
    <Footer lang={lang} Categories={Categories?Categories:null} linkNavigation={linkNavigation}/>
  </>
}
