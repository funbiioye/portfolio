import React from 'react'
import './contact.css'
import phone from '../../images/phone.png'
import email from '../../images/email.jpg'
import location from '../../images/location.png'
import  { useRef, useState } from 'react'
import emailjs from 'emailjs-com';



const Contact = () => {

    const formRef = useRef()
    const [done, setDone] = useState(false)

    const handleSubmit = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_sh6nimq', 'template_4j8wrxo', formRef.current, 'user_wZF9JlCEqqs3D6hS2wt7F')
        .then((result) => {
            console.log(result.text);
            setDone(true)
        }, (error) => {
            console.log(error.text);
        });
        
    }

    return (
        <div className='c'>
            <div className='c-bg'></div>
            <div className='c-wrapper'>
                <div className='c-left'>
                    <h1 className='c-title'>Let's discuss your projects.</h1>
                    <div className='c-info'>
                        <div className='c-info-item'>
                            <img className='c-icon' src={phone} alt='' />
                            +(234) 0810-184-6424, +(234) 0802-546-6898 
                        </div>
                        <div className='c-info-item'>
                            <img className='c-icon' src={email} alt='' />
                            funbiioye95@gmail.com
                        </div>
                        <div className='c-info-item'>
                            <img className='c-icon' src={location} alt='' />
                            No4, behind covenant lifeway church, kosunti ground, camp Abeokuta, Ogun State, Nigeria.
                        </div>

                    </div>
                </div>
                <div className='c-right'>
                    <p className='c-desc'><b>Get in touch</b>, I'm open to internship opportunities, junior roles and project collaborations.</p>
                    <form ref={formRef} onSubmit={handleSubmit}>
                        <input type='text' placeholder='Name' name='user_name' />
                        <input type='text' placeholder='Subject' name='user_subject' />
                        <input type='text' placeholder='Email' name='user_email' />
                        <textarea rows='5' placeholder='Message' name='message' />
                        <button>Submit</button>
                        {done && 'Thank You!!!'}
                    </form>
                </div>
               
            </div>

        </div>
    )
}

export default Contact
