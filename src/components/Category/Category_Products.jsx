import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';

export default function Category_Products({lang}) {
    const [Category, setCategory] = useState(null);
    const {id} = useParams();
    async function getThisCategory(id){
        try {
            const {data} = await axios.get(`https://aman-foods-backend.onrender.com/category/${id}?lang=${lang}`);
            console.log(data);
            setCategory(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        getThisCategory(id);
    },[]);
  return <>
        {!Category?'':<div id='specificCategory' className='py-5'>
                <h2 className='text-center'>{Category.category.name}</h2>
                <div className="container">
                    <div className="w-100 mb-5">
                        <figure className='mb-0 w-50 m-auto rounded-3 overflow-hidden'>
                            <img loading='lazy' src={Category.category.image.secure_url} alt={Category.category.name} className='w-100' />
                        </figure>
                    </div>
                    {Category.category.Products.map(pro => <div key={pro._id} className='w-100 mb-4 text-center'>
                        <h3>{pro.name}</h3>    
                    </div> )}
                    <div className="w-100 mb-5">
                        <figure className='mb-0 w-50 m-auto rounded-3 overflow-hidden'>
                            <img loading='lazy' src={Category.category.image.secure_url} alt={Category.category.name} className='w-100' />
                        </figure>
                    </div>
                </div>  
        </div>}
  </>
}
