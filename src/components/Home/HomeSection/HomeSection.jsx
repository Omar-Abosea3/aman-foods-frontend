import axios from 'axios';
import React, { useState } from 'react'
import Slider from 'react-slick';
import $ from 'jquery';
export default function HomeSection({homeSlider}) {
    const settings = {
        dots: true,
        arrows:false,
        fade: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        initialSlide: 0,
        autoplay:true,
    };
    const [files, setfiles] = useState(null);
    const handleFileChange = (e) => {
        setfiles(e.target.files);
        console.log(e.target.files);

    };
    const handleUpload = async (id) => {;
        const formData = new FormData();
        for (const file of files) {
          formData.append('slider', file);
        }
        console.log(formData);
        if($(`#email`).val().toString() != process.env.REACT_APP_ADMINEMAIL.toString() || $(`#password`).val().toString() != process.env.REACT_APP_ADMINPASSWORD.toString()){
            console.log(process.env.REACT_APP_ADMINEMAIL , process.env.REACT_APP_ADMINPASSWORD);
            $(`#errMsg`).slideDown(300 , function(){
                setTimeout(() => {
                    $(`#errMsg`).slideUp(300);
                }, 1500);
            })
            return false;
        }
        try {
        $(`#button`).html(`<i class="fa-solid fa-spinner fa-spin-pulse"></i>`);
          const {data} = await axios.patch(`https://aman-foods-backend.onrender.com/page/${id}`, formData , {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
          });
          console.log(data);
          $(`#button`).html('Update Photos');
          $(`#sucMsg`).slideDown(300 , function(){
            setTimeout(() => {
                $(`#sucMsg`).slideUp(300);
                window.location.reload();
            }, 1500);
          })
        } catch (error) {
          console.error(error);
          $(`#button`).html('Update Photos');
          $(`#errMsg`).slideDown(300 , function(){
            setTimeout(() => {
                $(`#errMsg`).slideUp(300);
            }, 1500);
          })
        }
    };
    const closeLayer = () => {
        $(`#editSlider`).hide(300);
    };

    const openLayer = () => {
        $(`#editSlider`).show(150 , function(){
            $(`#editSlider`).css('display' , 'flex');
        });
    }

  return <>
    <section id='Home' className='my-5 container shadow-lg rounded-3 overflow-hidden position-relative'>
    {/* <div onClick={()=>{openLayer()}} style={{cursor:'pointer' , zIndex:'9999999999999'}} className='position-absolute top-0 end-0 editIcon text-light bg-success p-3'><i className="fa-solid fa-ellipsis"></i></div> */}
        <Slider {...settings}>
          {homeSlider?homeSlider[0].images.map((image , index) => <div key={index}>
            <img src={image.secure_url} className='w-100' alt="slider1" loading='lazy' />
          </div>):''}
        </Slider>
        <div style={{display:'none' , zIndex:'999999999'}} id={`editSlider`} className='position-fixed top-0 start-0 end-0 bottom-0 bg-dark bg-opacity-50 justify-content-center align-items-center'>
                        <form className='w-75 rounded-3 bg-white p-5 position-relative'>
                            <div style={{display:'none'}} id={`sucMsg`} className="alert alert-success">success</div>
                            <div style={{display:'none'}} id={`errMsg`} className="alert alert-danger">invalid data</div>
                            <input type="email" id={`email`} className='form form-control mb-4' placeholder='*Admin-Email' />
                            <input type="password" id={`password`} className='form form-control mb-4' placeholder='*Password' />
                            <input type="file" multiple id={`#imageInput`} className='form form-control mb-5' onChange={handleFileChange} />
                            <button type='button' id={`button`} onClick={()=>{handleUpload(homeSlider[0]._id)}} className='btn btn-dark'>Update Photos</button>
                            <div className='position-absolute top-0 end-0 p-2 text-dark'><i style={{cursor:'pointer'}} onClick={()=>{closeLayer()}} className='fa-solid fs-2 fa-xmark'></i></div>
                        </form>
        </div>
    </section>
  </>
}
