import axios from 'axios';
import React, { createContext, useState } from 'react';
import $ from 'jquery';
export const appContext = createContext();
export default function AppContextProvider({children}) {
  const [OneCategory, setOneCategory] = useState(null);
  const [HomeSlider, setHomeSlider] = useState(null);
  const [AllCategories, setAllCategories] = useState(null);
  
  async function getAllCategories(lang){
    try {
      const {data} = await axios.get(`https://aman-foods-backend.onrender.com/category?lang=${lang}`);
      console.log(data);
      setAllCategories(data);
    } catch (error) {
      console.log(error);
    }
  }

  async function getOneCategory(id , lang){
    setOneCategory(null);
    try {
      const {data} = await axios.get(`https://aman-foods-backend.onrender.com/category/${id}?lang=${lang}`);
      console.log(data);
      setOneCategory(data);
      console.log(OneCategory);
      
    } catch (error) {
        console.log(error);
    }
  }

  async function getHomeSlider(){
    try {
      const {data} = await axios.get(`https://aman-foods-backend.onrender.com/page`);
      setHomeSlider(data.sliders);
      $('#LoadingScrean').fadeOut(500);
    } catch (error) {
      console.log(error);
    }
  };

  return <appContext.Provider value={{getHomeSlider , getOneCategory , getAllCategories , OneCategory , HomeSlider , AllCategories }}>
    {children}
  </appContext.Provider>
}
