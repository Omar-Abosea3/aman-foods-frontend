import axios from 'axios';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import $ from 'jquery';
export default function OurGellary({lang , Categories}) {
  return <>
    <section id='OurGallery' className='py-5'>
        <h2 className='text-center text-success mb-5'>{lang == 'en' ? 'Product’s Categories' :'اقسام المنتجات'}</h2>
        <div className="container">
            <div className="row gy-4 justify-content-center">
                {Categories?Categories.ctegories.map(category =><div key={category._id} className="col-3">
                    <figure className='mb-0 p-3 bg-white rounded-3 shadow-lg'>
                        <div className='overflow-hidden position-relative'>
                            <img src={category.image.secure_url} className='w-100 rounded-3' alt={category.name} />
                        </div>
                        <figcaption className='p-2 text-center'>
                            <h3><Link to={`/category/${category._id}`} className='link-success '>{category.name}</Link></h3>
                        </figcaption>
                    </figure>
                </div>):''}
            </div>
        </div>
    </section>
  </>
}
