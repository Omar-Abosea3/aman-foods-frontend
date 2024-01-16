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
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 pe-2 mb-4"><input placeholder={lang == 'en'?"*Name":"الاسم*"} type="text" className="form-control MyInputs w-100"/></div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-6 mb-4"><input placeholder={lang == 'en' ? "*Email" : "البريد الالكتروني*"} id='email1' type="email" className="form-control MyInputs w-100"/></div>
                <div className="col-12 col-sm-12 col-md-12 col-lg-12 mb-4"><textarea placeholder={lang == 'en'? "*Message For Me" : "اكتب رسالتك هنا*"} className="form-control MyInputs" rows="6"></textarea></div>
                <div><button type='button' onClick={sendEmail} className="btn btn-outline-success">{lang == 'en' ? 'SEND MESSAGE' : 'إرسال رسالتك'}</button></div>
            </div>
        </form>
    </section>
  </>
}
