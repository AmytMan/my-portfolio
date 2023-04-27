import React from 'react'
import {MdFacebook} from 'react-icons/md'
import {AiFillInstagram} from 'react-icons/ai'
import {BsTwitter} from 'react-icons/bs'
import {IoLogoLinkedin} from 'react-icons/io';
import { HiLocationMarker } from 'react-icons/hi';
import { BiPhoneCall } from 'react-icons/bi';
import './Footer.css';
function Footer() {
  return (
    <div>
      <footer> 
        <div className='footer_wrapper'>
          <div className='footer_text'>
            <span className='flex_center_gap'>
              <BiPhoneCall/> +977 9860309397
            </span>
            <span className='flex_center_gap'>
              <HiLocationMarker/> <a href="https://www.google.com/maps/place/27%C2%B041'15.9%22N+85%C2%B018'39.5%22E/@27.6876033,85.3108191,21z/data=!4m4!3m3!8m2!3d27.687745!4d85.31098" target='_blank'>Kupondole,Llitpur</a>
            </span>
            <span>Living, learning, & leveling up one day at a time.</span>          
          </div>

          <div >
            <h4 className='text_center'>Social</h4>
            <ul className='socailmedia_icon'>
              <li>
                <a href="https://m.me/amitchand.mandal" target='_blank'><MdFacebook/></a>
              </li>
              <li>
                <a href="#"><AiFillInstagram/></a>
              </li>
              <li>
                <a href="#"><BsTwitter/></a>
              </li>
              <li>
                <a href="#"><IoLogoLinkedin/> </a>
              </li>
            </ul>
          </div>
        </div>
          <hr />
        <div>
          <h5 className='text_center'> Copyright &copy; 2023. Made by <strong>Amit Chand Mandal</strong></h5>
        </div>
      </footer>
    </div>
  )
}

export default Footer