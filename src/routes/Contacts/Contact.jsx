import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Contact_content from './Contact_content';
import Footer from '../../components/footer/Footer';
function Contact() {
  return (
    <div>
      <div className=''>
        <Navbar/>
        <Contact_content/>
        <Footer/>
      </div>
    </div>
  )
}
export default Contact