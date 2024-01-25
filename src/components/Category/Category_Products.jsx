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
  return (
    <>
      {!OneCategory ? (
        <LoadingScrean />
      ) : (
        <>
          <Helmet>
            <title>{OneCategory.category.name}</title>
          </Helmet>
          <div id="specificCategory" className="py-5">
            <h2 className="text-center">{OneCategory.category.name}</h2>
            <div className="container">
              <div className="w-100 mb-5">
                {/* <figure className='mb-0 w-50 m-auto rounded-3 overflow-hidden'>
                                <img loading='lazy' src={OneCategory.category.image.secure_url} alt={OneCategory.category.name} className='w-100' />
                            </figure> */}
                {OneCategory.category.name == "التمور" ? (
                  <div className="text-end">
                    <h3 className="mb-3">
                      {" "}
                      :نحن نعمل في توريد و تجارة مجموعة واسعة من التمور الأكثر
                      شهرة في المملكة العربية السعودية{" "}
                    </h3>
                    <h5 className="mb-2">تمر السكرى القصيم -</h5>
                    <h5 className="mb-2">تمر عجوة المدينة -</h5>
                    <h5 className="mb-2">تمر المجدول -</h5>
                    <h5 className="mb-2">تمر السجعى -</h5>
                    <h5 className="mb-2">تمر خضرى -</h5>
                    <h5 className="mb-2">تمر المبروم -</h5>
                  </div>
                ) : OneCategory.category.name == "المكسرات" ? (
                  <div className="text-end">
                    <h3 className="mb-3">
                      {" "}
                      :نحن نقوم بتوريد كثير من أصناف المسكرات حول العالم
                    </h3>
                    <h5 className="mb-2">الكاجو -</h5>
                    <h5 className="mb-2">الفسدق -</h5>
                    <h5 className="mb-2">البندق -</h5>
                    <h5 className="mb-2">اللوز -</h5>
                    <h5 className="mb-2">عين الجمل -</h5>
                    <h5 className="mb-2">الفول السودانى-</h5>
                  </div>
                ) : OneCategory.category.name == "القهوة" ? (
                  <div className="text-end">
                    <h3 className="mb-3">
                      {" "}
                      :نحن نقوم بتوريد كثير من أصناف حبوب القهوة الروبوستا و
                      الارابيكا حول العالم
                    </h3>
                    <h5 className="mb-2">حبوب قهوة البرازيل -</h5>
                    <h5 className="mb-2">حبوب قهوة كولومبيا -</h5>
                    <h5 className="mb-2">حبوب قهوة اندونسيا -</h5>
                    <h5 className="mb-2">حبوب قهوة فيتنام -</h5>
                    <h5 className="mb-2">حبوب قهوة الهند -</h5>
                    <h5 className="mb-2">حبوب قهوة إثيوبيا-</h5>
                  </div>
                ) : OneCategory.category.name == "الحبوب والبقول" ? (
                  <div className="text-end">
                    <h3 className="mb-3">
                      {" "}
                      : نحن نقوم بتوريد كثير من أصناف الحبوب و البقوليات حول
                      العالم
                    </h3>
                    <h5 className="mb-2">الفول كامل الحبة -</h5>
                    <h5 className="mb-2">الفول المجروش -</h5>
                    <h5 className="mb-2">الحمص -</h5>
                    <h5 className="mb-2">الفاصوليا البيضا -</h5>
                    <h5 className="mb-2">اللوبيا -</h5>
                    <h5 className="mb-2">العدس -</h5>
                  </div>
                ) : OneCategory.category.name == "Dates" ? (
                  <div className="text-start">
                    <h3 className="mb-3">
                      We are sourcing and supplying wide range of Most
                      well-Known Dates of Kingdom of Saudi Arabia Dates :
                    </h3>
                    <h5 className="mb-2">- Sukkari Al-Qassim dates</h5>
                    <h5 className="mb-2">- Ajwa Medina dates</h5>
                    <h5 className="mb-2">- Magdool dates</h5>
                    <h5 className="mb-2">- Sagai dates</h5>
                    <h5 className="mb-2">- Khadrawy dates</h5>
                    <h5 className="mb-2">- Mabroom dates</h5>
                  </div>
                ) : OneCategory.category.name == "Nuts" ? (
                  <div className="text-start">
                    <h3 className="mb-3">
                      We are souring and suppling many kinds of nuts worldwide :{" "}
                    </h3>
                    <h5 className="mb-2">- Cashew</h5>
                    <h5 className="mb-2">- Pistachio</h5>
                    <h5 className="mb-2">- Hazelnut</h5>
                    <h5 className="mb-2">- Almonds</h5>
                    <h5 className="mb-2">- Walnuts Kernel</h5>
                    <h5 className="mb-2">- Peanut Kernel</h5>
                  </div>
                ) : OneCategory.category.name == "Coffees" ? (
                  <div className="text-start">
                    <h3 className="mb-3">
                      We are souring and suppling many kinds of coffees beans
                      Robusta And Arabica beans worldwide :{" "}
                    </h3>
                    <h5 className="mb-2">- Brazil Coffee Beans</h5>
                    <h5 className="mb-2">- Colombia Coffee Beans</h5>
                    <h5 className="mb-2">- Ethiopia Coffee Beans </h5>
                    <h5 className="mb-2">- India Coffee Beans</h5>
                    <h5 className="mb-2">- Indonesia Coffee Beans</h5>
                    <h5 className="mb-2">- Vietnam Coffee Beans</h5>
                  </div>
                ) : OneCategory.category.name == "Grains And Pulses" ? (
                  <div className="text-start">
                    <h3 className="mb-3">
                      We are sourcing and supplying wide range of Most
                      well-Known Dates of Kingdom of Saudi Arabia Dates :
                    </h3>
                    <h5 className="mb-2">- Sukkari Al-Qassim dates</h5>
                    <h5 className="mb-2">- Ajwa Medina dates</h5>
                    <h5 className="mb-2">- Magdool dates</h5>
                    <h5 className="mb-2">- Sagai dates</h5>
                    <h5 className="mb-2">- Khadrawy dates</h5>
                    <h5 className="mb-2">- Mabroom dates</h5>
                  </div>
                ) : (
                  ""
                )}
              </div>
              <div className="text-success text-center mb-4">
                {lang == "en" ? (
                  <h2>{OneCategory.category.name} Products</h2>
                ) : (
                  <h2>منتجات {OneCategory.category.name}</h2>
                )}
              </div>
              <div className="row gy-3 justify-content-center">
                {OneCategory.category.Products.map((pro) => (
                    <div key={pro._id} className="col-3 categoryProductsSize">
                    <figure className="mb-0 p-3 bg-white rounded-3 shadow-lg">
                        <div className="overflow-hidden position-relative">
                        <img
                            src={pro.images[0].secure_url}
                            className="w-100 rounded-3"
                            alt={pro.name}
                        />
                        </div>
                        <figcaption className="p-2 text-center">
                        <h3>{pro.name}</h3>
                        </figcaption>
                    </figure>
                    </div>
                ))}
              </div>
              {/* <div className="w-100 mb-5">
                            <figure className='mb-0 w-50 m-auto rounded-3 overflow-hidden'>
                                <img loading='lazy' src={OneCategory.category.image.secure_url} alt={OneCategory.category.name} className='w-100' />
                            </figure>
                        </div> */}
            </div>
          </div>
        </>
      )}
    </>
  );
}
