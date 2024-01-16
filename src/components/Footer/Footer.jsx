import React from 'react'
import { Link } from 'react-router-dom'

export default function Footer({lang , Categories , linkNavigation}) {
  const pathName = window.location.pathname;
  const checkPath = ()=> {
    if(pathName.includes('category')){
      setTimeout(() => {
        window.location.reload();
      }, 300);
    }
  }
  return <>
        <footer id='footer'>
            <div className="container-fluid py-5">
                <div className="row gy-4">
                  <div className="col-lg-8 col-md-12 col-12 px-lg-5">
                    <div className='p-3 text-center'>
                        <h3>{lang == 'en' ? 'Contact information' : 'معلومات التواصل'}</h3>
                        {lang == 'en' ? <>
                          <div className="d-flex align-items-center mb-2">
                            <div className='footerIcons'><i className="fa-solid fa-phone"></i></div>
                            <div className='pt-3 ps-2'><p><span className='fw-bold'>Mobile / WhatsApp :</span> +966561283823</p></div>
                          </div>
                          <div className="d-flex align-items-center mb-2">
                            <div className='footerIcons'><i className="fa-solid fa-envelope"></i></div>
                            <div className='pt-3 ps-2'><p><span className='fw-bold'>Email :</span> info@amanfood-ksa.com</p></div>
                          </div>                          
                          <div className="d-flex align-items-center mb-2">
                            <div className='footerIcons'><i className="fa-solid fa-location-dot"></i></div>
                            <div className='pt-3 ps-2 text-start'><p><span className='fw-bold'>Address :</span> King Abdulaziz Rd, Al Salimiyyah, Buraydah 52345, Saudi Arabia .</p></div>
                          </div>
                        </> : <>
                          <div className="d-flex align-items-center flex-row-reverse justify-content-end text-end  mb-2">
                              <div className='footerIcons'><i className="fa-solid fa-phone"></i></div>
                              <div className='pt-3 pe-2 ms-auto'><p>+966561283823 <span className='fw-bold'> :الواتساب / الموبايل</span></p></div>
                            </div>
                            <div className="d-flex align-items-center flex-row-reverse justify-content-end text-end mb-2">
                              <div className='footerIcons'><i className="fa-solid fa-envelope"></i></div>
                              <div className='pt-3 pe-2 ms-auto'><p> info@amanfood-ksa.com <span className='fw-bold'> :البريد الالكتروني</span></p></div>
                            </div>                          
                            <div className="d-flex align-items-center flex-row-reverse justify-content-end text-end mb-2">
                              <div className='footerIcons'><i className="fa-solid fa-location-dot"></i></div>
                              <div className='pt-3 pe-2 ms-auto'><p>. <span className='fw-bold'> العنوان: </span>طريق الملك عبد العزيز، حي السالمية، بريدة 52345، المملكة العربية السعودية </p></div>
                            </div>
                        </>}
                        <div className='w-100'>
                        <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13712.25958367301!2d31.021506!3d30.772758!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xeef138cd31cb3e41!2sInternational%20for%20Trading%20and%20Import!5e0!3m2!1sen!2seg!4v1644310000063!5m2!1sen!2seg"  style={{border: '0px', width: '350px', height: '200.917px'}} allowFullScreen="" loading="lazy" data-origwidth="600" data-origheight="250"></iframe>
                        </div>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-6 col-12">
                    <div id='footerMainLinks' className='p-3 text-center'>
                        <h3>{lang == 'en' ? 'MainLinks' : 'الاجزاء الرئيسية'}</h3>
                        <h6><a className="nav-link" onClick={(e) => {linkNavigation(e)}} to="#Home">{lang == 'en'?'Home ': 'الرئيسية'}</a></h6>
                        <h6><a className="nav-link" onClick={(e) => {linkNavigation(e)}} to="#AboutUs">{lang == 'en' ? "About Us" :"عننا"}</a></h6>
                        <h6><a className="nav-link" onClick={(e) => {linkNavigation(e)}} to="#OurServices">{lang == 'en' ? "Our Services" :"خدماتنا"}</a></h6>
                        <h6><a className="nav-link" onClick={(e) => {linkNavigation(e)}} to="#OurGallery">{lang == 'en' ? "Our Gallery" :"معرضنا"}</a></h6>
                        <h6><a className="nav-link" onClick={(e) => {linkNavigation(e)}} to="#OurDatesJourney">{lang == 'en' ? "Our Dates Journey" :"رحلة مواعيدنا"}</a></h6>
                        <h6><a className="nav-link" onClick={(e) => {linkNavigation(e)}} to="#OurMissinAndOurVision">{lang == 'en' ? "OurMissin And OurVision" :"مهمتنا و رؤيتنا"}</a></h6>
                        <h6><a className="nav-link" onClick={(e) => {linkNavigation(e)}} to="#CountactUs">{lang == 'en' ? "Countact Us" :"تواصل معنا"}</a></h6>
                    </div>
                  </div>
                  <div className="col-lg-2 col-md-6 col-12">
                    <div className='p-3 text-center'>
                        <h3>{lang == 'en' ? 'Categories' : 'صفحات المنتجات'}</h3>
                        {Categories?Categories.ctegories.map(category => <h6 key={category._id}><Link className="nav-link" onClick={checkPath} to={`/category/${category._id}`}>{category.name}</Link></h6>):''}                       
                    </div>
                  </div>

                </div>
            </div>
        </footer>
  </>
}
