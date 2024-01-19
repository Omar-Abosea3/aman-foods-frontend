import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({lang , Categories , linkNavigation }) {

 
  return (
    <>
    <div className="bg-white">
      <nav className="navbar-expand bg-light" id="nav1">
        <div className="container d-flex justify-content-between align-items-center">
          <Link className="w-25" to={"/"}>
            <img src={require('../../assets/logo.png')}  loading="lazy"/>
          </Link>
          <div className="d-flex flex-wrap" >
          <ul className="list-unstyled mt-3 d-flex align-items-center w-100 justify-content-end m-auto mb-4 flex-nowrap">
              <li className="nav-item px-2">
               <h6 className="nav-link link-light" onClick={(e) => {linkNavigation(e)}}  to="#Home">{lang == 'en'?'Home ': 'الرئيسية'}</h6>
              </li>
              <li className="nav-item px-2">
                <h6 className="nav-link link-light" onClick={(e) => {linkNavigation(e)}} to="#AboutUs">{lang == 'en' ? "About Us" :"عننا"}</h6>
              </li>
              <li className="nav-item px-2">
                <h6 className="nav-link link-light" onClick={(e) => {linkNavigation(e)}}  to="#OurServices">{lang == 'en' ? "Services" :"خدماتنا"}</h6>
              </li>
              <li className="nav-item px-2">
                <h6 className="nav-link link-light" onClick={(e) => {linkNavigation(e)}} to="#OurGallery">{lang == 'en' ? "Product’s Categories" :"اقسام المنتجات"}</h6>
              </li>
              <li className="nav-item px-2">
                <h6 className="nav-link link-light" onClick={(e) => {linkNavigation(e)}} to="#OurDatesJourney">{lang == 'en' ? "Dates Journey" :"رحلتنا مع التمور"}</h6>
              </li>
              <li className="nav-item px-2">
                <h6 className="nav-link link-light" onClick={(e) => {linkNavigation(e)}}  to="#OurMissinAndOurVision">{lang == 'en' ? "Missin And Vision" :"مهمتنا و رؤيتنا"}</h6>
              </li>
              <li className="nav-item px-2">
                <h6 className="nav-link link-light" onClick={(e) => {linkNavigation(e)}} to="#CountactUs">{lang == 'en' ? "Countact Us" :"تواصل معنا"}</h6>
              </li>
              <li className="nav-item px-2">
                <h6><Link className="nav-link link-light mt-0"  to={"/checkadmin"}>{lang == 'en' ? "Admin Page" :" صفحة الادمن"}</Link></h6>
              </li>
            </ul>
            <ul className="navbar-nav w-100 ms-auto justify-content-end mb-2 ">
              <li className="nav-item px-2">
                <h4 className="nav-link text-light" >
                  <i className="fa-solid fa-globe"></i>
                </h4>
              </li>
              <li className="nav-item px-2">
                <h4 onClick={()=>{localStorage.setItem('lang' , 'ar'); window.location.reload();}} className="nav-link text-light">
                  العربية 
                </h4>
              </li>
              <li className="nav-item px-2">
                <h4 onClick={()=>{localStorage.setItem('lang' , 'en'); window.location.reload();}} className="nav-link text-light">
                  English
                </h4>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <nav className="navbar navbar-expand-lg" id="nav2">
        <div className="container">
          
          <div className="w-100 px-3" >
            <ul className="list-unstyled mb-2 mb-lg-0 categoryLinksContainer d-flex justify-content-around align-items-center">
              {Categories? Categories.ctegories.map(category =>
                <li className="nav-item me-lg-5 me-md-5" key={category._id}>
                  <Link className="nav-link link-dark categoryLinks"  to={`/category/${category._id}`}  >{category.name}</Link>
                </li>
              ):''}
            </ul>
          </div>
        </div>
      </nav>
    </div>
    </>
  );
}
