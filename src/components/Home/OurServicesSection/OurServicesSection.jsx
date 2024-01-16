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
                            <p className='mb-2'>.نحن نقوم بتوريد المواد الغذائية حسب السوق مع احتياجات عملائنا من مختلف المصنوعات والأصول</p>
                            <p>.نقوم بتجارة وتصدير التمور السعودية إلى جميع أنحاء العالم</p>
                        </>}
                    </div>
                </div>
            </div>
        </div>
    </section>
  </>
}
