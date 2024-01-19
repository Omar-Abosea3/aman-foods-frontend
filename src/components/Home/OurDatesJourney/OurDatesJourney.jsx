import React from 'react'

export default function OurDatesJourney({lang}) {

  return <>
    <section id='OurDatesJourney' className='my-5'>
    <div className='container-fluid py-5 px-5'>
            <div className="row gx-0 rounded-3 bg-white shadow-lg overflow-hidden align-items-center">
                <div className="col-12 ">
                    <div className='py-5 px-4 text-center'>
                        {lang == 'en'? <>
                            <h2 className='mb-5 text-white'>Our Dates Journey</h2>
                            <p className='mb-4'>We have selecting great quality standards level, starting selecting stocks from organic farms to clean and sorting and packaging and storage with high level of standard up to our customers over the world.</p>
                            <h3 className='mb-3'>Dates Sourcing</h3>
                            <p className='mb-4'>We are exploring a crossing over the kingdom of Saudi Arabia Regions to buy directly from the greatest farmers, producers of dates.</p>
                            <h3 className='mb-3'>Worldwide Market</h3>
                            <p className='mb-4'>We are building up long-term relationships with Saudi Arabia market and worldwide importers /  Manufacturers of Dates industries.</p>
                        </>:<>
                            <h2 className='mb-5 text-white'>رحلتنا مع التمور</h2>
                            <p className='mb-4'>.نحن نقوم بالاختيار بمستوى عالٍ من معايير الجودة،بداية من اختيار المخزون من المزارع الطبيعية  الي كلا من  التنظيف والفرز والتعبئة والتخزين بمستوى عالٍ من المعايير حتى يصل إلى عملائنا في جميع أنحاء العالم</p>
                            <h3 className='mb-3'>تجميع التمور</h3>
                            <p className='mb-4'>.نحن نستكشف من خلال جميع مناطق المملكة العربية السعودية للشراء مباشرة من أعظم المزارعين ومنتجي التمور</p>
                            <h3 className='mb-3'>السوق العالمى</h3>
                            <p className='mb-4'>.نحن نعمل على بناء علاقات طويلة الأمد مع سوق المحلي في المملكة العربية السعودية وكذلك كل المستوردين / الشركات العاملة  في صناعات التمور في جميع أنحاء العالم</p>
                        </>}
                    </div>
                </div>
                <div className="col-12 overflow-hidden">
                    <img src={require('../../../assets/AboutUs.jpg')} className='w-100' alt="products" />
                </div>
            </div>
        </div>
    </section>
  </>
}
