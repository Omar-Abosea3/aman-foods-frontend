import React from 'react';

export default function OurMissionAndOurVisionSection({lang}) {
  return <>
        <section id='OurMissinAndOurVision'>
            <div className="container py-5">
                <div className="row gy-4">
                    <div className="col-lg-6 col-md-6 col-12 px-2">
                        <div className='p-3 text-center rounded-3 shadow-lg'>
                            {lang == 'en'?<>
                                <h2 className='text-success'>Our Vision</h2>
                                <p>We are aiming to supply the best food Stuff to meet the needs of the community and customers locally and internationally and continuing to build-up our reputation for reliability. We are committed to be the best food products partners for sourcing suppliers and our customers.</p>
                            </>:<>
                                <h2 className='text-success'>رؤيتنا</h2>
                                <p>نحن نهدف إلى توفير أفضل المواد الغذائية لتلبية احتياجات المجتمع والعملاء محليًا ودوليًا ومواصلة بناء سمعتنا من حيث الموثوقية. نحن ملتزمون بأن نكون أفضل شركاء المنتجات الغذائية لمصادر الموردين وعملائنا.</p>
                            </>}
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6 col-12 px-2">
                        <div className='p-3 text-center rounded-3 shadow-lg'>
                            {lang == 'en'?<>
                                <h2 className='text-success'>Our Mission</h2>
                                <p>We are aiming to supply the best food Stuff to meet the needs of the community and customers locally and internationally and continuing to build-up our reputation for reliability. We are committed to be the best food products partners for sourcing suppliers and our customers.</p>
                            </>:<>
                                <h2 className='text-success'>مهمتنا</h2>
                                <p>نحن في مؤسستنا جادون في ضمان تقديم مواد غذائية عالية الجودة تتفوق على المنافسين وأسعار تنافسية تلبي احتياجات ورغبات المستهلك من خلال موظفينا المؤهلين، بما يتماشى مع قيمنا الأساسية واحتياجات مجتمعنا.</p>
                            </>}
                        </div>
                    </div>
                </div>
            </div>
        </section>
  </>
}
