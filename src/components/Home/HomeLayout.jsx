import React, { useContext, useEffect } from 'react'
import HomeSection from './HomeSection/HomeSection'
import OurServicesSection from './OurServicesSection/OurServicesSection'
import AboutUsSection from './AboutUsSection/AboutUsSection'
import ContactUsSection from './ContactUsSection/ContactUsSection';
import OurDatesJourney from './OurDatesJourney/OurDatesJourney';
import OurGellary from './OurGellary/OurGellary';
import OurMissionAndOurVisionSection from './OurMissionAndOurVisionSection/OurMissionAndOurVisionSection';
import LoadingScrean from '../Loading/LoadingScrean';
import { appContext } from '../../Context/appContextProvider';
import { Helmet } from 'react-helmet';
export default function HomeLayout({lang}) {
  const {getHomeSlider , getAllCategories , HomeSlider , AllCategories} = useContext(appContext);


  useEffect(()=>{
    getAllCategories(lang);
    getHomeSlider();
  },[])
  console.log(lang);
  console.log(process.env.REACT_APP_ADMINEMAIL);
  return <>
        <Helmet>
          <title>Home</title>
        </Helmet>
        <LoadingScrean/>
        <HomeSection homeSlider={HomeSlider?HomeSlider:null} />
        <AboutUsSection lang={lang}/>
        <OurServicesSection lang={lang}/>
        <OurGellary lang={lang} Categories={AllCategories?AllCategories:null}/>
        <OurDatesJourney lang={lang} />
        <OurMissionAndOurVisionSection lang={lang}/>
        <ContactUsSection lang={lang}/>
  </>
}
