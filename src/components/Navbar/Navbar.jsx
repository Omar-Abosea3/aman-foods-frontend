import React from "react";
import { Link } from "react-router-dom";

export default function Navbar({lang , Categories}) {
  const pathName = window.location.pathname;
  const checkPath = ()=> {
    if(pathName.includes('category')){
      setTimeout(() => {
        window.location.reload();
      }, 300);
    }
  }
  return (
    <>
    <div className="bg-white">
      <nav className="navbar navbar-expand-lg bg-light" id="nav1">
        <div className="container">
          <Link className="navbar-brand" to={"/"}>
            <img src={require('../../assets/logo.png')}  loading="lazy"/>
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav m-auto mb-2 mb-lg-0">
          <li className="nav-item">
                <a className="nav-link link-light"  href="#Home">{lang == 'en'?'Home ': 'الرئيسية'}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link link-light" href="#AboutUs">{lang == 'en' ? "About Us" :"عننا"}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link link-light"  href="#OurServices">{lang == 'en' ? "Our Services" :"خدماتنا"}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link link-light" href="#OurGallery">{lang == 'en' ? "Product’s Categories" :"اقسام المنتجات"}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link link-light" href="#OurDatesJourney">{lang == 'en' ? "Our Dates Journey" :"رحلة مواعيدنا"}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link link-light"  href="#OurMissinAndOurVision">{lang == 'en' ? "OurMissin And OurVision" :"مهمتنا و رؤيتنا"}</a>
              </li>
              <li className="nav-item">
                <a className="nav-link link-light" href="#CountactUs">{lang == 'en' ? "Countact Us" :"تواصل معنا"}</a>
              </li>
            </ul>
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <h4 className="nav-link text-dark" >
                  <i className="fa-solid fa-globe"></i>
                </h4>
              </li>
              <li className="nav-item">
                <h4 onClick={()=>{localStorage.setItem('lang' , 'ar'); window.location.reload();}} className="nav-link text-dark">
                  العربية 
                </h4>
              </li>
              <li className="nav-item">
                <h4 onClick={()=>{localStorage.setItem('lang' , 'en'); window.location.reload();}} className="nav-link text-dark">
                  English
                </h4>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <nav className="navbar navbar-expand-lg" id="nav2">
        <div className="container">
          
          <div className="w-100" >
            <ul className="list-unstyled mb-2 mb-lg-0 d-flex justify-content-center align-items-center">
              {Categories? Categories.ctegories.map(category =>
                <li className="nav-item me-lg-5 me-md-5 me-3" key={category._id}>
                  <Link className="nav-link link-light" onClick={checkPath}  to={`/category/${category._id}`}>{category.name}</Link>
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
