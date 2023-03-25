import React, { useState } from 'react'
import { Formik, Form, Field, ErrorMessage } from "formik"
import * as Yup from "yup" // input kontrol etmek için kullanılıyor
import '../components/loginForm2.css'
import icon from "../assets/Icon metro-cross.svg"
import usePasswordToggle from './usePasswordToggle'

import { library } from "@fortawesome/fontawesome-svg-core";
import {
    faUser,
    faEnvelope,
    faLock,
    faEye,
    faEyeSlash,

} from "@fortawesome/free-solid-svg-icons";

library.add(
    faUser,
    faEnvelope,
    faLock,
    faEye,
    faEyeSlash,

);





const initialValues = {

    email: '',
    password: ''
}
const onSubmit = values => {
    console.log(values)
}

//Yup ı burada kullanıyoruz
const validationSchema = Yup.object({
    email: Yup.string().email("Geçersiz Email Adresi!").required("Gerekli!"),
    password: Yup.string().required("Gerekli!")

})

function LoginForm() {
    const [PasswordInputType, ToggleIcon] = usePasswordToggle();

    const [isOpen, setisOpen] = useState(true)

    const handleClick = () =>  {
         setisOpen(false)
    }

    return (
        //handleChange fonksiyonu ile formdaki değişiklikleri yakalayabilir, formik.values kullanarak formun değerlerine erişebilirsiniz.
        <Formik
            initialValues={initialValues}
            validationSchema={validationSchema}
            onSubmit={onSubmit}
        >
            <div className="form">


            <Form style={{display: isOpen ?  'block' : 'none'}}>
                <div className='main-div'>
                    <div className='header form-control'>
                        <label className='giris'>Giriş Yap</label>
                        <button onClick={handleClick} className='exit-button'><img src={icon} alt="çıkış" /></button>

                    </div>
                    <div className='form-control'>
                        <label htmlFor='email'>E-Posta*</label>
                        <Field 
                            
                        type="email"
                            id='email'
                            name='email'
                            placeholder='E-Posta'
                        />
                        <ErrorMessage name='email' />

                    </div>

                    <div className='form-control'>
                        <label htmlFor='password'>Şifre*</label>
                        <div className='password-wrapper'>


                            <Field
                                
                                type={PasswordInputType}
                                id='password'
                                name='password'
                                placeholder='Şifreniz'

                            />
                            <div className="password-toogle-icon">{ToggleIcon}</div>



                        </div>

                        <ErrorMessage name='password' />

                    </div>
                    <div className='form-control checkbox'>
                        <div className='check'>
                            <Field
                                className='checkbox'
                                type="checkbox"
                                id='checkbox'
                                name='checkbox'

                            />
                            <label className='label2' htmlFor='checkbox'>Beni hatırla</label>

                        </div>
                        <a className='a2' href={""}>Şifremi unuttum</a>

                    </div>
                    <div className='form-control'>

                        <button className='button' type='submit'>Giriş Yap</button>

                    </div>


                    <div className='form-control'>
                        <div className='last'>

                        <label >Hesabın yok mu? Hemen&nbsp;<a className='a' href={""}>kayıt ol</a></label>
                        <label className='label' htmlFor='checkbox'>*Doldurulması Zorunlu alanlar</label>

                        </div>




                    </div>
                </div>
            </Form>
            </div>

        </Formik>
    )
}

export default LoginForm