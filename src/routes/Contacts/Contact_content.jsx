import React from 'react';
import './Contact.css';
import {MdOutlineEmail} from "react-icons/md";
import {RiMessengerLine} from "react-icons/ri";
import { FaViber } from 'react-icons/fa';
import {BsWhatsapp} from 'react-icons/bs';
import {BiPhoneCall} from 'react-icons/bi';
import {HiLocationMarker} from 'react-icons/hi'
function Contact_content() {
  return (
    <div>       
        <div className='contact_image'>
            <h3>Lets Talk</h3>
            <span>Contact Me</span>
            <div className='contact_number'>
                <div className='flex_center'>
                    <BiPhoneCall/> +977 9860309397
                </div>
                <div className='flex_center location'>
                    <HiLocationMarker/> <a href="https://www.google.com/maps/place/27%C2%B041'15.9%22N+85%C2%B018'39.5%22E/@27.6876033,85.3108191,21z/data=!4m4!3m3!8m2!3d27.687745!4d85.31098" target='_blank'>Kupondole,Llitpur</a>
                </div> 
            </div>        
        </div>
        
        <div className='contact_container '>
            <div className="contact_options">
                <article className='contact_option'>
                    <div className="flex_center">
                        <MdOutlineEmail/><span>Email</span>
                    </div>
                    <p>shuvamboy@gmail.com</p>
                    <a href="mailto:shuvamboy@gmail.com" target='_blank'>send mail</a>
                </article>

                <article className='contact_option'>
                    <div className='flex_center'>
                        <RiMessengerLine/><span>Messenger</span>
                    </div>
                    <p>Amit Chand Mandal</p>
                    <a href="https://m.me/amitchand.mandal" target='_blank'>send message</a>
                </article>

                <article className='contact_option'>
                    <div className='flex_center'>
                        <FaViber/><span>Viber</span>
                    </div>                    
                    <p>+9779746311666</p>
                    <a href="viber://add?number=+9779746311666" target='_blank'>send message</a>
                </article>

                <article className='contact_option'>
                    <div className="flex_center">
                        <BsWhatsapp/><span>WhatsApp</span>
                    </div>                   
                    <p>+9779860309397</p>
                    <a href="https://api.whatsapp.com/send?phone=+9779860309397" target='_blank'>send message</a>
                </article>
            </div>

            <div className='form_wrapper'>
                <h4>Feel free to Contact me by submitting the form below and I will get back to you as soon as possible</h4>
                <form action="">
                    <label for="name">Name<sup>*</sup></label>
                    <input type="text" className='input_white' name='name' placeholder='Enter Your Name' required/>
                    <label for="email">Email<sup>*</sup></label>
                    <input type="email"name='email'placeholder='Enter Your Mail'required/>
                    <label for="message">Message<sup>*</sup></label>
                    <textarea name="message" cols="20"   rows="7">Enter Your Message</textarea>         
                    <button type='submit'className='submit_btn'>Submit</button>
                </form>
            </div>        
        </div>

        
    </div>    
)}
export default Contact_content