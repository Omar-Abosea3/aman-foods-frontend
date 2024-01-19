import React, { useContext, useEffect, useMemo } from 'react'
import { useParams } from 'react-router-dom';
import LoadingScrean from '../Loading/LoadingScrean';
import { appContext } from '../../Context/appContextProvider';
import { Helmet } from 'react-helmet';

export default function Category_Products({lang}) {
    const {id} = useParams();
    const { getOneCategory , OneCategory} = useContext(appContext);


    const memo = useMemo(()=>{
        getOneCategory(id , lang);
    },[id])
  return <>

        {!OneCategory?<LoadingScrean/>:<>
            <Helmet>
                <title>{OneCategory.category.name}</title>
            </Helmet>
            <div id='specificCategory' className='py-5'>
                    <h2 className='text-center'>{OneCategory.category.name}</h2>
                    <div className="container">
                        <div className="w-100 mb-5">
                            <figure className='mb-0 w-50 m-auto rounded-3 overflow-hidden'>
                                <img loading='lazy' src={OneCategory.category.image.secure_url} alt={OneCategory.category.name} className='w-100' />
                            </figure>
                        </div>
                        {OneCategory.category.Products.map(pro => <div key={pro._id} className='w-100 mb-4 text-center'>
                            <h3>{pro.name}</h3>    
                        </div> )}
                        <div className="w-100 mb-5">
                            <figure className='mb-0 w-50 m-auto rounded-3 overflow-hidden'>
                                <img loading='lazy' src={OneCategory.category.image.secure_url} alt={OneCategory.category.name} className='w-100' />
                            </figure>
                        </div>
                    </div>  
            </div>
        </>}
  </>
}
