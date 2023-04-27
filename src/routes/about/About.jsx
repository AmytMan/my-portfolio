import React from 'react'
import Navbar from '../../components/navbar/Navbar';
import "./About.css"
import About_content from './About_content';
import Footer from '../../components/footer/Footer'
function About() {
  
  return (
    <div>
      <Navbar/>
      <About_content/>
      <Footer/>

  </div>  
  )
}

export default About