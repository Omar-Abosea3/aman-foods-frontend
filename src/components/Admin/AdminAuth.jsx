import React, { useContext, useEffect } from 'react';
import $ from 'jquery';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Helmet } from 'react-helmet';
export default function AdminAuth({lang}) {
    const navigate = useNavigate();
    async function checkAdmin(){
        $(`#adminBtn`).html(`<i class="fa-solid fa-spinner fa-spin-pulse"></i>`);
        const userData = {
            email:$('#adminEmail').val(),
            password:$('#adminPassword').val(),
        };
        console.log(userData);

        if (
            userData.email.toString() !== process.env.REACT_APP_ADMINEMAIL.toString() &&
            userData.password.toString() !== process.env.REACT_APP_ADMINPASSWORD.toString()
        ) {
            $(`#adminBtn`).html(`${lang == 'en'? 'check admin' : 'التحقق من الأدمن'}`);
            $('#adminErrMsg').fadeIn(500 , function(){
                setTimeout(() => {
                    $('#adminErrMsg').fadeOut(500);
                }, 2000);
            })
            return false;
        }
        try {
            console.log('hello');
            const {data} = await axios.post(`https://aman-foods-backend.onrender.com/auth` , userData );
            console.log(data);
            $(`#adminBtn`).html(`${lang == 'en'? 'check admin' : 'التحقق من الأدمن'}`);
            localStorage.setItem('adminToken' , data.token);
            $('#adminSucMsg').fadeIn(500 , function(){
                setTimeout(() => {
                    $('#adminSucMsg').fadeOut(500);
                }, 2000);
            })
            navigate('/dashboard');
        } catch (error) {
            console.log(error);
            $(`#adminBtn`).html(`${lang == 'en'? 'check admin' : 'التحقق من الأدمن'}`);
            $('#adminErrMsg').fadeIn(500 , function(){
                setTimeout(() => {
                    $('#adminErrMsg').fadeOut(500);
                }, 2000);
            })
        }
    }

    
  return <>
    <Helmet>
        <title>Admin Page</title>
    </Helmet>
    <div className='py-5 my-5 d-flex justify-content-center align-items-center'>
        <form className='w-75 p-5 rounded-3 shadow-lg'>
            <h2 className='text-center mb-3'>{lang == 'en' ? 'Admin Page' : 'صفحة الأدمن'}</h2>
            <div style={{display:'none'}} id='adminSucMsg' className='alert alert-success'>success</div>
            <div style={{display:'none'}} id='adminErrMsg' className='alert alert-danger'>you are not admin</div>
            <div className='my-3'>
                <label htmlFor="adminEmail" className='form-label'>{lang == 'en' ? 'Email' : 'البريد الإلكتروني'}</label>
                <input type="email" className='form-control' id='adminEmail' placeholder={lang == 'en' ? 'email' : 'البريد الإلكتروني'}/>
            </div>
            <div className='mb-3'>
                <label htmlFor="adminPassword" className='form-label'>{lang == 'en' ? 'Password' : 'كلمة المرور'}</label>
                <input type="password" className='form-control' id='adminPassword' placeholder={lang == 'en' ? 'password' : 'كلمة المرور'}/>
            </div>
            <div className='text-center'><button id='adminBtn' onClick={checkAdmin} type='button' className='btn btn-dark'>{lang == "en" ? 'check admin' : 'التحقق من الأدمن'}</button></div>
        </form>
    </div>
  
  </>
}
