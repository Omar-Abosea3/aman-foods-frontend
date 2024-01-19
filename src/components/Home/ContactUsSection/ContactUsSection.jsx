import React from 'react'
import $ from 'jquery'
import axios from 'axios'
export default function ContactUsSection({lang}) {

    const sendEmail = async () => {
        const userData = {
            email:$('#email1').val(),
            text:$('textarea').val()
        }
        try {
            const {data} = await axios.post(`https://aman-foods-backend.onrender.com/sendemail`, userData);
            console.log(data);
            setTimeout(() => {
                window.location.reload();
            }, 2000);
        } catch (error) {
            console.log(error);
        }
    }

  return <>
    <section id="ContactUs" className="p-5 my-5">
        <form className="container m-auto">
            <div className="row p-5 rounded-3 shadow-lg">
                <div className="my-5 w-100">
                    <h2 className="fw-bolder fs-1 text-center text- black">{lang == 'en' ? 'Contact Us' : 'تواصل معنا'}</h2>
                </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 pe-2 mb-4">
                    <label htmlFor="userName" className='form-label'>{lang == 'en' ? "Enter Your Name" : "ادخل اسمك"}</label>
                    <input id='userName' placeholder={lang == 'en'?"*Name":"الاسم*"} type="text" className="form-control MyInputs w-100"/>
                 </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 mb-4">
                    <label htmlFor="userEmail" className='form-label'>{lang == 'en' ? 'Enter Your Email' : "ادخل بريدك الالكتروني"}</label>
                    <input id='userEmail' placeholder={lang == 'en' ? "*Email" : "البريد الالكتروني*"} type="email" className="form-control MyInputs w-100"/>
                 </div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 mb-4">
                    <label htmlFor="textarea" className='form-label'>{lang == 'en'? 'Enter A Message Here' :'اترك رسالتك هنا'}</label>
                    <textarea id='textarea' placeholder={lang == 'en'? "*Message For Me" : "اكتب رسالتك هنا*"} className="form-control MyInputs" rows="6"></textarea>
                </div>
                <div className='text-center mb-3'><button type='button' onClick={sendEmail} className="btn btn-outline-success">{lang == 'en' ? 'SEND MESSAGE' : 'إرسال رسالتك'}</button></div>
                <div className='w-100 d-flex justify-content-center'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d13712.25958367301!2d31.021506!3d30.772758!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xeef138cd31cb3e41!2sInternational%20for%20Trading%20and%20Import!5e0!3m2!1sen!2seg!4v1644310000063!5m2!1sen!2seg"  style={{border: '0px', width: '70%'}} allowFullScreen="" loading="lazy" data-origwidth="600" data-origheight="250"></iframe>
            </div>
            </div>
        </form>
    </section>
  </>
}
