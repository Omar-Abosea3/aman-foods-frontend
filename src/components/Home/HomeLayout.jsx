import React, { useEffect, useState } from 'react'
import HomeSection from './HomeSection/HomeSection'
import OurServicesSection from './OurServicesSection/OurServicesSection'
import AboutUsSection from './AboutUsSection/AboutUsSection'
import ContactUsSection from './ContactUsSection/ContactUsSection';
import OurDatesJourney from './OurDatesJourney/OurDatesJourney';
import OurGellary from './OurGellary/OurGellary';
import OurMissionAndOurVisionSection from './OurMissionAndOurVisionSection/OurMissionAndOurVisionSection';
import axios from 'axios';
export default function HomeLayout({lang}) {
  const [Categories, setCategories] = useState(null);
  const [Slider, setSlider] = useState(null);

  async function getAllCategories(){
    try {
      const {data} = await axios.get(`https://aman-foods-backend.onrender.com/category?lang=${lang}`);
      console.log(data);
      setCategories(data);
    } catch (error) {
      console.log(error);
    }
  };

  async function getHomeSlider(){
    try {
      const {data} = await axios.get(`https://aman-foods-backend.onrender.com/page`);
      setSlider(data.sliders);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(()=>{
    getAllCategories();
    getHomeSlider();
  },[])
  console.log(lang);
  console.log(process.env.REACT_APP_ADMINEMAIL);
  return <>
        <HomeSection homeSlider={Slider?Slider:null} />
        <AboutUsSection lang={lang}/>
        <OurServicesSection lang={lang}/>
        <OurGellary lang={lang} Categories={Categories?Categories:null}/>
        <OurDatesJourney lang={lang} />
        <OurMissionAndOurVisionSection lang={lang}/>
        <ContactUsSection lang={lang}/>
  </>
}
