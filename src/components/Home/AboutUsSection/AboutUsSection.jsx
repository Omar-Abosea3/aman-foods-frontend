import React from 'react'

export default function AboutUsSection({lang}) {
  return <>
        <section id='AboutUs'>
            <div className='container py-5'>
                <div className="row gx-0 rounded-3 bg-white shadow-lg">
                    <div className="col-12 text-center">
                        <div className='py-5 px-2'>
                            {lang == 'en' ? <>
                                <h2 className='mb-5'>Aman Food Enterprise Commercial </h2>
                                <p>The Aman Food Enterprise Commercial is located in region at the heart of kingdom of Saudi Arabia in Al-Qassim Province.
                                    Our team has gained over the years of experience in the international trading import and export on Food supplies in FMCG, frozen stuff, Pickles, nuts, Grains, Dates and raw coffee beans from different origins.
                                    We contract directly from the greatest farmers, producers and traders companies located all over the world.
                                    we have large variety of products which is selected carefully based on quality with competitive prices.
                                </p>
                            </>:<>
                                <h2 className='mb-5'>مؤسسة أمان فود التجارية </h2>
                                <p>.تقع مؤسسة أمان فود التجارية في منطقة القصيم بقلب المملكة العربية السعودية. اكتسب فريقنا على مدى سنوات من الخبرة في مجال التجارة الدولية والاستيراد والتصدير  للإمدادات الغذائية في السلع الاستهلاكية سريعة الحركة والمواد المجمدة والمخللات والمكسرات والحبوب والتمور وحبوب البن الخام من أصول مختلفة. نحن نتعاقد مباشرة مع أكبر شركات المزارعين والمنتجين والتجار الموجودة في جميع أنحاء العالم. ولدينا مجموعة كبيرة ومتنوعة من المنتجات التي تم اختيارها بعناية على أساس الجودة وبأسعار تنافسية</p>
                            </>}
                        </div>
                    </div>
                </div>
            </div>
        </section>
  </>
}
