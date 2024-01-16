import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
export default function OurGellary({lang , Categories}) {
    const [file, setfile] = useState(null);
    const handleFileChange = (e) => {
        setfile(e.target.files[0]);
        console.log(e.target.files);

    };
    const handleUpload = async (id) => {;
        const formData = new FormData();
        formData.append('image', file);
        console.log(formData);
        if($(`#email${id}`).val().toString() != process.env.REACT_APP_ADMINEMAIL.toString() || $(`#password${id}`).val().toString() != process.env.REACT_APP_ADMINPASSWORD.toString()){
            console.log(process.env.REACT_APP_ADMINEMAIL , process.env.REACT_APP_ADMINPASSWORD);
            $(`#errMsg${id}`).slideDown(300 , function(){
                setTimeout(() => {
                    $(`#errMsg${id}`).slideUp(300);
                }, 1500);
            })
            return false;
        }
        try {
        $(`#button${id}`).html(`<i class="fa-solid fa-spinner fa-spin-pulse"></i>`);
          const {data} = await axios.put(`https://aman-foods-backend.onrender.com/category/${id}`, formData , {
            headers: {
                'Content-Type': 'multipart/form-data',
            },
          });
          console.log(data);
          $(`#button${id}`).html('Update Photos');
          $(`#sucMsg${id}`).slideDown(300 , function(){
            setTimeout(() => {
                $(`#sucMsg${id}`).slideUp(300);
                window.location.reload();
            }, 1500);
          })
        } catch (error) {
          console.error(error);
          $(`#button${id}`).html('Update Photos');
          $(`#errMsg${id}`).slideDown(300 , function(){
            setTimeout(() => {
                $(`#errMsg${id}`).slideUp(300);
            }, 1500);
          })
        }
    };

    const closeLayer = (id) => {
        $(`#${id}`).hide(300);
    }

    const openLayer = (id) => {
        $(`#${id}`).show(150 , function(){
            $(`#${id}`).css('display' , 'flex');
        });
    }
  return <>
    <section id='OurGallery' className='py-5'>
        <h2 className='text-center text-success mb-5'>{lang == 'en' ? 'Product’s Categories' :'اقسام المنتجات'}</h2>
        <div className="container">
            <div className="row gy-4 justify-content-center">
                {Categories?Categories.ctegories.map(category =><div key={category._id} className="col-lg-3 col-md-4 col-sm-6 col-12">
                    <figure className='mb-0 p-3 bg-white rounded-3 shadow-lg'>
                        <div className='overflow-hidden position-relative'>
                            <img src={category.image.secure_url} className='w-100 rounded-3' alt={category.name} />
                            <div onClick={()=>{openLayer(category._id)}} style={{cursor:'pointer'}} className='position-absolute top-0 end-0 editIcon text-light'><i className="fa-solid fa-ellipsis"></i></div>
                        </div>
                        <figcaption className='p-2 text-center'>
                            <h3><Link to={`/category/${category._id}`} className='link-success '>{category.name}</Link></h3>
                        </figcaption>
                    </figure>
                    <div style={{display:'none' , zIndex:'999999999'}} id={category._id} className='position-fixed top-0 start-0 end-0 bottom-0 bg-dark bg-opacity-50 justify-content-center align-items-center'>
                        <form className='w-75 rounded-3 bg-white p-5 position-relative'>
                            <div style={{display:'none'}} id={`sucMsg${category._id}`} className="alert alert-success">success</div>
                            <div style={{display:'none'}} id={`errMsg${category._id}`} className="alert alert-danger">invalid data</div>
                            <input type="email" id={`email${category._id}`} className='form form-control mb-4' placeholder='*Admin-Email' />
                            <input type="password" id={`password${category._id}`} className='form form-control mb-4' placeholder='*Password' />
                            <input type="file" id={`#imageInput${category._id}`} className='form form-control mb-5' onChange={handleFileChange} />
                            <button type='button' id={`button${category._id}`} onClick={()=>{handleUpload(category._id)}} className='btn btn-dark'>Update Photos</button>
                            <div className='position-absolute top-0 end-0 p-2 text-dark'><i style={{cursor:'pointer'}} onClick={()=>{closeLayer(category._id)}} className='fa-solid fs-2 fa-xmark'></i></div>
                        </form>
                    </div>
                </div>):''}
            </div>
        </div>
    </section>
  </>
}
