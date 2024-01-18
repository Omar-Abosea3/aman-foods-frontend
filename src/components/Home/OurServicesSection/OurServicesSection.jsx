import React from 'react'

export default function OurServicesSection({lang}) {
  return <>
    <section id='OurServices' className='my-5'>
        <div className='container py-5'>
            <div className="row gx-0 rounded-3 shadow-lg">
                <div className="col-12 text-center">
                    <div className='py-5 px-2'>
                        {lang == 'en'? <>
                            <h2 className='mb-5 text-white'>OUR SERVICES</h2>
                            <p className='mb-2'>We are supplying Food stuff depending on market with our customer needs from different manufactures and origins.</p>
                            <p>Trading and exporting Saudi Arabia Dates over the world.</p>
                        </>:<>
                            <h2 className='mb-5 text-white'>خدماتنا</h2>
                            <p className='mb-2'>.نحن نقوم بتوريد المواد الغذائية حسب متطلبات السوق و احتياجات عملائنا من كثير من المصنعين  والدول حوّل العالم</p>
                            <p>.نقوم ايضاً بتجارة وتصدير التمور السعودية إفي السوق المحلي و كذالك الي جميع أنحاء العالم</p>
                        </>}
                    </div>
                </div>
            </div>
        </div>
    </section>
  </>
}
